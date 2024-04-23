"use client";

import React, { useState } from "react";
import CheckOutPaymentDetails from "@/components/CheckOutPaymentDetails/CheckOutPaymentDetails";
import { useFormik } from "formik";
import { ShippingSchema } from "@/models/authSchema";
import { useRouter } from "next/navigation";
import { toggle } from "@nextui-org/react";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  town: "",
  district: "",
  state: "",
  Address: "",
};

const addressData = {
  selectedId: 1,
  row: [
    {
      id: 1,
      address: "Avavav, Aligarh, Uttar Pradesh 202280",
      contact: "8529637410",
    },
    {
      id: 2,
      address: "Dbdbdb, Aligarh, Uttar Pradesh 202280",
      contact: "8965858581",
    },
  ],
};

const Shipping = () => {
  const [selectedOption, setSelectedOption] = useState(addressData.selectedId);
  const [show, setShow] = useState(false);

  const handleDropDown = () => {
   setShow(!show);
  };

  const handleOptionChange = (index) => {
    setSelectedOption(index);
  };

  const router = useRouter();

  const formik = useFormik({
    validationSchema: ShippingSchema,
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
      router.push("/login");
    },
  });

  return (
    <>
      <div className="mx-auto px-2 max-w-2xl md:px-4 py-6 md:py-10 lg:max-w-7xl lg:px-8 h-full p-0">
        <div className="grid grid-cols-12 ">
          <div className="lg:col-span-7 bg-white md:m-3 rounded-md col-span-12 md:p-6 p-4 shadow-lg">
            {/* <div className="flex items-center justify-center gap-2 opacity-75">
              <h4 className="text-sm font-semibold">
                Already have an account?
              </h4>
              <button className="flex items-center justify-center text-xs border-2 border-teal-500 text-teal-500 p-2 rounded-sm font-semibold">
                Login/SignUp
              </button>
            </div>
            <span className="flex items-center justify-center text-sm mt-2">
              Or
            </span>
            <div className="flex items-center justify-center mt-2 text-sm">
              Checkout as Guest
            </div>
            <h3 className=" mt-3 text-xl font-bold opacity-85">
              Delivery Address
            </h3> */}

            <div className="flex flex-col gap-2">
              {addressData?.row.map((item, index) => (
                <div
                  key={index}
                  className={`relative text-sm p-6 pl-12 cursor-pointer
                border-2 rounded-lg shadow-sm ${
                  selectedOption === item.id ? "border-green-400" : ""
                }`}
                  onClick={() => handleOptionChange(item.id)}
                >
                  <div className="absolute top-9 left-5 transform -translate-x-2 -translate-y-2">
                    <div
                      className={`${
                        selectedOption !== item.id ? "w-4 h-4" : ""
                      } border-green-400 border-2 rounded-full`}
                    >
                      {selectedOption === item.id && (
                        <div className="w-4 h-4 bg-green-500 border-white border-3 rounded-full"></div>
                      )}
                    </div>
                  </div>
                  <p>{item.address}</p>
                  <p className="mt-2">Contact Number:{item.contact} </p>
                  <div className="flex items-center justify-start gap-2 mt-3">
                    <button className="flex items-center justify-center px-5 py-1 rounded-lg border-2 border-gray-400">
                      Remove
                    </button>
                    <button className="flex items-center justify-center px-5 py-1 rounded-lg border-2 border-gray-400">
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="text-xl font-semibold opacity-85 p-5 mt-3 cursor-pointer border-2 rounded-lg shadow-sm flex
            items-center justify-start "
            >
              <button onClick={handleDropDown}>+ Add New Address</button>
            </div>

            {show ? (
              <form className="mt-3" onSubmit={formik.handleSubmit}>
                <div className="grid grid-cols-2 gap-3">
                  <div className="">
                    <label
                      htmlFor="firstName"
                      className="block text-xs font-medium leading-6 text-gray-900"
                    >
                      First Name
                    </label>
                    <div className="">
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="firstName"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        onBlur={formik.handleBlur}
                        className="block w-full pl-2 focus:outline-none outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <p className=" min-h-4 me-1 text-xs text-red-500">
                      {formik.touched.firstName && formik.errors.firstName
                        ? formik.errors.firstName
                        : ""}
                    </p>
                  </div>

                  <div className="">
                    <label
                      htmlFor="lastName"
                      className="block text-xs font-medium leading-6 text-gray-900"
                    >
                      Last Name
                    </label>
                    <div className="">
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        autoComplete="lastName"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        onBlur={formik.handleBlur}
                        className="block w-full pl-2 focus:outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <p className=" min-h-4 me-1 text-xs text-red-500">
                      {formik.touched.lastName && formik.errors.lastName
                        ? formik.errors.lastName
                        : ""}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="">
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="">
                      <input
                        id="email"
                        name="email"
                        type="text"
                        autoComplete="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        className="block w-full pl-2 focus:outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <p className=" min-h-4 me-1 text-xs text-red-500">
                      {formik.touched.email && formik.errors.email
                        ? formik.errors.email
                        : ""}
                    </p>
                  </div>

                  <div className="">
                    <label
                      htmlFor="phone"
                      className="block text-xs font-medium leading-6 text-gray-900"
                    >
                      Phone No.
                    </label>
                    <div className="relative">
                      <input
                        id="phone"
                        name="phone"
                        type="text"
                        autoComplete="phone"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        onBlur={formik.handleBlur}
                        className="block w-full pl-12 focus:outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <span className="absolute top-1/2 -translate-y-1/2 left-2 opacity-85">
                        91+ |
                      </span>
                    </div>
                    <p className=" min-h-4 me-1 text-xs text-red-500">
                      {formik.touched.phone && formik.errors.phone
                        ? formik.errors.phone
                        : ""}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="">
                    <label
                      htmlFor="pincode"
                      className="block text-xs font-medium leading-6 text-gray-900"
                    >
                      Pin Code
                    </label>
                    <div className="">
                      <input
                        id="pincode"
                        name="pincode"
                        type="text"
                        autoComplete="pincode"
                        onChange={formik.handleChange}
                        value={formik.values.pincode}
                        onBlur={formik.handleBlur}
                        className="block w-full pl-2 focus:outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <p className=" min-h-4 me-1 text-xs text-red-500">
                      {formik.touched.pincode && formik.errors.pincode
                        ? formik.errors.pincode
                        : ""}
                    </p>
                  </div>

                  <div className="">
                    <label
                      htmlFor="town"
                      className="block text-xs font-medium leading-6 text-gray-900"
                    >
                      Town/Village
                    </label>
                    <div className="">
                      <input
                        id="town"
                        name="town"
                        type="text"
                        autoComplete="town"
                        onChange={formik.handleChange}
                        value={formik.values.town}
                        onBlur={formik.handleBlur}
                        className="block w-full pl-2 focus:outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <p className=" min-h-4 me-1 text-xs text-red-500">
                      {formik.touched.town && formik.errors.town
                        ? formik.errors.town
                        : ""}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="">
                    <label
                      htmlFor="district"
                      className="block text-xs font-medium leading-6 text-gray-900"
                    >
                      City/District
                    </label>
                    <div className="">
                      <input
                        id="district"
                        name="district"
                        type="text"
                        autoComplete="district"
                        onChange={formik.handleChange}
                        value={formik.values.district}
                        onBlur={formik.handleBlur}
                        className="block w-full pl-2 focus:outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <p className=" min-h-4 me-1 text-xs text-red-500">
                      {formik.touched.district && formik.errors.district
                        ? formik.errors.district
                        : ""}
                    </p>
                  </div>

                  <div className="">
                    <label
                      htmlFor="state"
                      className="block text-xs font-medium leading-6 text-gray-900"
                    >
                      State
                    </label>
                    <div className="">
                      <input
                        id="state"
                        name="state"
                        type="text"
                        autoComplete="state"
                        onChange={formik.handleChange}
                        value={formik.values.state}
                        onBlur={formik.handleBlur}
                        className="block w-full pl-2 focus:outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <p className=" min-h-4 me-1 text-xs text-red-500">
                      {formik.touched.state && formik.errors.state
                        ? formik.errors.state
                        : ""}
                    </p>
                  </div>
                </div>

                <div className="">
                  <label
                    htmlFor="Address"
                    className="block text-xs font-medium leading-6 text-gray-900"
                  >
                    Address
                  </label>
                  <div className="">
                    <input
                      id="Address"
                      name="Address"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.Address}
                      onBlur={formik.handleBlur}
                      className="block w-full pl-2 focus:outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <p className="min-h-4 me-1 text-xs text-red-500">
                    {formik.touched.Address && formik.errors.Address
                      ? formik.errors.Address
                      : ""}
                  </p>
                </div>
              </form>
            ) : (
              ""
            )}
          </div>
          
          <div className="lg:col-span-5 m-3 bg-white p-0 md:p-6 rounded-md col-span-12 md:shadow-lg ">
            <CheckOutPaymentDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shipping;
