"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight, FaShippingFast } from "react-icons/fa";
import { MdOutlineHelpOutline } from "react-icons/md";
import { GrInProgress } from "react-icons/gr";
import { IoMdCheckmarkCircleOutline } from "react-icons/io"; // Example for delivered
import { AiOutlineCloseCircle } from "react-icons/ai"; // Example for cancelled
import { IMAGE_URL, getOrders } from "@/config/Api";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const Orders = () => {
  const [orderData, setOrderData] = useState([]);

  const getOrderData = async () => {

    const userDataString = Cookies.get("userData");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const userId = Number(userData.id);

      await getOrders({userId:userId})
        .then((res) => {
          if (res.data.success) {
            setOrderData(res.data.data.rows);
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
    getOrderData();
  }, []);

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
            <GrInProgress size={15} />
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
      {orderData?.map((item, i) => (
        <div key={i}>
          <div className="rounded-lg bg-gray-100 my-4">
            <Link href={`orders/${item.orderId}`}>
              <div className="flex items-center justify-between px-6 pt-3 text-sm">
                <div className="flex flex-row gap-2">
                  <p className="">Order id: </p>
                  <span className="text-blue-600 underline">
                    {item.orderId}
                  </span>
                </div>
                <FaChevronRight />
              </div>
            </Link>
            <div className="grid grid-cols-12 gap-5 p-6">
              <div className="col-span-4 md:col-span-2">
                <div className="relative aspect-[3/4]">
                <Link href={`/products/${item?.variantId}`}>
                  <Image
                    src={IMAGE_URL + item.variant.productPhotos[0].url}
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
                    {item.variant.name}
                  </h3>
                </div>

                <div className="grid grid-cols-2 text-xs md:text-sm my-4">
                  <p className="">
                    <span className="font-bold text-gray-500">Color : </span>
                    {item.variant.colorName}
                  </p>
                  <p>
                    <span className="font-bold text-gray-500"> Size :</span>{" "}
                    {item.variant.size}
                  </p>
                </div>

                <div className="mt-2 text-sm font-semibold text-gray-500">
                  Qty : {item.qty}
                </div>

                <div className="flex justify-start gap-2 md:gap-3 items-center mt-4">
                  {renderStatusButton(item.status)}
                  <button className="flex justify-center gap-1 items-center text-xs md:text-sm font-semibold text-white bg-teal-500 px-3 rounded-md py-2">
                    <MdOutlineHelpOutline size={15} className="text-md" />
                    Help
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Orders;
