"use client";

import React, { useContext, useState } from "react";
import logo from "@/assets/images/incendiaLogo.png";
import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import { LoginSchema } from "@/models/authSchema";

import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { GlobalStateContext } from "@/store/GlobalContext";
import { login } from "@/config/Api";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const initialValues = {
  email: "",
  password: "",
};

function Login() {
  const { setGuestId, guestId } = useContext(GlobalStateContext);
  const [show, setShow] = useState(false);
  const router = useRouter(); // Ensure useRouter is imported and available

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      
      if (guestId) {
        const data = {
          guestId: guestId,
          email: values.email,
          password: values.password,
        };

        await login(data)
          .then((res) => {
            if (res.data.success) {
              toast.success("log in successfully");
              // Set the new guestId received from the login response
              const newGuestId = res.data.data.guestId; //  replacing with new guest id
              Cookies.set("guestId", newGuestId, { expires: 7 });
              setGuestId(newGuestId);
              Cookies.set("userData", JSON.stringify(res.data.data), {
                expires: 7,
              });
              router.replace("/");
            }
          })
          .catch((err) => {
            if (err?.response?.data?.message) {
              return toast.error(err.response.data.message);
            }
            toast.error(err.message);
          });
      }
    },
  });

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          className="mx-auto h-10 w-auto"
          src={logo}
          width={100}
          alt="companyLogo"
        />
        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm shadow-sm">
        <form className="space-y-6" onSubmit={formik.handleSubmit}>
          <fieldset className="border bg-white p-6 rounded-md ">
            <div className="mt-5">
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
                  autoComplete="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
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
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    href="forgetPassword"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </Link>
                </div>
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

            <div className="mt-5">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gray-900 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
              >
                Sign in
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4 flex items-center justify-center">
              Don’t have an account yet? &nbsp;
              <Link className="font-semibold text-indigo-600" href="/register">
                {" "}
                Sign up{" "}
              </Link>{" "}
            </p>
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
    </>
  );
}

export default Login;
