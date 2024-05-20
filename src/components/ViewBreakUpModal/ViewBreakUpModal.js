"use client"
import React from "react";

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-70 flex">
      <div className="relative p-8 bg-white w-full max-w-xs md:max-w-md m-auto rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Payment Information</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            X
          </button>
        </div>
        <hr />
        <div className="mt-4 flex justify-between items-center">
          <p className="font-semibold">Cart Value</p>
          <p>₹998</p>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <p className="font-semibold">COD Fee</p>
          <p>₹50</p>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <p className="font-semibold">Total Paid</p>
          <p>₹1048</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
