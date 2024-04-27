"use client";
import Image from "next/image";
import React from "react";

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-70 flex">
      <div className="relative p-8 bg-white w-full max-w-sm md:max-w-md m-auto rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Add To Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            X
          </button>
        </div>
        <img
          src="https://www.beyoung.in/api/cache/catalog/products/printed_t-shirts_for_men_15_8_2022/relax_navy_blue_men_base_22_12_2023_700x933.jpg"
          alt="image"
          class="aspect-9/16 w-1/3 flex items-center justify-center"
          
        />
        <p className="mt-2">Black Colorblock Corduroy Shirt for Men</p>
        <div className="flex justify-between items-center mt-4 w-full">
        <select className="border-2 border-gray-300 p-3 ">
          <option>Color</option>
          <option></option>
          <option></option>
          <option></option>
        </select>
        <select className="border-2 border-gray-300 p-3 ">
          <option>Size</option>
          <option></option>
          <option></option>
          <option></option>
        </select>
      </div>
      </div>
      
    </div>
  );
};

export default Modal;
