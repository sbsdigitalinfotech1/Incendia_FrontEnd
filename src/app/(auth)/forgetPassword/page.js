"use client";

import React from "react";
import logo from "@/assets/images/incendiaLogo.png";
import Image from "next/image";
import { useFormik } from "formik";
import { ForgetSchema } from "@/models/authSchema";
import { useRouter } from "next/navigation";

const initialValues = {
  email: "",
};

const ForgetPassword = () => {
  const router = useRouter();

  const formik = useFormik({
    validationSchema: ForgetSchema,
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
      router.push("/verifyOTP");
    },
  });

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
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Forget Password
          </h2>
          <p className="text-center text-sm">do not worry! create new</p>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <fieldset className="border bg-white p-6 rounded-md">
              <div className="mt-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <p className="text-xs min-h-4 me-1 text-red-500">
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : ""}
                </p>
              </div>

              <div className="mt-5">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-gray-900 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
                >
                  Send OTP
                </button>
              </div>

              <div className="relative w-100 mt-12">
                <hr className="w-100 h-2" />
                <span className="absolute -top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 bg-white px-5 text-sm ">
                  Or
                </span>
              </div>
              <div className="mt-5 w-100 flex justify-center">
                <button className="w-1/2 border-2 py-3 rounded-lg flex items-center justify-center text-sm text-gray font-medium hover:bg-slate-50">
                  Back to login
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
