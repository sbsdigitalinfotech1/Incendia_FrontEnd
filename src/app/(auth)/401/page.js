'use client'
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
    const router = useRouter();

    useEffect(()=>{
        Cookies.remove("userData");
    },[])

    const handleLogin = () =>{
        router.replace("/login")
    }
    const handleContinue = () =>{
        router.replace("/");
    }
 
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">401</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Unauthorized Access
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          You do not have permission to view this page.
        </p>
        <div className="space-y-4">
          <button
            className="w-full py-3 bg-black text-white font-medium text-lg rounded-lg hover:bg-gray-700 transition duration-300"
          onClick={handleLogin}
          >
            Login
          </button>
          <button
            className="w-full py-3 bg-gray-200 text-gray-800 font-medium text-lg rounded-lg hover:bg-gray-300 transition duration-300"
           onClick = {handleContinue}
          >
            Continue as Guest
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
