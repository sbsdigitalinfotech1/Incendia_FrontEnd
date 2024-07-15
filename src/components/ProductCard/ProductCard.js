import { IMAGE_URL } from "@/config/Api";
import { Image, Skeleton } from "@nextui-org/react";
import React from "react";
import { CiHeart } from "react-icons/ci";

function ProductCard({ product }) {
  const productImage = product?.productPhotos?.filter(
    (item) => item.main === true
  )[0].url;

    return (
      <div className="group relative">
        <div className="relative w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
          <Image
           radius="none"
            src={`${IMAGE_URL + productImage}`}
            alt="Product Image"
            className="h-full w-full object-cover object-center lg:h-full lg:w-full aspect-9/12 z-0"
          />
        </div>
        <button className="absolute top-1.5 right-1.5 py-0.5 px-2 text-sm cursor-pointer z-8">
          <CiHeart size={20} />
        </button>
        <div className="mt-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">
              <span aria-hidden="true" className="absolute inset-0" />
              {product?.name}
            </h3>

            <p className="text-sm text-gray-500">{product?.colorName}</p>
            <div>
              <strong className="text-medium font-semibold text-gray-900">
                ₹ {product?.price}
              </strong>
              &nbsp;&nbsp;
              <strike
                className={`text-sm font-medium text-gray-900 ${
                  product?.mrp == product?.price ? "hidden" : ""
                }`}
              >
                ₹ {product?.mrp}
              </strike>
              &nbsp;&nbsp;
              <span
                className={`text-sm font-medium text-green-300 ${
                  Math.round(
                    ((parseInt(product?.mrp) - parseInt(product?.price)) /
                      parseInt(product?.mrp)) *
                      100
                  )
                    ? ""
                    : "hidden"
                }`}
              >
                [
                {Math.round(
                  ((parseInt(product?.mrp) - parseInt(product?.price)) /
                    parseInt(product?.mrp)) *
                    100
                )}
                % off]
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  
}

export default ProductCard;
