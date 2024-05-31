"use client";

import Image from "next/image";
import logo from "@/assets/images/incendiaLogo.png";
import OtpInput from "@/components/OtpInput/OtpInput";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  verifyRegistration,
  VerifyOtpAPI,
  login,
  resetPassword,
} from "@/config/Api";
import { GlobalStateProvider, useGlobalState } from "@/store/GlobalContext";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";

const VerifyOtp = () => {
  const [value, setValue] = useState("");
  const [loaded, setLoaded] = useState(false);

  const router = useRouter();
  const GlobalState = useGlobalState();

  const handlelogin = async (values) => {
    await login(values)
      .then((res) => {
        if (res.data.success) {
          toast.success("log in succesfully");
          Cookies.set("userData", JSON.stringify(res.data), {
            expires: 7,
          });
          router.replace("/");
        }
      })
      .catch((err) => {
        if (err.response.data.message) {
          return toast.error(err.response.data.message);
        }
        toast.error(err.message);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (GlobalState.from == "register") {
      var data = {
        email: GlobalState.email,
        password: GlobalState.password,
        otp: value,
      };
      await verifyRegistration(data)
        .then(async (res) => {
          if (res.data.success) {
            toast.success("otp verified");
            await handlelogin(data);
          }
        })
        .catch((err) => {
          if (err.response.data.message) {
            return toast.error(err.response.data.message);
          }
          toast.error(err.message);
        });
    } else if (GlobalState.from == "forgetPassword") {
      var data = {
        email: GlobalState.email,
        otp: value,
      };
      await VerifyOtpAPI(data)
        .then((res) => {
          if (res.data.success) {
            toast.success("OTP Verified");
            router.push("/resetPassword");
          }
        })
        .catch((err) => {
          if (err.response.data.message) {
            return toast.error(err.response.data.message);
          }
          toast.error(err.message);
        });
    }
  };

  useEffect(() => {
    if (!loaded) {
      return setLoaded(true);
    }
    if (GlobalState.from == "" || GlobalState.email == "") {
      router.back();
    }
  }, [loaded]);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-[#F5F5F5]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-10 w-auto"
            src={logo}
            width={100}
            alt="companyLogo"
          />
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Verify OTP
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm md:max-md">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <fieldset className="grid grid-cols-4 gap-3 py-6 rounded-md">
              <OtpInput
                length={4}
                value={value}
                setValue={setValue}
                containerClassName="w-full aspect-square"
                inputFieldClassName="size-full rounded-md border-0 p-1.5 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-2xl"
              />
            </fieldset>
            <div className="mt-5">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gray-900 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Verify OTP
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default VerifyOtp;
