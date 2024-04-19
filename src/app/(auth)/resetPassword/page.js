"use client";

import React from "react";
import logo from "@/assets/images/incendiaLogo.png";
import Image from "next/image";
import { useFormik } from "formik";
import { ResetSchema } from "@/models/authSchema";
import { useRouter } from "next/navigation";

const initialValues = {
  password: "",
  confirmPassword: "",
};

const ResetPassword = () => {
  const router = useRouter();

  const formik = useFormik({
    validationSchema: ResetSchema,
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
      router.push("/login");
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
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Re-generate Password
        </h2>
      </div>

      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={formik.handleSubmit}>
          <fieldset className="border bg-white p-6 rounded-md">
            <div className="mt-5">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <p className="text-xs text-red-500">
                {formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : ""}
              </p>
            </div>

            <div className="mt-5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                  onBlur={formik.handleBlur}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <p className="min-h-4 me-1  text-xs  text-red-500">
                {formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? formik.errors.confirmPassword
                  : ""}
              </p>
            </div>

            <div className="mt-5">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gray-900 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
              >
                Reset
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
