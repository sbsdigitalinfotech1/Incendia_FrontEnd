"use client"

import React,{useState} from "react";
import Image from "next/image";
import { GrInProgress } from "react-icons/gr";
import Link from "next/link";
import { GiWallet } from "react-icons/gi";
import ViewBreakUpModal from "@/components/ViewBreakUpModal/ViewBreakUpModal.js";


const OrderDetails = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <h3 className="text-sm font-semibold">Order #4195330</h3>
      <hr className="mt-2" />
      <div className="grid grid-cols-12 gap-5 py-6 pr-6">
        <div className=" col-span-4 md:col-span-2">
          <div className="relative aspect-[3/4]">
            <Image
              src="https://www.beyoung.in/api/cache/catalog/products/new_checked_shirt_image_9_12_2022/grey_cotton_solid_shirts_for_men_base_19_10_2023_700x933.jpg"
              fill={true}
              style={{ objectFit: "cover", objectPosition: "center" }}
              alt="image"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="col-span-8 md:col-span-10">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-sm md:text-md truncate opacity-21">
              Grey- Cotton Solid Shirts For Men
            </h3>
          </div>

          <div className="grid grid-cols-2 text-xs md:text-sm  my-4">
            <p className="">
              <span className="font-bold text-gray-500">Color : </span>
              Light Grey
            </p>
            <p>
              <span className="font-bold text-gray-500"> Size :</span> M
            </p>
          </div>

          <div className="mt-2 text-sm font-semibold text-gray-500">
            Qty : 1
          </div>
          <p className="font-semibold text-sm mt-3">Rs.998.00</p>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-between my-4">
        <div>
          <button className="flex justify-center gap-1 items-center text-xs md:text-sm font-semibold text-white bg-green-500 px-4 rounded-md py-3">
            <GrInProgress size={15} />
            Processing
          </button>
        </div>
        <div className="text-sm opacity-80">24-Apr 2024 02:49 Pm</div>
      </div>
      <hr />
      <div className="flex items-center justify-between font-semibold  my-4">
        <div>Total Order Price</div>
        <div className="flex flex-col items-center justify-end">
          ₹ 1048
          <Link href="#" className="text-green-500 underline font-normal text-sm" onClick={openModal}>
            View Breakup
          </Link>
          {isModalOpen && <ViewBreakUpModal onClose={closeModal} />}
        </div>
      </div>
      <hr />
      <div className="flex flex-col items-start my-4 ">
        <p className="font-semibold py-1 ">Shipping Details</p>
        <p className="font-semibold py-1 text-sm">Sbs Digital</p>
        <p className=" text-sm">
          dbdbdb, Locality :- dddbdd, 202280, ALIGARH, Uttar Pradesh{" "}
        </p>
      </div>
      <hr />
      <div className="flex flex-col  justify-start my-4">
        <h3 className="font-semibold">Payment Method</h3>
        <div className="flex justify-start items-center gap-1 text-md">
          <GiWallet size={25} />
          COD
        </div>
      </div>
      <hr />
      <div className="flex flex-col justify-start  my-4">
        <p className="font-semibold">Contact Number </p>
        <p className="text-sm">Phone: +91 8965858581 </p>
        <p className="text-sm">Gmail: himanshu@sbsdigitalinfotech.com </p>
      </div>

      <button className=" w-full bg-yellow-300 flex items-center justify-center py-1.5 rounded-lg hover:bg-yellow-200 font-medium mt-2">
        NEED HELP?
      </button>
    </>
  );
};

export default OrderDetails;

