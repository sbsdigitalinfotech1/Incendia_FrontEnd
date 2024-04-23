import Image from "next/image";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

import CheckOutPaymentDetails from "@/components/CheckOutPaymentDetails/CheckOutPaymentDetails";

const page = () => {
  return (
    <>
      <div className="mx-auto px-6 max-w-2xl md:px-4 py-6 md:py-10 lg:max-w-7xl lg:px-8 h-full  bg-gray-100 p-0">
        <div className="grid grid-cols-12 ">
          <div className="lg:col-span-7 bg-white m-1 md:m-3 rounded-md col-span-12 md:p-6 p-0">
            <div className=" bg-white border p-4 shadow-md rounded-md mb-2">
              <div className="grid grid-cols-12 gap-5">
                <div className=" col-span-4 md:col-span-3">
                  <div className="relative aspect-[7/9]">
                    <Image
                      src="https://www.beyoung.in/api/cache/catalog/products/new_checked_shirt_image_9_12_2022/grey_cotton_solid_shirts_for_men_base_19_10_2023_700x933.jpg"
                      fill={true}
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      alt="image"
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="col-span-8 md:col-span-9">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-sm md:text-md truncate opacity-21">
                      Grey- Cotton Solid Shirts For Men
                    </h3>
                    <CiHeart
                      size={25}
                      className=" cursor-pointer font-semibold"
                    />
                  </div>
                  <p className="text-gray-500 text-xs">Plain Shirts</p>
                  <div className=" mt-2 text-sm md:text-md">
                    <strong className=""> ₹799</strong> &nbsp;
                    <samll className="line-through text-gray-300">₹1300</samll>
                    <small className="text-green-500 tracking-tight font-semibold">
                      (40% off)
                    </small>
                  </div>

                  <p className="text-xs mb-5">
                    You Save &nbsp;{" "}
                    <span className="text-green-600">₹3002.00</span>
                  </p>
                  <hr />
                  <div className="grid grid-cols-2 text-xs md:text-sm  my-1">
                    <p className="">
                      <span className="font-bold text-gray-500">Color : </span>
                      Light Grey
                    </p>
                    <p>
                      <span className="font-bold text-gray-500"> Size :</span> M
                    </p>
                  </div>
                  <hr />
                  <div className="flex items-center justify-between mt-2 gap-2">
                    <select className="cursor-pointer px-4 w-1/2 md:w-auto sm:px-8 py-1 border border-gray-300 bg-gray-100 rounded-md">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    <div>
                      <MdDelete
                        size={23}
                        className=" cursor-pointer font-semibold text-red-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-white border p-4 shadow-md rounded-md mb-2">
              <div className="grid grid-cols-12 gap-5">
                <div className=" col-span-4 md:col-span-3">
                  <div className="relative aspect-[7/9]">
                    <Image
                      src="https://www.beyoung.in/api/cache/catalog/products/new_checked_shirt_image_9_12_2022/grey_cotton_solid_shirts_for_men_base_19_10_2023_700x933.jpg"
                      fill={true}
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      alt="image"
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="col-span-8 md:col-span-9">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-sm md:text-md truncate opacity-21">
                      Grey- Cotton Solid Shirts For Men
                    </h3>
                    <CiHeart
                      size={25}
                      className=" cursor-pointer font-semibold"
                    />
                  </div>
                  <p className="text-gray-500 text-xs">Plain Shirts</p>
                  <div className=" mt-2 text-sm md:text-md">
                    <strong className=""> ₹799</strong> &nbsp;
                    <samll className="line-through text-gray-300">₹1300</samll>
                    <small className="text-green-500 tracking-tight font-semibold">
                      (40% off)
                    </small>
                  </div>

                  <p className="text-xs mb-5">
                    You Save &nbsp;{" "}
                    <span className="text-green-600">₹3002.00</span>
                  </p>
                  <hr />
                  <div className="grid grid-cols-2 text-xs md:text-sm  my-1">
                    <p className="">
                      <span className="font-bold text-gray-500">Color : </span>
                      Light Grey
                    </p>
                    <p>
                      <span className="font-bold text-gray-500"> Size :</span> M
                    </p>
                  </div>
                  <hr />
                  <div className="flex items-center justify-between mt-2 gap-2">
                    <select className="cursor-pointer px-4 w-1/2 md:w-auto sm:px-8 py-1 border border-gray-300 bg-gray-100 rounded-md">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    <div>
                      <MdDelete
                        size={23}
                        className=" cursor-pointer font-semibold text-red-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className="lg:col-span-5 m-3 bg-white p-0 md:p-6 rounded-md col-span-12">
            <CheckOutPaymentDetails/>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
