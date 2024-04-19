"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/incendiaLogo.png";

const Page = () => {
  const [otp, setOtp] = useState([0, 1, 2, 3]);
  // Create refs for input fields
  const inputRefs = useRef([]);

  // Function to focus on next input field
  const focusNextInput = (index) => {
    if (index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Function to handle key presses
  const handleKeyDown = (event, index) => {
    // Check if the key pressed is a number and the maximum length of the input field is reached
    if (event.key >= "0" && event.key <= "9") {
      focusNextInput(index);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-[#F5F5F5]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-10 w-auto"
            src={logo}
            width={100}
            alt="companyLogo"
          />
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Verify OTP
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm md:max-md">
          <form className="space-y-6">
            <fieldset className="grid grid-cols-4 gap-3 py-6 rounded-md">
              {otp.map((index) => (
                <div className="w-full aspect-square" key={index}>
                  <input
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    maxLength={1}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="size-full rounded-md border-0 p-1.5 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-2xl"
                  />
                </div>
              ))}
            </fieldset>

            <div className="mt-5">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gray-900 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Verify OTP
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
