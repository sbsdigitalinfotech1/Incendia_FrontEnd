import React from "react";
import ProductCard from "../ProductCard.js/ProductCard";
import Link from "next/link";

function ProductRowFilter({ products }) {
  return (
    <>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {products.map((product, i) => (
          <Link href={`/products/${product.id}`} key={i}>
            <div className="">
              <ProductCard product={product} />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default ProductRowFilter;
