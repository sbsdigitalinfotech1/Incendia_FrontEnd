"use client";

import { useState } from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import voucherIcon from "@/assets/images/voucherIcon.png";
import { Carousel } from "react-responsive-carousel";
import { BiSolidOffer } from "react-icons/bi";
import { BsCartFill } from "react-icons/bs";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import ship from "@/assets/images/ship.jpg";
import cod from "@/assets/images/cod.jpg";
import { Slider } from "@nextui-org/react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function Product({ params }) {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  const rating = {
    row: [
      {
        id: 5,
        value: 16,
      },
      {
        id: 4,
        value: 2,
      },
      {
        id: 3,
        value: 1,
      },
      {
        id: 2,
        value: 1,
      },
      {
        id: 1,
        value: 1,
      },
    ],
    totalRating: 21,
  };

  return (
    <>
      <div className="mx-auto sm:px-6 max-w-2xl px-4 py-6 md:py-10 lg:max-w-7xl lg:px-8">
        <div className="md:grid grid-cols-12 gap-12">
          <div className="col-span-6  gap-2 rounded-sm">
            <Carousel style={{ width: "100%" }} emulateTouch infiniteLoop>
              <div>
                <img
                  alt=""
                  src="https://www.beyoung.in/api/cache/catalog/products/new_checked_shirt_image_9_12_2022/grey_cotton_solid_shirts_for_men_base_19_10_2023_700x933.jpg"
                />
              </div>
              <div>
                <img
                  alt=""
                  src="https://www.beyoung.in/api/cache/catalog/products/shirt_squre_image_update_14_3_2022/grey_cotton_solid_shirts_for_men_full_view_3_2_2023_700x933.jpg"
                />
              </div>
              <div>
                <img
                  alt=""
                  src="https://www.beyoung.in/api/cache/catalog/products/shirt_squre_image_update_14_3_2022/grey_cotton_solid_shirts_for_men_neck_3_2_2023_700x933.jpg"
                />
              </div>
              <div>
                <img
                  alt=""
                  src="https://www.beyoung.in/api/cache/catalog/products/shirt_squre_image_update_14_3_2022/grey_cotton_solid_shirts_for_men_sleeve_2_3_2_2023_700x933.jpg"
                />
              </div>
              <div>
                <img
                  alt=""
                  src="https://www.beyoung.in/api/cache/catalog/products/shirt_squre_image_update_14_3_2022/grey_cotton_solid_shirts_for_men_back_3_2_2023_700x933.jpg"
                />
              </div>
              <div>
                <img
                  alt=""
                  src="https://www.beyoung.in/api/cache/catalog/products/new_checked_shirt_image_9_12_2022/grey_cotton_solid_shirts_for_men_base_19_10_2023_700x933.jpg"
                />
              </div>
              <div>
                <img
                  alt=""
                  src="https://www.beyoung.in/api/cache/catalog/products/feature_images/grey_cotton_solid_shirts_for_men_hover_08_08_2023_700x933.jpg"
                />
              </div>
            </Carousel>
            {/* <div className="col-span-2 flex flex-col gap-2">
              <div className=" aspect-square rounded-sm relative">
                <Image
                  src="https://www.beyoung.in/api/cache/catalog/products/shirt_squre_image_update_14_3_2022/grey_cotton_solid_shirts_for_men_full_view_3_2_2023_100x133.jpg"
                  fill={true}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  alt="companyLogo"
                />
              </div>
              <div className=" aspect-square rounded-sm relative">
                <Image
                  src="https://www.beyoung.in/api/cache/catalog/products/shirt_squre_image_update_14_3_2022/grey_cotton_solid_shirts_for_men_back_3_2_2023_100x133.jpg"
                  fill={true}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  alt="companyLogo"
                />
              </div>
              <div className=" aspect-square rounded-sm relative">
                <Image
                  src="https://www.beyoung.in/api/cache/catalog/products/feature_images/grey_cotton_solid_shirts_for_men_hover_08_08_2023_700x933.jpg"
                  fill={true}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  alt="companyLogo"
                />
              </div>
              <div className=" aspect-square rounded-sm relative">
                <Image
                  src="https://www.beyoung.in/api/cache/catalog/products/shirt_squre_image_update_14_3_2022/grey_cotton_solid_shirts_for_men_neck_3_2_2023_100x133.jpg"
                  fill={true}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  alt="companyLogo"
                />
              </div>
              <div className=" aspect-square rounded-sm relative">
                <Image
                  src="https://www.beyoung.in/api/cache/catalog/products/shirt_squre_image_update_14_3_2022/grey_cotton_solid_shirts_for_men_back_3_2_2023_100x133.jpg"
                  fill={true}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  alt="companyLogo"
                />
              </div>
              <div className=" aspect-square rounded-sm"></div>
            </div>
            <div className="col-span-10 rounded-sm relative">
              <Image
                src="https://www.beyoung.in/api/cache/catalog/products/new_checked_shirt_image_9_12_2022/grey_cotton_solid_shirts_for_men_base_19_10_2023_700x933.jpg"
                fill={true}
                style={{ objectFit: "cover", objectPosition: "center" }}
                alt="companyLogo"
                loading="lazy"
              />
            </div> */}
          </div>
          <div className="rounded-sm col-span-6 px-2 md:px-5 md:py-3 py-6">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-xl truncate opacity-21">
                Grey- Cotton Solid Shirts For Men
              </h1>
              <CiHeart
                size={40}
                className="p-2.5 rounded-full cursor-pointer bg-gray-100 font-semibold"
              />
            </div>
            <span className="text-gray-300 leading-4"> Plain Shirts </span>
            <div className="mt-4">
              <strong className="text-xl"> ₹799</strong> &nbsp;
              <samll className="line-through text-gray-300"> ₹1300 </samll>
              <span className="text-green-500 tracking-tight font-semibold">
                {" "}
                (40% off){" "}
              </span>
            </div>
            <span className="text-gray-500 mt-3 items-center font-semibold text-sm">
              Inclusive of All Taxes + Free Shipping
            </span>
            <div className="mt-1 flex items-center justify-start gap-3.5">
              <div class="flex items-center text-yellow-500 text-2xl">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p>
                {" "}
                <span className="font-semibold"> 4.8 </span>{" "}
                <span className="text-xs text-gray-500">
                  {" "}
                  ({28} Ratings & Reviews){" "}
                </span>
              </p>
            </div>

            <div className="flex gap-1 items-center  mt-3">
              <Image src={voucherIcon} width={30} alt="icon" />
              <p className="text-xs font-semibold">
                Extra ₹{100} OFF on ₹{999} (Code:BEYOUNG100)
              </p>
            </div>

            <h3 className="text-md mt-6 font-medium">
              {" "}
              COLOR: <span className="text-gray-500">Elephand Grey</span>
            </h3>
            <div className="flex flex-wrap items-center gap-1 mt-3">
              <div className="rounded-full cursor-pointer border-2 border-gray-300 shadow-lg">
                <div className="rounded-full cursor-pointer border-2 border-white w-12 h-12 bg-orange-500"></div>
              </div>
              <div className="rounded-full cursor-pointer border-2 border-gray-300 shadow-lg">
                <div className="rounded-full cursor-pointer border-2 border-white w-12 h-12 bg-green-500"></div>
              </div>
              <div className="rounded-full cursor-pointer border-2 border-gray-300 shadow-lg">
                <div className="rounded-full cursor-pointer border-2 border-white w-12 h-12 bg-pink-500"></div>
              </div>
              <div className="rounded-full cursor-pointer border-2 border-gray-300 shadow-lg">
                <div className="rounded-full cursor-pointer border-2 border-white w-12 h-12 bg-gray-500"></div>
              </div>
              <div className="rounded-full cursor-pointer border-2 border-gray-300 shadow-lg">
                <div className="rounded-full cursor-pointer border-2 border-white w-12 h-12 bg-yellow-500"></div>
              </div>
              <div className="rounded-full cursor-pointer border-2 border-gray-300 shadow-lg">
                <div className="rounded-full cursor-pointer border-2 border-white w-12 h-12 bg-white"></div>
              </div>
              <div className="rounded-full cursor-pointer border-2 border-gray-300 shadow-lg">
                <div className="rounded-full cursor-pointer border-2 border-white w-12 h-12 bg-red-500"></div>
              </div>
              <div className="rounded-full cursor-pointer border-2 border-gray-300 shadow-lg">
                <div className="rounded-full cursor-pointer border-2 border-white w-12 h-12 bg-blue-500"></div>
              </div>
              <div className="rounded-full cursor-pointer border-2 border-gray-300 shadow-lg">
                <div className="rounded-full cursor-pointer border-2 border-white w-12 h-12 bg-slate-500"></div>
              </div>
              <div className="rounded-full cursor-pointer border-2 border-gray-300 shadow-lg">
                <div className="rounded-full cursor-pointer border-2 border-white w-12 h-12 bg-lime-500"></div>
              </div>
              <div className="rounded-full cursor-pointer border-2 border-gray-300 shadow-lg">
                <div className="rounded-full cursor-pointer border-2 border-white w-12 h-12 bg-teal-300"></div>
              </div>
              <div className="rounded-full cursor-pointer border-2 border-gray-300 shadow-lg">
                <div className="rounded-full cursor-pointer border-2 border-white w-12 h-12 bg-green-400"></div>
              </div>
              <div className="rounded-full cursor-pointer border-2 border-gray-300 shadow-lg">
                <div className="rounded-full cursor-pointer border-2 border-white w-12 h-12 bg-cyan-400"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <div className="text-md mt-6 font-medium"> SIZE</div>
                <div className="text-md mt-6 font-bold text-teal-400">
                  {" "}
                  SIZE CHART
                </div>
              </div>
              <div className="flex flex-wrap gap-2 items-center mt-2 mb-5">
                <button className="aspect-square rounded-md border-2 border-inherit w-12 flex justify-center items-center text-xs hover:bg-gray-300 cursor-pointer">
                  S
                </button>
                <button className="aspect-square rounded-md border-2 border-inherit w-12 flex justify-center items-center text-xs hover:bg-gray-300 cursor-pointer ">
                  M
                </button>
                <button className="aspect-square rounded-md border-2 border-inherit w-12 flex justify-center items-center text-xs hover:bg-gray-300 cursor-pointer  bg-gray-300 ">
                  L
                </button>
                <button className="aspect-square rounded-md border-2 border-inherit w-12 flex justify-center items-center text-xs hover:bg-gray-300 cursor-pointer ">
                  XL
                </button>
                <button className="aspect-square rounded-md border-2 border-inherit w-12 flex justify-center items-center text-xs hover:bg-gray-300 cursor-pointer ">
                  XXL
                </button>
              </div>
              <span className="text-sm font-bold">Sizes Not Available ? </span>{" "}
              &nbsp;
              <span className="text-sm font-bold text-teal-400 underline">
                Notify Me{" "}
              </span>
            </div>

            <div className="flex justify-start items-center gap-1 mt-5">
              <p className="mr-1">QTY:</p>
              <span className="qty">
                <select className="ps-4 pr-10 py-2 border-1 border-gray-600 cursor-pointer">
                  <option selected>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
              </span>
            </div>

            <button
              className="relative w-full shadow-md mt-6 cursor-pointer"
              onClick={handleShow}
            >
              <div className="block w-full ps-3 pr-6 py-2 border text-md font-semibold border-gray-600 bg-white rounded-md appearance-none focus:outline-none focus:border-blue-500">
                <div className="flex items-center gap-2">
                  <BiSolidOffer size={20} />
                  OFFERS FOR YOU
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-800 font-bold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </button>
            {show && (
              <div className="bg-gray-100 p-6">
                <h3 className="font-semibold">Cred</h3>
                <p className="text-sm mb-3">
                  Get Cashback upto Rs 500/- on using Cred pay.
                </p>
                <h3 className="font-semibold">Freecharge</h3>
                <p className="text-sm mb-3">
                  Get Cashback upto Rs 50/- on using Freecharge UPI.
                </p>
                <h3 className="font-semibold">Mobikwik</h3>
                <p className="text-sm mb-3">
                  Get Upto ₹250/- Cashback on Mobikwik Wallet.
                </p>
              </div>
            )}
            <div className="md:relative fixed bottom-0 left-0 w-screen md:w-full shadow-2xl md:shadow-none z-10 md:z-0 bg-white md:bg-none py-2 md:py-0 px-2 md:px-0 ">
              <div className="w-full mt-0 md:mt-5 grid grid-cols-12 gap-2 md:gap-2">
                <button className="col-span-6 md:col-span-12 lg:col-span-5 p-3 font-semibold bg-indigo-700 hover:bg-indigo-600 text-white flex items-center justify-center gap-1 rounded-md">
                  <BsCartFill className="inline" size={20} />
                  ADD TO CART
                </button>
                <button className="col-span-6 md:col-span-12 lg:col-span-7 p-3 bg-yellow-300 hover:bg-yellow-400 text-black font-semibold flex items-center justify-center gap-1 rounded-md">
                  <FaRegArrowAltCircleRight className="inline" size={20} /> BUY
                  NOW
                </button>
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-sm font-semibold">DELIVERY OPTIONS</h3>
              <div className="border w-full px-3 pt-3 mt-2">
                <ul>
                  <li className="text-sm mb-3 flex gap-3 items-center">
                    <Image src={cod} width={30} alt="cod" />
                    Cash On Delivery
                  </li>
                  <li className="text-sm mb-3 flex gap-3 items-center">
                    <Image src={ship} width={30} alt="cod" />
                    Express Shipping
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto sm:px-6 max-w-2xl px-4 py-5 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold"> Product Details</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2  mt-3">
          <div className="bg-gray-100 py-6">
            <div className="px-6">
              <h2 className="font-semibold mb-3">Product Highlights</h2>
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className=" divide-gray-200 text-sm mt-5">
                  <tr>
                    <td className=" py-2 whitespace-nowrap font-semibold">
                      Fabric:
                    </td>
                    <td className=" py-2 whitespace-nowrap">Carbon Cotton</td>
                  </tr>
                  <tr>
                    <td className=" py-2 whitespace-nowrap font-semibold">
                      Neck:
                    </td>
                    <td className=" py-2 whitespace-nowrap">Classic Collar</td>
                  </tr>
                  <tr>
                    <td className=" py-2 whitespace-nowrap font-semibold">
                      Pattern:
                    </td>
                    <td className=" py-2 whitespace-nowrap">Solid</td>
                  </tr>
                  <tr>
                    <td className=" py-2 whitespace-nowrap font-semibold">
                      Sleeve:
                    </td>
                    <td className=" py-2 whitespace-nowrap">Full-Sleeves</td>
                  </tr>
                  <tr>
                    <td className=" py-2 whitespace-nowrap font-semibold">
                      Fit:
                    </td>
                    <td className=" py-2 whitespace-nowrap">Regular-fit</td>
                  </tr>
                  <tr>
                    <td className=" py-2 whitespace-nowrap font-semibold">
                      Style:
                    </td>
                    <td className=" py-2 whitespace-nowrap">
                      Formal & Casual Wear
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-gray-100 py-6">
            <div className="px-6">
              <h2 className="font-semibold mb-3">Product Description</h2>
              <ul className="list-disc px-4 text-sm">
                <li className="py-2">
                  Constructed with World’s Finest Carbon Cotton
                </li>
                <li className="py-2">
                  Pinnacle smoothness & comfort by Carbon molecules
                </li>
                <li className="py-2">Renowned as light-weight formals</li>
                <li className="py-2">
                  Refined tailored fit with precise stitching
                </li>
                <li className="py-2">
                  Available in 10 eternal & premium shades
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-100 py-6">
            <div className="px-6">
              <h2 className="font-semibold mb-3">Delivery & Return Policy</h2>
              <p className="list-disc text-sm">
                We provide free shipping on all orders. Pay online to avoid
                charges of ₹50/product applicable on COD orders. The return or
                exchange can be done within 15 days after delivery. Every
                delivery from Beyoung is processed under excellent condition and
                in the fastest time possible. For our beloved customer’s care,
                we give contactless delivery. Refer to FAQ for more information.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto sm:px-6 max-w-2xl px-4 py-5 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold">Rating & Reviews</h2>
        <div className="grid grid-cols-12 gap-2  mt-3 bg-gray-100">
          <div className="col-span-12 lg:col-span-4 p-7">
            <div className="bg-gray-900 text-yellow-300 flex flex-col items-center justify-center py-10 px-6 gap-3">
              <h1 className="text-6xl">4.8</h1>
              <div class="flex gap-1 items-center text-2xl">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <h3 className="text-center text-lg font-semibold">
                Based on 43K+ ratings and 10K+ reviews
              </h3>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 flex flex-col p-7">
            <div className="text-xl font-semibold">
              <h3>PRODUCT REVIEWS</h3>
            </div>
            <div className="flex flex-col gap-2 mt-3 md:mt-auto my-auto">
              {rating?.row.map((item, i) => (
                <div
                  className="flex items-center gap-3 text-lg font-medium w-full"
                  key={i}
                >
                  <p>{item.id}</p>
                  <FaRegStar />
                  <Slider
                    isDisabled
                    size="sm"
                    aria-label="Player progress"
                    color="foreground"
                    hideThumb={true}
                    defaultValue={(item.value / rating.totalRating) * 100}
                    className="max-w-sm md:max-w-xl"
                  />
                  <p>{item.value}+</p>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-12 p-7">
            <hr className="mb-6 h-1 border-white bg-white" />
            <h3 className="text-lg font-semibold mb-12">
              Hear What Our Customers Say
            </h3>
            <div className="flex flex-col mt-4 gap-3">
              <div className="flex justify-between">
                <div className="flex gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                </div>
                <div className="text-xs">Sanjay Khanna | 23 July 2023</div>
              </div>
              <p>
                The Shirt Maintains Oxford&apos;s Legacy. Sleek, Comfortable,
                And Versatile. Set The Standard For Refined Fashion. Best
                Beyoung Shirt Ever Ordered!
              </p>
              <hr className="mt-6 h-1 border-yellow-100 bg-yellow-100" />
            </div>
            <div className="flex flex-col mt-4 gap-3">
              <div className="flex justify-between">
                <div className="flex gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                </div>
                <div className="text-xs">Sanjay Khanna | 23 July 2023</div>
              </div>
              <p>
                The Shirt Maintains Oxford&apos;s Legacy. Sleek, Comfortable,
                And Versatile. Set The Standard For Refined Fashion. Best
                Beyoung Shirt Ever Ordered!
              </p>
              <hr className="mt-6 h-1 border-yellow-100 bg-yellow-100" />
            </div>
            <div className="flex flex-col mt-4 gap-3">
              <div className="flex justify-between">
                <div className="flex gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                </div>
                <div className="text-xs">Sanjay Khanna | 23 July 2023</div>
              </div>
              <p>
                The Shirt Maintains Oxford&apos;s Legacy. Sleek, Comfortable,
                And Versatile. Set The Standard For Refined Fashion. Best
                Beyoung Shirt Ever Ordered!
              </p>
              <hr className="mt-6 h-1 border-yellow-100 bg-yellow-100" />
            </div>
            <div className="flex flex-col mt-4 gap-3">
              <div className="flex justify-between">
                <div className="flex gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                </div>
                <div className="text-xs">Sanjay Khanna | 23 July 2023</div>
              </div>
              <p>
                The Shirt Maintains Oxford&apos;s Legacy. Sleek, Comfortable,
                And Versatile. Set The Standard For Refined Fashion. Best
                Beyoung Shirt Ever Ordered!
              </p>
              <hr className="mt-6 h-1 border-yellow-100 bg-yellow-100" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
