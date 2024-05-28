"use client";
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { IMAGE_URL } from "@/config/Api";
import CheckOutPaymentDetails from "@/components/CheckOutPaymentDetails/CheckOutPaymentDetails";
import { Player } from "@lottiefiles/react-lottie-player";
import empty from "@/assets/images/empty.json";
import { GlobalStateContext } from "@/store/GlobalContext";

const Cart = () => {
  const { cartData, loading ,paymentDetails, removeItemFromCart, getCartData }= useContext(GlobalStateContext);
  const lottieRef = useRef(null);

  const handleRemoveItem = (variantId) => {
    removeItemFromCart(variantId);
  };

  useEffect(()=>{
   getCartData()
  },[])

  return (
    <>
      <div className="mx-auto px-6 max-w-2xl md:px-4 py-6 md:py-10 lg:max-w-7xl lg:px-8 h-full  bg-gray-100 p-0">
        <div className="grid grid-cols-12 ">
          {loading ? (
            <div className="lg:col-span-7 bg-white m-1 md:m-3 rounded-md col-span-12 md:p-6 p-0">
              <p>Loading...</p>
            </div>
          ) : cartData.length > 0 ? (
            <div className="lg:col-span-7 bg-white m-1 md:m-3 rounded-md col-span-12 md:p-6 p-0 max-h-dvh overflow-scroll sc">
              {cartData.map((item, i) => (
                <div
                  key={i}
                  className="bg-white border p-4 shadow-md rounded-md mb-2"
                >
                  <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-4 md:col-span-3">
                      <div className="relative aspect-[7/9]">
                        <Image
                          src={`${
                            IMAGE_URL + item.variant.productPhotos[0].url
                          }`}
                          fill={true}
                          style={{
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                          alt="image"
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="col-span-8 md:col-span-9">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-sm md:text-md truncate opacity-21">
                          {item.variant.name}
                        </h3>
                        <CiHeart
                          size={25}
                          className="cursor-pointer font-semibold"
                        />
                      </div>
                      <p className="text-gray-500 text-xs">Plain Shirts</p>
                      <div className="mt-2 text-sm md:text-md">
                        <strong>₹{item.variant.price}</strong>
                        &nbsp;
                        <span
                          className={`line-through text-gray-300 ${
                            item.variant.mrp - item.variant.price == 0
                              ? "hidden"
                              : " "
                          }`}
                        >
                          ₹{item.variant.mrp}
                        </span>
                        <span
                          className={`text-sm font-medium text-green-300 ${
                            Math.round(
                              ((item.variant.mrp - item.variant.price) /
                                item.variant.mrp) *
                                100
                            )
                              ? ""
                              : "hidden"
                          }`}
                        >
                          (
                          {Math.round(
                            ((item.variant.mrp - item.variant.price) /
                              item.variant.mrp) *
                              100
                          )}
                          % off)
                        </span>
                      </div>
                      <p className="text-xs mb-5">
                        You Save&nbsp;
                        <span className="text-green-600">
                          {item.variant.mrp - item.variant.price}
                        </span>
                      </p>
                      <hr />
                      <div className="grid grid-cols-2 text-xs md:text-sm my-1">
                        <p>
                          <span className="font-bold text-gray-500">
                            Color:{" "}
                          </span>
                          {item.variant.colorName}
                        </p>
                        <p>
                          <span className="font-bold text-gray-500">
                            Size:{" "}
                          </span>
                          {item.variant.size}
                        </p>
                      </div>
                      <hr />
                      <div className="flex items-center justify-between mt-2 gap-2">
                        <select className="cursor-pointer px-4 w-1/2 md:w-auto sm:px-8 py-1 border border-gray-300 bg-gray-100 rounded-md">
                          <option>{item.qty}</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                        <div>
                          <MdDelete
                            size={23}
                            className="cursor-pointer font-semibold text-red-500"
                            onClick={() => handleRemoveItem(item.variantId)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="lg:col-span-7 bg-white m-1 md:m-3 rounded-md col-span-12 md:p-6 p-0">
              <Player
                ref={lottieRef}
                autoplay
                loop
                src={empty}
                style={{ height: "300px", width: "300px" }}
              />
              <h2 className="flex items-center justify-center text-lg font-normal mt-4">
                Your Cart is Empty!
              </h2>
            </div>
          )}
          <div className="lg:col-span-5 m-3 bg-white p-0 md:p-6 rounded-md col-span-12">
            <CheckOutPaymentDetails paymentDetails={paymentDetails} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
