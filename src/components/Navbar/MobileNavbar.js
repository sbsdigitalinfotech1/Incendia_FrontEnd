"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

const ProfileData = [
  {
    title: "Profile",
    link: "/myaccount/profile",
  },
  {
    title: "Orders",
    link: "/myaccount/orders",
  },
  {
    title: "Favourites",
    link: "/myaccount/favourites",
  },
  {
    title: "Address",
    link: "/myaccount/address",
  },
];

export default function MobileNavbar({ open, setOpen, data, isLogedIn }) {

  const router = useRouter ();
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-96">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full min-w-64 flex-col overflow-y-auto bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6">
                      <div className="flex items-start justify-between px-4">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Menu
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200 mt-3"
                          >
                            {data.map((item, i) => (
                              <li key={i}>
                                <Link
                                  href={item.link}
                                  className="flex py-3 px-4"
                                  onClick={() => setOpen(false)}
                                >
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3 className="min-w-max">{item.title}</h3>
                                  </div>
                                </Link>
                              </li>
                            ))}

                            {isLogedIn &&
                              ProfileData.map((item, i) => (
                                <li key={i}>
                                  <Link
                                    href={item.link}
                                    className="flex py-3 px-4"
                                    onClick={() => setOpen(false)}
                                  >
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3 className="min-w-max">
                                        {item.title}
                                      </h3>
                                    </div>
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      {isLogedIn ? (
                        <div className="mt-6">
                          <div
                            onClick={() => {
                              Cookies.remove("userData");
                              setOpen(false);
                              router.push('/login');
                            }}
                            className="flex items-center justify-center bg-gray-900 text-white py-2 rounded-md"
                          >
                            Logout
                          </div>
                        </div>
                      ) : (
                        <div className="mt-6">
                          <Link
                            href="/login"
                            className="flex items-center justify-center bg-gray-900 text-white py-2 rounded-md"
                          >
                            Login
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </Dialog.Panel>
                
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
