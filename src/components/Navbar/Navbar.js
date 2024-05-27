"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import Logo from "@/assets/images/incendiaLogo.png";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import SideCart from "@/components/SideCart/SideCart";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/20/solid";
import MobileNavbar from "@/components/Navbar/MobileNavbar";
import { IoPersonCircleSharp } from "react-icons/io5";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { GlobalStateContext } from "@/store/GlobalContext";

const Navbar = () => {
  const {count} = useContext(GlobalStateContext);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [isLogedIn, setisLogedIn] = useState(null);

  const navData = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Products",
      link: "/products",
    },
    {
      title: "About Us",
      link: "/aboutus",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  const router = useRouter();

  // Function to handle the link click event
  const handleLinkClick = () => {
    // Get the user data from cookies
    const userData = Cookies.get("userData");

    // Determine the destination URL based on the presence of user data
    const destination = userData ? "/myaccount/profile" : "/login";

    // Navigate to the destination URL
    router.push(destination);
  };

  return (
    <>
      <nav className="pt-4">
        <div className="flex justify-between items-center lg:px-20 pb-4 px-3">
          <div
            className="flex md:hidden"
            onClick={() => {
              setOpen2(true);
              setisLogedIn(Cookies.get("userData"));
            }}
          >
            <Bars3BottomLeftIcon
              className="w-5 h-5 font-bold text-gray-900"
              aria-hidden="true"
            />
          </div>
          <div>
            <div>
              <Image src={Logo} width={120} height={120} alt="logo" />
            </div>
          </div>
          <div className="md:flex hidden justify-items-center">
            <ul className="flex gap-6 justify-center">
              {navData.map((item, i) => (
                <Link href={item.link} key={i}>
                  <li>{item.title}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex gap-4 items-center">
            <Link href="/myaccount/favourites">
              <FaRegHeart className="icon hidden md:inline-block cursor-pointer" />
            </Link>
            <div
              className="relative me-3 md:me-0 inline-block cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <BsCart className="icon" />
              <span
                className="absolute top-[-10px] right-[-10px] text-center rounded-full bg-red-500 px-2"
                style={{
                  minWidth: "20px",
                  minHeight: "20px",
                  fontSize: "12px",
                  color: "white",
                }}
              >
                {count}
              </span>
            </div>
            {
              <div>
              {/* Use a div with an onClick handler to simulate the Link component */}
              <div onClick={handleLinkClick}>
                <IoPersonCircleSharp
                  size={25}
                  className="icon hidden md:inline-block cursor-pointer"
                />
              </div>
            </div>
            }
          </div>
        </div>

        {/* offer strip */}

        <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
          <div
            className="absolute w-screen left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
              }}
            />
          </div>
          <div
            className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
              }}
            />
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 animate-marquee md:animate-none whitespace-nowrap">
            <p className="text-sm leading-6 text-gray-900">
              <strong className="font-semibold">GeneriCon 2023</strong>
              <svg
                viewBox="0 0 2 2"
                className="mx-2 inline h-0.5 w-0.5 fill-current"
                aria-hidden="true"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              Join us in Denver from June 7 – 9 to see what’s coming
              next.&nbsp;&nbsp;&nbsp;
              <Link
                href="#"
                className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              >
                Register now <span aria-hidden="true">&rarr;</span>
              </Link>
            </p>
          </div>
          <div className="flex flex-1 justify-end">
            <button
              type="button"
              className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
            >
              <span className="sr-only">Dismiss</span>
              {/* <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" /> */}
            </button>
          </div>
        </div>
      </nav>

      <SideCart open={open} setOpen={setOpen} />
      <MobileNavbar
        open={open2}
        setOpen={setOpen2}
        data={navData}
        isLogedIn={isLogedIn}
      />
    </>
  );
};

export default Navbar;
