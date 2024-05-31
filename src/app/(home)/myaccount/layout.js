"use client";

import { generateGuestId } from "@/config/Api";
import { GlobalStateContext } from "@/store/GlobalContext";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export default function RootLayout({ children }) {
  const { setGuestId } = useContext(GlobalStateContext);
  const router = useRouter();

  const handleLogout = async () => {
    Cookies.remove("userData");
    Cookies.remove("guestId");
    await generateGuestId()
      .then((res) => {
        if (res.data.success) {
          Cookies.set("guestId", res.data.data.guestId, { expires: 7 });
          setGuestId(res.data.data.guestId);
        }
      })
      .catch((err) => {
        const errorMessage = err.response?.data?.message || err.message;
        toast.error(errorMessage);
      });

    router.push("/login");
  };

  useEffect(() => {
    const userData = Cookies.get("userData");
    if (!userData) {
      router.push("/login");
    }
  }, []);

  return (
    <>
      <div className="mx-auto px-2 max-w-2xl md:px-4 py-6 md:py-10 lg:max-w-7xl lg:px-8 h-full p-0">
        <div className="grid grid-cols-12">
          <div className="col-span-3 hidden md:block">
            <div className=" border-1 border-gray-300">
              <div className="border-b-1 border-gray-300 bg-gray-100 flex flex-col gap-1 items-center justify-center py-3">
                <div className="w-7 h-7 p-12 rounded-full bg-black text-5xl  text-white flex justify-center items-center">
                  S
                </div>
                <p className="text-lg font-medium">SBS</p>
                <span className="text-base text-gray-400 "> #BeIncane</span>
              </div>
              <div className="flex flex-col">
                <Link
                  href="/myaccount/orders"
                  className="p-4 text-sm cursor-pointer"
                >
                  Order
                </Link>
                <hr />
                <Link
                  href="/myaccount/address"
                  className="p-4 text-sm cursor-pointer"
                >
                  Address
                </Link>
                <hr />
                <Link
                  href="/myaccount/profile"
                  className="p-4 text-sm cursor-pointer"
                >
                  Profile
                </Link>
                <hr />
                <Link
                  href="/myaccount/favourites"
                  className="p-4 text-sm cursor-pointer"
                >
                  Favourites
                </Link>
                <hr />
                <Link
                  href="/myaccount/coupons"
                  className="p-4 text-sm cursor-pointer"
                >
                  Coupons
                </Link>
                <hr />
                <Link
                  href="/myaccount/tickets"
                  className="p-4 text-sm cursor-pointer"
                >
                  Tickets
                </Link>
                <hr />
                <button
                  onClick={handleLogout}
                  className="bg-yellow-300 flex items-center justify-center py-1.5 m-3 rounded-lg hover:bg-yellow-200 font-medium"
                >
                  LOGOUT
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-9 pl-0 md:pl-8 lg:pl-28">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
