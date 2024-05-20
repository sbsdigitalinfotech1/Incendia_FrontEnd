import { updateAddress } from "@/config/Api";
import { EditAddressSchema } from "@/models/authSchema";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const EditAddressPopup = ({ setLoaded, handleCloseEditPopup, addrToUpdate }) => {
  const [initialValues, setInitialValues] = useState({
    firstName: addrToUpdate.firstName,
    lastName: addrToUpdate.lastName,
    email: addrToUpdate.email,
    phone: addrToUpdate.phone,
    pincode: addrToUpdate.pincode,
    town: addrToUpdate.addressLine2,
    city: addrToUpdate.city,
    state: addrToUpdate.state,
    Address: addrToUpdate.addressLine1,
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: EditAddressSchema,
    onSubmit: async (values) => {
      const userDataString = Cookies.get("userData");
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        const userId = userData.id;

        const data = {
          userId: userId,
          id: addrToUpdate.id,
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: values.phone,
          pincode: values.pincode,
          addressLine1: values.Address,
          addressLine2: values.town,
          city: values.city,
          state: values.state,
        };

        console.log(data);

        await updateAddress(data)
          .then((res) => {
            if (res?.data?.success) {
              handleCloseEditPopup();
              toast.success("Saved Succesfully");
              window.scrollTo(0, 0);
              setLoaded(false);
            }
          })
          .catch((err) => {
            if (err.response.data.message) {
              return toast.error(err.response.data.message.type?err.response.data.message.type:err.response.data.message);
            }
            toast.error(err.message);
          });
      }
    },
  });

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-md shadow-md relative">
          <button
            className="absolute top-4 right-6 font-bold text-xl"
            onClick={handleCloseEditPopup}
          >
            X
          </button>
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
                  htmlFor="city"
                  className="block text-xs font-medium leading-6 text-gray-900"
                >
                  City/District
                </label>
                <div className="">
                  <input
                    id="city"
                    name="city"
                    type="text"
                    autoComplete="city"
                    onChange={formik.handleChange}
                    value={formik.values.city}
                    onBlur={formik.handleBlur}
                    className="block w-full pl-2 focus:outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <p className=" min-h-4 me-1 text-xs text-red-500">
                  {formik.touched.city && formik.errors.city
                    ? formik.errors.city
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
            <div className="mt-2">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gray-900 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditAddressPopup;
