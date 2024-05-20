"use client";

import React, { useState } from "react";
import logo from "@/assets/images/incendiaLogo.png";
import Image from "next/image";
// import google from "@/assets/images/google.png";
import { useFormik } from "formik";
import { SignupSchema } from "@/models/authSchema";
import { useRouter } from "next/navigation";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { register, sendOTP } from "@/config/Api";
import { toast } from "react-hot-toast";
import { useGlobalState } from "@/store/GlobalContext";
// import { redirect } from "next/navigation";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

function Register() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const GlobalState = useGlobalState();

  const formik = useFormik({
    validationSchema: SignupSchema,
    initialValues: initialValues,
    onSubmit: async (values) => {
      const data = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
        password: values.password,
      };

      await register(data)
        .then(async (res) => {
          if (res.data.success) {
            await sendOTP(data); // Sending Otp

            GlobalState.setEmail(data.email);
            GlobalState.setPassword(data.password);
            GlobalState.setFrom("register");
            router.replace("/verifyOTP");
          }
        })
        .catch((err) => {
          if (err.response.data.message) {
            return toast.error(err.response.data.message);
          }
          toast.error(err.message);
        });
    },
  });

  return (
    <div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          className="mx-auto h-10 w-auto"
          src={logo}
          width={100}
          alt="companyLogo"
        />
        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={formik.handleSubmit}>
          <fieldset className="border bg-white p-6 rounded-md">
            <div className="flex gap-3 items-center justify-center">
              <div className="mt-2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First Name
                </label>
                <div className="mt-2">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="firstName"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    onBlur={formik.handleBlur}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  />
                </div>
                <p className=" min-h-4 me-1 text-xs text-red-500">
                  {formik.touched.firstName && formik.errors.firstName
                    ? formik.errors.firstName
                    : ""}
                </p>
              </div>

              <div className="mt-2">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last Name
                </label>
                <div className="mt-2">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="lastName"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    onBlur={formik.handleBlur}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  />
                </div>
                <p className=" min-h-4 me-1 text-xs text-red-500">
                  {formik.touched.lastName && formik.errors.lastName
                    ? formik.errors.lastName
                    : ""}
                </p>
              </div>
            </div>

            <div className="">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
              <p className="min-h-4 me-1 text-xs text-red-500">
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : ""}
              </p>
            </div>

            <div className="">
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone no.
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  autoComplete="phone"
                  onChange={(e) => {
                    if (/^[0-9]*$/.test(e.target.value)) {
                      formik.handleChange(e);
                    }
                  }}
                  value={formik.values.phone}
                  onBlur={formik.handleBlur}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
              <p className="min-h-4 me-1 text-xs text-red-500">
                {formik.touched.phone && formik.errors.phone
                  ? formik.errors.phone
                  : ""}
              </p>
            </div>

            <div className="">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={show ? "text" : "password"}
                  autoComplete="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
                {show ? (
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    <IoEye size={20} />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={() => {
                      setShow(true);
                    }}
                  >
                    <IoEyeOff size={20} />
                  </button>
                )}
              </div>
              <p className="min-h-4 me-1 text-xs text-red-500">
                {formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : ""}
              </p>
            </div>

            <div className="">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
              <div className="mt-2 relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={show ? "text" : "password"}
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                  onBlur={formik.handleBlur}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
                {show ? (
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    <IoEye size={20} />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={() => {
                      setShow(true);
                    }}
                  >
                    <IoEyeOff size={20} />
                  </button>
                )}
              </div>
              <p className="min-h-4 me-1 text-xs text-red-500">
                {formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? formik.errors.confirmPassword
                  : ""}
              </p>
            </div>

            <div className="mt-2">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gray-900 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
              >
                Sign up
              </button>
            </div>
            {/* <div className="relative w-100 mt-12">
              <hr className="w-100 h-2" />
              <div className="w-full flex justify-center absolute -top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3  ">
                <span className="bg-white px-5 text-sm">Or Continue With</span>
              </div>
            </div>
            <div className="mt-5 w-100 flex justify-center">
              <button className="w-1/2 border-2 py-3 rounded-lg flex items-center justify-center text-sm text-gray font-medium hover:bg-slate-50">
                <Image src={google} width={20} alt="googleLogo" />
                &nbsp; Google
              </button>
            </div> */}
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Register;
