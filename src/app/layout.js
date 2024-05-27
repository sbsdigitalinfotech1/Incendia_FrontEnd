"use client";

import { Inter } from "next/font/google";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./globals.scss";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { generateGuestId } from "@/config/Api";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  useEffect(() => {
    const setGuestIdInCookies = async () => {
      const guestId = Cookies.get("guestId");
      if (!guestId) {
        try {
          const newGuestId = await generateGuestId();
          Cookies.set("guestId", newGuestId.data.data.guestId, { expires: 7 });
        } catch (error) {
          console.error("Failed to generate guest ID:", error);
        }
      }
    };

    setGuestIdInCookies();
  }, []);

  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
  
}
