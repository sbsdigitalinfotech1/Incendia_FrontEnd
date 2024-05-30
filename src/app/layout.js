"use client";

import { Inter } from "next/font/google";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./globals.scss";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Toaster position ="top-center" reverseOrder={false} />
      </body>
    </html>
  );
  
}
