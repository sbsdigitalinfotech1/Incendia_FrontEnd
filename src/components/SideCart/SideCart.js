"use client";
import { Fragment, useState, useEffect, useRef, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { GlobalStateContext } from "@/store/GlobalContext";
import { IMAGE_URL, removeFromCart } from "@/config/Api";
import Cookies from "js-cookie";
import { Player } from "@lottiefiles/react-lottie-player";
import empty from "@/assets/images/empty.json";

export default function SideCart({ open, setOpen }) {
  const {
    cartData,
    removeItemFromCart,
    getCartData,
    updateCartData,
    paymentDetails,
  } = useContext(GlobalStateContext);
  const lottieRef = useRef(null);

  const handleRemoveItem = (variantId) => {
    removeItemFromCart(variantId);
    setOpen(false);
  };

  const handleUpdateCart = (variantId, value) => {
    updateCartData(variantId, value);
  };

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
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
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

                      {cartData.length > 0 ? (
                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {cartData.map((product, i) => (
                                <li key={i} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 relative">
                                    <Link
                                      href={`/products/${product.variantId}`}
                                      onClick={() => {
                                        setOpen(false);
                                      }}
                                    >
                                      <Image
                                        src={`${
                                          IMAGE_URL +
                                          product.variant.productPhotos[0].url
                                        }`}
                                        alt="image"
                                        className="h-full w-full object-cover object-center"
                                        fill
                                        style={{
                                          objectFit: "cover",
                                          objectPosition: "center",
                                        }}
                                      />
                                    </Link>
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>{product.variant.name}</h3>
                                        <p className="ml-4">{product.price}</p>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {product.variant.product.name}
                                      </p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p className="text-gray-500">
                                        <select
                                          className="cursor-pointer px-4 w-1/2 md:w-auto sm:px-8 py-1 border border-gray-300 bg-gray-100 rounded-md min-w-16"
                                          value={product.qty}
                                          onChange={(e) => {
                                            handleUpdateCart(
                                              product.variantId,
                                              e.target.value
                                            );
                                          }}
                                        >
                                          <option value={1}>1</option>
                                          <option value={2}>2</option>
                                          <option value={3}>3</option>
                                          <option value={4}>4</option>
                                          <option value={5}>5</option>
                                          <option value={6}>6</option>
                                          <option value={7}>7</option>
                                          <option value={8}>8</option>
                                          <option value={9}>9</option>
                                          <option value={10}>10</option>
                                        </select>
                                      </p>

                                      <div className="flex">
                                        <button
                                          type="button"
                                          className="font-medium text-indigo-600 hover:text-indigo-500"
                                          onClick={() =>
                                            handleRemoveItem(product.variantId)
                                          }
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : (
                        <div className="lg:col-span-7 bg-white m-1 md:m-3 rounded-md col-span-12 md:p-6 p-4 max-h-dvh  ">
                          <Player
                            ref={lottieRef}
                            autoplay
                            loop
                            src={empty}
                            // style={{ height: "300px", width: "300px" }}
                          />
                          <div className="flex items-center justify-center mt-4">
                            <h2 className="text-lg font-normal ">
                              Your Cart is Empty!
                            </h2>
                            {/* <p>
                              <Link href="/products">
                                <button
                                  type="button"
                                  className="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                  Continue Shopping
                                  <span className="font-bold"> &rarr;</span>
                                </button>
                              </Link>
                            </p> */}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>₹{paymentDetails.totalMrp}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <Link
                          onClick={() => setOpen(false)}
                          href={
                            Cookies.get("userData")
                              ? `/checkout/cart`
                              : `/login`
                          }
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </Link>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{" "}
                          <Link href="/products" onClick={() => setOpen(false)}>
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Continue Shopping
                              <span> &rarr;</span>
                            </button>
                          </Link>
                        </p>
                      </div>
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
