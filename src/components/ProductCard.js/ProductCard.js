import React from "react";

function ProductCard({ product }) {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200  group-hover:opacity-75 lg:h-100">
        <img
          src={product?.imageSrc}
          alt={product?.imageAlt}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">
              <span aria-hidden="true" className="absolute inset-0" />
              {product?.name}
          </h3>
          
          <p className="text-sm text-gray-500">{product?.color}</p>
         <div className="">
            <strong className="text-medium font-semibold text-gray-900"> ₹ {product?.price}</strong>&nbsp;&nbsp;
            <strike className="text-sm font-medium text-gray-900">₹ {product?.strikePrice}</strike>&nbsp;&nbsp;
            <span className="text-sm font-medium text-green-300">[{product?.offPrice}% off]</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
