import Link from "next/link";
import React from "react";

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

const page = () => {
  return (
    <div className="pr-0 md:pr-72">
      <div className="flex items-center justify-between">
        <h3 className="text-md font-semibold "> + Add New Address</h3>
        <Link href="# " className="text-sm underline">Change Default</Link>
      </div>

      <div className="flex flex-col gap-6 mt-6">
        {addressData?.row.map((item, index) => (
          <div
            key={index}
            className="relative text-sm p-6 px-8 md:px-12 
                border-1 border-gray-300 bg-gray-100 rounded-3xl shadow-sm"
          >
            <p>{item.address}</p>
            <p className="mt-2 mb-4">Contact Number : {item.contact} </p>
            <hr className="border border-gray-200"/>
            <div className="flex items-center justify-between  mt-1 font-semibold">
              <button className="flex items-center justify-center ">
                Remove
              </button>
              <button className="flex items-center justify-center ">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
