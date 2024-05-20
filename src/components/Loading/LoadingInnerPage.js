"use client";

import React from "react";
import { Spinner } from "@nextui-org/react";

function LoadingInnerPage() {
  return (
    <div className="w-full h-full backdrop-blur flex justify-center items-center">
      <Spinner label="Please wait..." color="secondary" labelColor="secondary" />
    </div>
  );
}

export default LoadingInnerPage;
