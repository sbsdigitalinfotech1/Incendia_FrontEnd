"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { GrInProgress } from "react-icons/gr";
import { GiWallet } from "react-icons/gi";
import { IMAGE_URL, getOrders } from "@/config/Api";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { FaShippingFast } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdShoppingCartCheckout } from "react-icons/md";
import Link from "next/link";

const OrderDetails = ({ params }) => {
  const orderId = params.slug;
  const [orderDetails, setOrderDetails] = useState([]);

  const getOrderDetails = async () => {
    const userDataString = Cookies.get("userData");

    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const userId = userData.id;
      console.log(userId);

      const data = {
        orderId: orderId,
        userId: userId,
      };

      await getOrders(data)
        .then((res) => {
          if (res.data.success) {
            setOrderDetails(res.data?.data?.rows[0]);
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

  useEffect(() => {
    getOrderDetails();
  }, []);

  // getting date and time  Data from OrderDetails ***********************************************************

  // Your timestamp string
  const timestamp = orderDetails.createdAt;

  // Parse it into a Date object
  const dateObject = new Date(timestamp);

  // Extract the date parts
  const year = dateObject.getFullYear();
  const month = (dateObject.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based, so add 1
  const day = dateObject.getDate().toString().padStart(2, "0");

  // Extract the time parts
  let hours = dateObject.getHours();
  const minutes = dateObject.getMinutes().toString().padStart(2, "0");
  const seconds = dateObject.getSeconds().toString().padStart(2, "0");

  // Determine AM or PM
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours from 24-hour to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  hours = hours.toString().padStart(2, "0");

  // Format date and time as needed
  const date = `${year}-${month}-${day}`;
  const time = `${hours}:${minutes}:${seconds} ${ampm}`;

  // console.log(`Date: ${date}`);
  // console.log(`Time: ${time}`);


  const renderStatusButton = (status) => {
    switch (status) {
      case 0:
        return (
          <button className="flex justify-center gap-1 items-center text-xs md:text-sm font-semibold text-white bg-yellow-500 px-3 rounded-md py-2">
            <GrInProgress size={15} />
            Pending
          </button>
        );
      case 1:
        return (
          <button className="flex justify-center gap-1 items-center text-xs md:text-sm font-semibold text-white bg-blue-500 px-3 rounded-md py-2">
            <MdShoppingCartCheckout size={15} />
            Ordered
          </button>
        );
      case 2:
        return (
          <button className="flex justify-center gap-1 items-center text-xs md:text-sm font-semibold text-white bg-purple-500 px-3 rounded-md py-2">
            <FaShippingFast size={15} />
            Dispatched
          </button>
        );
      case 3:
        return (
          <button className="flex justify-center gap-1 items-center text-xs md:text-sm font-semibold text-white bg-green-500 px-3 rounded-md py-2">
            <IoMdCheckmarkCircleOutline size={15} />
            Delivered
          </button>
        );
      case 4:
        return (
          <button className="flex justify-center gap-1 items-center text-xs md:text-sm font-semibold text-white bg-red-500 px-3 rounded-md py-2">
            <AiOutlineCloseCircle size={15} />
            Cancelled
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <h3 className="text-sm font-semibold">Order {orderDetails.orderId}</h3>
      <hr className="mt-2" />
      <div className="grid grid-cols-12 gap-5 py-6 pr-6">
        <div className=" col-span-4 md:col-span-2">
          <div className="relative aspect-[3/4]">
          <Link href={`/products/${orderDetails?.variantId}`}>
            <Image
              src={IMAGE_URL + orderDetails?.variant?.productPhotos[0].url}
              fill={true}
              style={{ objectFit: "cover", objectPosition: "center" }}
              alt=""
              className="rounded-lg"
            />
            </Link>
          </div>
        </div>
        <div className="col-span-8 md:col-span-10">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-sm md:text-md truncate opacity-21">
              {orderDetails?.variant?.name}
            </h3>
          </div>

          <div className="grid grid-cols-2 text-xs md:text-sm  my-4">
            <p className="">
              <span className="font-bold text-gray-500">Color : </span>
              {orderDetails?.variant?.colorName}
            </p>
            <p>
              <span className="font-bold text-gray-500"> Size :</span> {orderDetails?.variant?.size}
            </p>
          </div>

          <div className="mt-2 text-sm font-semibold text-gray-500">
            Qty : {orderDetails?.qty}
          </div>
          <p className="font-semibold text-sm mt-3">
            Rs.{orderDetails?.qty * orderDetails?.variant?.price}
          </p>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-between my-4">
        <div>
          
            
            {renderStatusButton(orderDetails?.status)}
          
        </div>
        <div className="text-sm opacity-80">{`${date}  ${time}`}</div>
      </div>
      <hr />
      <div className="flex items-center justify-between font-semibold  my-4">
        <div>Total Order Price</div>
        <div className="flex flex-col items-center justify-end">
          ₹ {orderDetails?.qty * orderDetails?.priceAtTimeOfPay}
        </div>
      </div>
      <hr />
      <div className="flex flex-col items-start my-4">
        <p className="font-semibold py-1 ">Shipping Details</p>
        <p className="font-semibold py-1 text-sm">{orderDetails?.address?.firstName}</p>
        <p className=" text-sm">
          {`${orderDetails?.address?.addressLine1}, ${orderDetails?.address?.addressLine2}, ${orderDetails?.address?.city},${orderDetails?.address?.state}, ${orderDetails?.address?.pincode}`}
        </p>
      </div>
      <hr />
      <div className="flex flex-col  justify-start my-4">
        <h3 className="font-semibold">Payment Method</h3>
        <div className="flex justify-start items-center gap-1 text-md">
          <GiWallet size={25} />
          {orderDetails?.paymentType}
        </div>
      </div>
      <hr />
      <div className="flex flex-col justify-start  my-4">
        <p className="font-semibold">Contact Number </p>
        <p className="text-sm">Phone: {orderDetails?.address?.phone} </p>
        <p className="text-sm">Gmail: {orderDetails?.address?.email} </p>
      </div>

      <button className=" w-full bg-yellow-300 flex items-center justify-center py-1.5 rounded-lg hover:bg-yellow-200 font-medium mt-2">
        NEED HELP?
      </button>
    </>
  );
};

export default OrderDetails;
