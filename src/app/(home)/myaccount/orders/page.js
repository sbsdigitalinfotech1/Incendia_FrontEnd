import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { MdOutlineHelpOutline } from "react-icons/md";
import { GrInProgress } from "react-icons/gr";

const page = () => {
  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-md font-semibold "> + Add New</h3>
          <Link href="# " className="text-sm underline">
            Change Default
          </Link>
        </div>

        <div className="rounded-lg bg-gray-100 mt-6">
          <Link href='orders/1'><div className="flex items-center justify-between px-6 pt-3 text-sm">
            <p className="">Order #4195330</p>
            <FaChevronRight />
          </div>
          </Link>
          <div className="grid grid-cols-12 gap-5  p-6">
            <div className=" col-span-4 md:col-span-2">
              <div className="relative aspect-[3/4]">
                <Image
                  src="https://www.beyoung.in/api/cache/catalog/products/new_checked_shirt_image_9_12_2022/grey_cotton_solid_shirts_for_men_base_19_10_2023_700x933.jpg"
                  fill={true}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  alt=""
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

              <div className="flex justify-start gap-2 md:gap-3 items-center mt-4">
                <button className="flex justify-center gap-1 items-center text-xs md:text-sm font-semibold text-white bg-green-500 px-3 rounded-md py-2">
                  <GrInProgress size={15} />
                  Processing
                </button>
                <button className="flex justify-center gap-1 items-center text-xs md:text-sm font-semibold text-white bg-teal-500 px-3 rounded-md py-2">
                  <MdOutlineHelpOutline size={15} className="text-md" />
                  Help
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
