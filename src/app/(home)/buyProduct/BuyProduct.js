"use client";

import EditAddressPopup from "@/components/EditAddressPopup/EditAddressPopup";
import React, { Suspense, useContext, useEffect, useState } from "react";
// import CheckOutPaymentDetails from "@/components/CheckOutPaymentDetails/CheckOutPaymentDetails";
import { useFormik } from "formik";
import { ShippingSchema } from "@/models/authSchema";
import {
  addAddress,
  getAddress,
  getProducts,
  makeOrder,
  updateAddress,
} from "@/config/Api";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
// import { GlobalStateContext } from "@/store/GlobalContext";
import Link from "next/link";
// import { BiSolidDiscount } from "react-icons/bi";
import { useRouter, useSearchParams } from "next/navigation";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  pincode: "",
  town: "",
  city: "",
  state: "",
  Address: "",
};

const BuyProduct = () => {
  const searchParams = useSearchParams();
  const variantId = searchParams.get("variantId");
  const qty = searchParams.get("qty");

  const [productDetail, setProductDetail] = useState([]);
  const [show, setShow] = useState(false);
  const [rows, setRows] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);
  const [editPopupVisible, setEditPopupVisible] = useState(false);

  const [selectedOption, setSelectedOption] = useState(rows.selectedId);
  const [addrToUpdate, setAddrToUpdate] = useState([]);

  const router = useRouter();

  const handleDropDown = () => {
    setShow(!show);
  };

  const handleOptionChange = (id) => {
    setSelectedOption(id);
  };

  // const handleEdit = () => {};

  const handleCloseEditPopup = () => {
    setEditPopupVisible(false);
  };

  const formik = useFormik({
    validationSchema: ShippingSchema,
    initialValues: initialValues,
    onSubmit: async (values) => {
      const userDataString = Cookies.get("userData");
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        const userId = userData.id;

        const data = {
          userId: userId,
          firstName: values?.firstName,
          lastName: values?.lastName,
          email: values?.email,
          phone: values?.phone,
          pincode: values?.pincode,
          addressLine1: values?.Address,
          addressLine2: values?.town,
          city: values?.city,
          state: values?.state,
        };

        await addAddress(data)
          .then((res) => {
            if (res?.data.success) {
              setLoaded(false);
              toast.success("Saved Succesfully");
              formik.setValues(initialValues);
              formik.setTouched(initialValues);
              formik.setErrors(initialValues);
              handleDropDown();
              window.scrollTo(0, 0);
            }
          })
          .catch((err) => {
            toast.error(err.message);
          });
      }
    },
  });

  // getting the payment details of selected product ***********************************
  const getProductsData = async () => {
    const data = {
      id: variantId,
    };

    await getProducts(data)
      .then((res) => {
        if (res.data.success) {
          setProductDetail(res.data.data.rows[0]);
        }
      })
      .catch((err) => {
        if (err.response?.data?.message) {
          return toast.error(err.response?.data?.message);
        }
        toast.error(err.message);
      });
  };

  useEffect(() => {
    getProductsData();
  }, []);

  const getAddressData = async (userId) => {
    await getAddress(userId)
      .then((res) => {
        if (res?.data?.success) {
          console.log(res?.data?.data?.rows);
          setRows(res.data.data.rows);
          setSelectedOption(
            res.data.data.rows.filter((item) => item.active == true)[0]?.id
          );
        }
      })
      .catch((err) => {
        if (err.response?.data?.message) {
          return toast.error(err.response?.data?.message);
        }
        toast.error(err.message);
      });
  };

  const updateAddressFun = async (data) => {
    await updateAddress(data)
      .then((res) => {
        if (res.data.success) {
          setLoaded(false);
          if (data.status !== undefined) {
            return toast.success("Address Removed");
          }
        }
      })
      .catch((err) => {
        if (err.response?.data?.message) {
          return toast.error(err.response?.data?.message);
        }
        toast.error(err.message);
      });
  };

  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    if (!loaded) {
      return setLoaded(true);
    }
    const userDataString = Cookies.get("userData");

    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const userId = userData.id;
      getAddressData(userId);
    }
  }, [loaded]);

  const makeOrderSuccess = async () => {
    const userDataString = Cookies.get("userData");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const userId = userData.id;

      const data = {
        products: [{ variantId: variantId, qty: qty }],
        userId: userId,
        paymentType: "online",
        addressId: selectedOption,
      };

      await makeOrder(data)
        .then((res) => {
          if (res.data?.success) {
            toast.success(res.data?.data?.message);
            router.push("/myaccount/orders");
          }
        })
        .catch((err) => {
          if (err.response?.data?.message) {
            return toast.error(err.response?.data?.message);
          }
          toast.error(err.message);
        });
    }
  };

  return (
    <>
      <div className="mx-auto px-4 max-w-2xl md:px-4 py-6 md:py-10 lg:max-w-7xl lg:px-8 h-full">
        <div className="grid grid-cols-12 ">
          {/* Address Data layout    **********************************/}
          <div className="lg:col-span-7 bg-white md:m-3 rounded-md col-span-12 md:p-6 p-4 shadow-lg">
            <div className="flex flex-col gap-2 ">
              {rows.map((item, index) => (
                <div
                  key={index}
                  className={`relative hover:shadow-xl text-sm p-6 pl-12 cursor-pointer border-2 rounded-lg shadow-sm ${
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
                  <p>{`${item?.firstName} ${item?.lastName}, ${item?.addressLine1}, ${item?.addressLine2},${item?.town}, ${item?.city}, ${item?.state}, PIN: ${item?.pincode}`}</p>
                  <p className="mt-2">Contact Number: {item?.phone}</p>
                  <div className="flex items-center justify-start gap-2 mt-3">
                    <button
                      className="flex items-center justify-center px-5 py-1 rounded-lg border-2 border-gray-400"
                      onClick={() =>
                        updateAddressFun({ id: item?.id, status: false })
                      }
                    >
                      Remove
                    </button>
                    <button
                      className="flex items-center justify-center px-5 py-1 rounded-lg border-2 border-gray-400"
                      onClick={() => {
                        setEditPopupVisible(true);
                        setAddrToUpdate(item);
                      }}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleDropDown}
              className="text-xl w-full hover:shadow-xl font-semibold opacity-85 p-5 mt-3 cursor-pointer border-2 rounded-lg shadow-sm flex items-center justify-start"
            >
              <div>+ Add New Address</div>
            </button>

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
            ) : (
              ""
            )}
          </div>
          {/* Payment Detail layout  **********************************/}

          <div className="lg:col-span-5 md:m-3 mt-2 bg-white p-4 md:p-6 rounded-md col-span-12 ">
            <div className="mt-6 bg-white border p-4 shadow-md rounded-md py-3 ">
              <h3 className="font-bold text-lg opacity-85">PRICE DETAILS</h3>
              <hr />
              <div className="flex items-center justify-between text-sm my-3">
                <p>Offer Price for single item</p>
                <p>{productDetail?.mrp}</p>
              </div>
              <div className="flex items-center justify-between text-sm my-3">
                <p>Quantity</p>
                <p>{qty}</p>
              </div>
              <div className="flex items-center justify-between text-sm my-3">
                <p>Total MRP (Inc. of Taxes)</p>
                <p>₹{qty * productDetail?.mrp}</p>
              </div>
              <div className="flex items-center justify-between text-sm my-3">
                <p>Incendia Discount</p>
                <p>- ₹{productDetail?.mrp - productDetail?.price}</p>
              </div>
              <div className="flex items-center justify-between text-sm my-3">
                <p>Shipping</p>
                <div>
                  <span className="line-through">₹49 </span>&nbsp;
                  <span className="text-green-500">Free</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm my-3">
                <p>Cart Total</p>
                <p>
                  ₹
                  {qty *
                    [
                      productDetail?.mrp -
                        [productDetail?.mrp - productDetail?.price],
                    ]}
                </p>
              </div>
            </div>

            <div className="mt-6 bg-white border p-4 shadow-md rounded-md py-3">
              <div className="flex justify-between items-center font-bold text-lg opacity-85">
                <p className="">Total Amount</p>
                <p>
                  ₹
                  {qty *
                    [
                      productDetail?.mrp -
                        [productDetail?.mrp - productDetail?.price],
                    ]}
                </p>
              </div>
              <p className="bg-green-600 text-white p-1.5 py-2 text-sm mt-2 flex items-center justify-center">
                You Saved ₹{productDetail?.mrp - productDetail?.price} on this
                order
              </p>
              {updateAddressFun && (
                <button
                  onClick={() => makeOrderSuccess()}
                  className="bg-teal-500 hover:bg-teal-600 text-white p-1.5 py-3 mt-4 flex items-center justify-center w-full font-bold text-xl"
                >
                  CHECKOUT SECURELY
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Edit Popup */}
      {editPopupVisible && (
        <EditAddressPopup
          handleCloseEditPopup={handleCloseEditPopup}
          addrToUpdate={addrToUpdate}
          setLoaded={setLoaded}
        />
      )}
   </>
  );
};

export default BuyProduct;
