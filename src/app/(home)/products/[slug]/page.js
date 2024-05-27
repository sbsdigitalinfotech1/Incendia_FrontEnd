"use client";

import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import voucherIcon from "@/assets/images/voucherIcon.png";
import { Carousel } from "react-responsive-carousel";
import { BiSolidOffer } from "react-icons/bi";
import { BsCartFill } from "react-icons/bs";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import ship from "@/assets/images/ship.jpg";
import cod from "@/assets/images/cod.jpg";
import { Skeleton, Slider } from "@nextui-org/react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IMAGE_URL, addToCart, getProducts } from "@/config/Api";
import toast from "react-hot-toast";
import Link from "next/link";
import Cookies from "js-cookie";

function ProductPage({ params }) {
  const id = params.slug;
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState(null);
  const [productPhotos, setproductPhotos] = useState([]);
  const [productMainImage, setproductMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    const getProductsData = async (id) => {
      await getProducts({ id: id })
        .then((res) => {
          if (res.data.success) {
            setProduct(res.data.data.rows[0]);
            setproductPhotos(
              res.data.data.rows[0].productPhotos.filter(
                (item) => item.main == false
              )
            );
            setproductMainImage(
              res.data.data.rows[0].productPhotos.filter(
                (item) => item.main == true
              )[0].url
            );
            // console.log(res.data.data.rows[0]);
          }
        })
        .catch((err) => {
          if (err.response?.data?.message) {
            return toast.error(err.response.data.message);
          }
          toast.error(err.message);
        });
    };

    getProductsData(id);
  }, [id]);

  const handleAddTocart = async () => {
    const guestId = Cookies.get("guestId");

    const data = {
      guestId: guestId,
      variantId: id,
      qty: quantity,
    };

    await addToCart(data)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.data);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        if (err.response.data.message) {
          return toast.error(err.response.data.message);
        }
        toast.error(err.message);
      });
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

  if (product) {
    return (
      <>
        <div className="mx-auto sm:px-6 max-w-2xl px-4 py-6 md:py-10 lg:max-w-7xl lg:px-8">
          <div className="md:grid grid-cols-12 gap-12">
            <div className="col-span-6  gap-2 rounded-sm">
              <Carousel style={{ width: "100%" }} emulateTouch infiniteLoop>
                <div>
                  <img alt="" src={`${IMAGE_URL + productMainImage}`} />
                </div>
                {productPhotos.map((item, i) => (
                  <div key={i}>
                    <img alt="" src={`${IMAGE_URL + item.url}`} />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="rounded-sm col-span-6 px-2 md:px-5 md:py-3 py-6">
              <div className="flex items-center justify-between">
                <h1 className="font-bold text-xl truncate opacity-21">
                  {product?.name}
                </h1>
                <CiHeart
                  size={40}
                  className="p-2.5 rounded-full cursor-pointer bg-gray-100 font-semibold"
                />
              </div>
              <span className="text-gray-400 font-normal leading-4">
                {" "}
                {product?.product?.category?.name}
              </span>
              <div className="mt-4">
                <strong className="text-xl"> ₹{product?.price}</strong> &nbsp;
                <span className="line-through text-gray-300">
                  {" "}
                  ₹{product?.mrp}{" "}
                </span>
                &nbsp;
                <span
                  className={`text-sm font-medium text-green-300 ${
                    Math.round(
                      ((parseInt(product?.mrp) - parseInt(product?.price)) /
                        parseInt(product?.mrp)) *
                        100
                    )
                      ? ""
                      : "hidden"
                  }`}
                >
                  [
                  {Math.round(
                    ((parseInt(product?.mrp) - parseInt(product?.price)) /
                      parseInt(product?.mrp)) *
                      100
                  )}
                  % off]
                </span>
              </div>
              <span className="text-gray-500 mt-3 items-center font-semibold text-sm">
                Inclusive of All Taxes + Free Shipping
              </span>
              <div className="mt-1 flex items-center justify-start gap-3.5">
                <div className="flex items-center text-yellow-500 text-2xl">
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
                COLOR:
                <span className="text-gray-500">{product.colorName}</span>
              </h3>
              <div className="flex flex-wrap items-center gap-2 mt-3">
                {product.availableColors.rows.map((item, i) => (
                  <Link href={`/products/${item.id}`} key={i}>
                    <div className="rounded-full cursor-pointer border-2 border-gray-300 shadow-lg">
                      <div
                        className="rounded-full cursor-pointer border-2 border-white w-12 h-12"
                        style={{ backgroundColor: item.color }}
                        title={item.colorName}
                      ></div>
                    </div>
                  </Link>
                ))}
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <div className="text-md mt-6 font-medium"> SIZE </div>
                  <div className="text-md mt-6 font-bold text-teal-400">
                    {" "}
                    SIZE CHART
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 items-center mt-2 mb-5">
                  {product.availableSizes.rows.map((item, i) => (
                    <button
                      key={i}
                      className="aspect-square rounded-md border-2 border-inherit w-12 flex justify-center items-center text-xs hover:bg-gray-300 cursor-pointer"
                    >
                      {item.size}
                    </button>
                  ))}
                </div>
                <span className="text-sm font-bold">
                  Sizes Not Available ?{" "}
                </span>{" "}
                &nbsp;
                <span className="text-sm font-bold text-teal-400 underline">
                  Notify Me{" "}
                </span>
              </div>

              <div className="flex justify-start items-center gap-1 mt-5">
                <p className="mr-1">QTY:</p>
                <span className="qty">
                  <select
                    className="ps-4 pr-10 py-2 border-1 border-gray-600 cursor-pointer"
                    value={quantity}
                    onChange={(e) => {
                      setQuantity(e.target.value);
                      console.log(e.target.value);
                    }}
                  >
                    <option defaultValue value="1">
                      1
                    </option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
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
                  <button
                    className="col-span-6 md:col-span-12 lg:col-span-5 p-3 font-semibold bg-indigo-700 hover:bg-indigo-600 text-white flex items-center justify-center gap-1 rounded-md"
                    onClick={() => handleAddTocart()}
                  >
                    <BsCartFill className="inline" size={20} />
                    ADD TO CART
                  </button>
                  <button className="col-span-6 md:col-span-12 lg:col-span-7 p-3 bg-yellow-300 hover:bg-yellow-400 text-black font-semibold flex items-center justify-center gap-1 rounded-md">
                    <FaRegArrowAltCircleRight className="inline" size={20} />{" "}
                    BUY NOW
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
                {/* <table className="min-w-full divide-y divide-gray-200">
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
                      <td className=" py-2 whitespace-nowrap">
                        Classic Collar
                      </td>
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
                </table> */}
                <div className="prose">
                  <div
                    className="text-sm"
                    dangerouslySetInnerHTML={{
                      __html: product?.product?.productHighlight,
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 py-6">
              <div className="px-6">
                <h2 className="font-semibold mb-3">Product Description</h2>

                <div className="prose">
                  <div
                    className="text-sm"
                    dangerouslySetInnerHTML={{
                      __html: product?.product?.productsDescription,
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 py-6">
              <div className="px-6">
                <h2 className="font-semibold mb-3">Delivery & Return Policy</h2>

                <div className="prose">
                  <div
                    className="text-sm"
                    dangerouslySetInnerHTML={{
                      __html: product?.product?.otherDescription,
                    }}
                  ></div>
                </div>
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
                <div className="flex gap-1 items-center text-2xl">
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

            <div className="col-span-12 p-7 text-sm">
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
  } else {
    return (
      <>
        <div className="mx-auto sm:px-6 max-w-2xl px-4 py-6 md:py-10 lg:max-w-7xl lg:px-8">
          <div className="md:grid grid-cols-12 gap-12">
            <div className="col-span-6  gap-2 rounded-sm">
              <div>
                <Skeleton className="md:h-dvh h-96 ">
                  <div className="  bg-default-300"></div>
                </Skeleton>
                <Skeleton className="h-36 md:hidden block">
                  <div className=" h-1/2 bg-default-300"></div>
                </Skeleton>
              </div>
              <div className="flex items-center justify-start gap-2 mt-4">
                <Skeleton className="flex  w-20 h-24" />
                <Skeleton className="flex  w-20 h-24" />
                <Skeleton className="flex  w-20 h-24" />
                <Skeleton className="flex  w-20 h-24" />
              </div>
            </div>
            <div className="rounded-sm col-span-6 px-2 md:px-5 md:py-3 py-6">
              <div className="flex items-center justify-between">
                <Skeleton className="w-full ">
                  <div className="h-8 w-full  bg-secondary-200"></div>
                </Skeleton>
              </div>
              <Skeleton className="w-1/3  mt-2">
                <div className="h-5 w-full  bg-secondary-200"></div>
              </Skeleton>

              <div className="mt-6">
                <Skeleton className="w-1/3  mt-1">
                  <div className="h-6 w-full  bg-secondary-200"></div>
                </Skeleton>
                <Skeleton className="w-1/2  mt-1">
                  <div className="h-6 w-full  bg-secondary-200"></div>
                </Skeleton>
                <Skeleton className="w-3/5  mt-1">
                  <div className="h-6 w-full  bg-secondary-200"></div>
                </Skeleton>
              </div>

              <div className="flex gap-1 items-center  mt-3">
                <Skeleton className="w-3/4  mt-1">
                  <div className="h-5 w-full  bg-secondary-200"></div>
                </Skeleton>
              </div>

              <h3 className="text-md mt-6 font-medium">
                <Skeleton className="w-2/5  mt-1">
                  <div className="h-5 w-full  bg-secondary-200"></div>
                </Skeleton>
              </h3>
              <div className="flex flex-wrap items-center gap-2 mt-3">
                <Skeleton className="flex rounded-full w-12 h-12" />
                <Skeleton className="flex rounded-full w-12 h-12" />
                <Skeleton className="flex rounded-full w-12 h-12" />
                <Skeleton className="flex rounded-full w-12 h-12" />
                <Skeleton className="flex rounded-full w-12 h-12" />
                <Skeleton className="flex rounded-full w-12 h-12" />
                <Skeleton className="flex rounded-full w-12 h-12" />
                <Skeleton className="flex rounded-full w-12 h-12" />
                <Skeleton className="flex rounded-full w-12 h-12" />
                <Skeleton className="flex rounded-full w-12 h-12" />
                <Skeleton className="flex rounded-full w-12 h-12" />
                <Skeleton className="flex rounded-full w-12 h-12" />
                <Skeleton className="flex rounded-full w-12 h-12" />
              </div>

              <div className="mt-6">
                <div className="flex justify-between items-center">
                  <Skeleton className="w-full  ">
                    <div className="h-6 w-full  bg-secondary-200"></div>
                  </Skeleton>
                </div>
                <div className="flex flex-wrap gap-2 items-center mt-4 mb-5">
                  <Skeleton className="flex rounded-xl w-14 h-14" />
                  <Skeleton className="flex rounded-xl w-14 h-14" />
                  <Skeleton className="flex rounded-xl w-14 h-14" />
                  <Skeleton className="flex rounded-xl w-14 h-14" />
                  <Skeleton className="flex rounded-xl w-14 h-14" />
                </div>

                <Skeleton className="w-2/6  mt-1">
                  <div className="h-6 w-full  bg-secondary-200"></div>
                </Skeleton>
              </div>

              <div className="flex justify-start items-center gap-1 mt-5">
                <Skeleton className="w-28  mt-1">
                  <div className="h-12 w-full  bg-secondary-200"></div>
                </Skeleton>
              </div>

              <Skeleton className="w-full  mt-6">
                <div className="h-10 w-full  bg-secondary-200"></div>
              </Skeleton>

              <div className="w-full mt-0 md:mt-5 grid grid-cols-2 gap-2 ">
                <Skeleton className="w-full  mt-1">
                  <div className="h-12   bg-secondary-200"></div>
                </Skeleton>
                <Skeleton className="w-full  mt-1">
                  <div className="h-12   bg-secondary-200"></div>
                </Skeleton>
              </div>

              <div className="mt-5">
                <Skeleton className="w-full  mt-1">
                  <div className="h-28   bg-secondary-200"></div>
                </Skeleton>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto sm:px-6 max-w-2xl px-4 py-5 lg:max-w-7xl lg:px-8">
          <Skeleton className="flex w-56 h-6" />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2  mt-3 w-full">
            <Skeleton className="flex  w-full h-72" />
            <Skeleton className="flex  w-full h-72" />
            <Skeleton className="flex  w-full h-72" />
          </div>
        </div>
        <div className="mx-auto sm:px-6 max-w-2xl px-4 py-5 lg:max-w-7xl lg:px-8">
          <Skeleton className="flex w-56 h-6" />
          <Skeleton className="flex w-full h-96 mt-4" />
        </div>
      </>
    );
  }
}

export default ProductPage;
