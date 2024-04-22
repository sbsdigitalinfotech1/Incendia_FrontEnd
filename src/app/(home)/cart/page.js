import Image from "next/image";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { BiSolidDiscount } from "react-icons/bi";

const page = () => {
  return (
    <>
      <div className="mx-auto sm:px-6 max-w-2xl md:px-4 py-6 md:py-10 lg:max-w-7xl lg:px-8 h-full  bg-gray-100 p-0">
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
              <div className="mt-4 flex items-center ">
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
                <p className="text-sm font-semibold bg-yellow-100 p-2">
                  BEYOUNG100
                </p>
              </div>
              <hr />

              <p className="text-sm font-bold mt-3 text-teal-400 cursor-pointer">
                Show more....
              </p>
            </div>
            <div className="mt-6 bg-white border p-4 shadow-md rounded-md py-3 ">
              <h3 className="font-bold text-lg opacity-85">
                PRICE DETAILS (2 items)
              </h3>
              <hr />
              <div className="flex items-center justify-between text-sm my-3">
                <p>Total MRP (Inc. of Taxes)</p>
                <p>₹4998</p>
              </div>
              <div className="flex items-center justify-between text-sm my-3">
                <p>Beyoung Discount</p>
                <p>- ₹3002</p>
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
                <p>₹1996</p>
              </div>
            </div>

            <div className="mt-6 bg-white border p-4 shadow-md rounded-md py-3">
              <div className="flex justify-between items-center font-bold text-lg opacity-85">
                <p className="">Total Amount</p>
                <p>₹1996</p>
              </div>
              <p className="bg-green-600 text-white p-1.5 py-2 text-sm mt-2 flex items-center justify-center">
                You Saved ₹3002 on this order
              </p>
              <button className="bg-teal-500 hover:bg-teal-600 text-white p-1.5 py-3 mt-4 flex items-center justify-center w-full font-bold text-xl">
                CHECKOUT SECURELY
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
