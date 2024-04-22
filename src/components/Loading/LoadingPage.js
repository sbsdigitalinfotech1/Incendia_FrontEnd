"use client";

import React from "react";
import { Spinner } from "@nextui-org/react";

function LoadingPage() {
  return (
    <div className="w-screen h-screen backdrop-blur flex justify-center items-center">
      <Spinner label="Please wait..." color="secondary" labelColor="secondary" />
    </div>
  );
}

export default LoadingPage;
