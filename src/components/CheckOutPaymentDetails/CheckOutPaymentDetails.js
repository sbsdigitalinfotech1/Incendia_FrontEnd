"use client";

import React from "react";
import { BiSolidDiscount } from "react-icons/bi";
import Link from "next/link";
import { makeOrder } from "@/config/Api";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const CheckOutPaymentDetails = ({ product,  updateAddressFun,  selectedOption,  paymentDetails}) => {
const router = useRouter();

  const makeOrderSuccess = async () => {
    const userDataString = Cookies.get("userData");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const userId = userData.id;

      const data = {
        products: product,
        userId: userId,
        paymentType: "online",
        addressId: selectedOption,
      };

      await makeOrder(data)
        .then((res) => {
          if (res.data?.success) {
            toast.success(res.data?.data?.message);
            router.push("/myaccount/orders")
          }
        })
        .catch((err) => {
          if (err.response?.data?.message) {
            return toast.error(err.response?.data?.message);
          }
          toast.error(err.message);
        });
    }
  };
  

  return (
    <>
      <div className="  bg-white border p-4 shadow-md rounded-md ">
        <div className="flex justify-start gap-2 items-center">
          <BiSolidDiscount
            size={25}
            className=" cursor-pointer font-semibold"
          />
          <h3 className="font-semibold text-md truncate opacity-21">
            Offers and discount
          </h3>
        </div>
        <div className="mt-4 flex items-center">
          <input
            type="text"
            placeholder="Enter Code"
            className="bg-gray-100 py-2 pl-3 rounded-l-lg focus:outline-none w-3/4"
          />
          <button className="py-2 px-2.5 w-1/4 bg-teal-400 text-white tracking-tighter rounded-r-lg">
            APPLY
          </button>
        </div>

        <hr className="mt-5" />
        <div className="flex  justify-between items-center py-2">
          <p className="text-sm text-gray-400">
            Flat ₹100 off on orders above ₹999 -
          </p>
          <p className="text-sm font-semibold bg-yellow-100 p-2">BEYOUNG100</p>
        </div>
        <hr />

        <p className="text-sm font-bold mt-3 text-teal-400 cursor-pointer">
          Show more....
        </p>
      </div>
      <div className="mt-6 bg-white border p-4 shadow-md rounded-md py-3 ">
        <h3 className="font-bold text-lg opacity-85">PRICE DETAILS</h3>
        <hr />
        <div className="flex items-center justify-between text-sm my-3">
          <p>Total MRP (Inc. of Taxes)</p>
          <p>₹{paymentDetails.totalMrp}</p>
        </div>
        <div className="flex items-center justify-between text-sm my-3">
          <p>Incendia Discount</p>
          <p>- ₹{paymentDetails.totalDiscount}</p>
        </div>
        <div className="flex items-center justify-between text-sm my-3">
          <p>Shipping</p>
          <div>
            <span className="line-through">₹49 </span>&nbsp;
            <span className="text-green-500">Free</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm my-3">
          <p>Cart Total</p>
          <p>₹{paymentDetails.grandtotal}</p>
        </div>
      </div>

      <div className="mt-6 bg-white border p-4 shadow-md rounded-md py-3">
        <div className="flex justify-between items-center font-bold text-lg opacity-85">
          <p className="">Total Amount</p>
          <p>₹{paymentDetails.grandtotal}</p>
        </div>
        <p className="bg-green-600 text-white p-1.5 py-2 text-sm mt-2 flex items-center justify-center">
          You Saved ₹{paymentDetails.totalDiscount} on this order
        </p>
        {updateAddressFun ? (
            <button
              onClick={() => {
                makeOrderSuccess();
                updateAddressFun({ id: selectedOption, active: true });
              }}
              className="bg-teal-500 hover:bg-teal-600 text-white p-1.5 py-3 mt-4 flex items-center justify-center w-full font-bold text-xl"
            >
              {paymentDetails && `CHECKOUT SECURELY`}
            </button>
          
        ) : (
          <Link
            href={
              paymentDetails?.grandtotal != 0
                ? `/checkout/shipping`
                : `/products`
            }
          >
            <button className="bg-teal-500 hover:bg-teal-600 text-white p-1.5 py-3 mt-4 flex items-center justify-center w-full font-bold text-xl">
              {paymentDetails?.grandtotal != 0
                ? `CHECKOUT SECURELY`
                : `CONTINUE SHOPPING`}
            </button>
          </Link>
        )}
      </div>
    </>
  );
};

export default CheckOutPaymentDetails;
