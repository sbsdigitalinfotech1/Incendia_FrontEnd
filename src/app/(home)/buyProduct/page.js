import React, { Suspense } from "react";
import BuyProduct from "./BuyProduct";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BuyProduct />
    </Suspense>
  );
};

export default page;
