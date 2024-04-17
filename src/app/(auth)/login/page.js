import React from "react";
import logo from "@/assets/images/incendiaLogo.png";
import Image from "next/image";
import google from "@/assets/images/google.png";
import Link from "next/link";

function page() {
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
        <form className="space-y-6" action="#" method="POST ">
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
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="mt-5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link href='/forgetPassword' className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                  </Link>
                    
                  
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="mt-5">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gray-900 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
              >
                Sign in
              </button>
            </div>
            <div className="relative w-100 mt-12">
              <hr className="w-100 h-2" />
              <span className="absolute -top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 bg-white px-5 text-sm ">
                Or Continue With
              </span>
            </div>
            <div className="mt-6 w-100 flex justify-center">
              <button className="w-1/2 border-2 py-3 rounded-lg flex items-center justify-center text-sm text-gray font-medium hover:bg-slate-50">
                <Image src={google} width={20} alt="googleLogo" />&nbsp;
                Google
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default page;
