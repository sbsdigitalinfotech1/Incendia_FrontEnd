"use client";
import React from "react";
import { Formik } from "formik";
import { useFormik } from "formik";
import { ProfileSchema } from "@/models/authSchema";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  Birth: "",
};

const Profile = () => {
  const formik = useFormik({
    validationSchema: ProfileSchema,
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
      router.push("/login");
    },
  });

  return (
    <form className="space-y-6" onSubmit={formik.handleSubmit}>
      <fieldset className="border bg-white p-6 rounded-md">
        <div className="flex gap-3 items-center justify-between ">
          <div className="mt-2 w-full">
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

          <div className="mt-2 w-full">
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
            htmlFor="Birth"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Birth Date
          </label>
          <div className="mt-2">
            <input
              id="Birth"
              name="Birth"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.Birth}
              onBlur={formik.handleBlur}
              autoComplete="Birth"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
            />
          </div>
          <p className="min-h-4 me-1 text-xs text-red-500">
            {formik.touched.Birth && formik.errors.Birth
              ? formik.errors.Birth
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
          <div className="mt-2 relative">
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
              className="block w-full pl-12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
            />
            <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
              +91 |
            </div>
          </div>
          <p className="min-h-4 me-1 text-xs text-red-500">
            {formik.touched.phone && formik.errors.phone
              ? formik.errors.phone
              : ""}
          </p>
        </div>

        <div className="">
          <label
            htmlFor="gender"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Gender
          </label>
          <div className="mt-2 ">
            <label className="inline-flex items-center mr-4">
              <input
                id="male"
                name="gender"
                type="radio"
                value="male"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.gender === "male"}
                className="form-radio h-4 w-4 text-indigo-600"
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center mr-4">
              <input
                id="female"
                name="gender"
                type="radio"
                value="female"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.gender === "female"}
                className="form-radio h-4 w-4 text-indigo-600"
              />
              <span className="ml-2">Female</span>
            </label>
            <label className="inline-flex items-center">
              <input
                id="other"
                name="gender"
                type="radio"
                value="other"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.gender === "other"}
                className="form-radio h-4 w-4 text-indigo-600"
              />
              <span className="ml-2">Other</span>
            </label>
          </div>
          <p className="min-h-4 me-1 text-xs text-red-500">
            {formik.touched.gender && formik.errors.gender
              ? formik.errors.gender
              : ""}
          </p>
        </div>

        <div className="mt-2">
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-yellow-300 py-2.5 font-semibold shadow-sm hover:bg-yellow-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
          >
            Save Changes
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default Profile;
