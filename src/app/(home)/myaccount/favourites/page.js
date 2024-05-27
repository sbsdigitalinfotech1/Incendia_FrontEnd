"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IMAGE_URL, getFavourite, updateFavourite } from "@/config/Api";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

function Favourites() {
  const [FavProducts, setFavProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getFavouriteData = async () => {
    const userDataString = Cookies.get("userData");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const userId = userData.id;

      await getFavourite(userId)
        .then((res) => {
          if (res.data.success) {
            console.log(res.data.data.rows);
            setFavProducts(res.data.data.rows);
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

  const removeFav = async (id) => {
    const userDataString = Cookies.get("userData");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const userId = userData.id;

      const data = {
        userId: userId,
        id: id,
      };
      await updateFavourite(data)
        .then((res) => {
          if (res.data.success) {
            setLoaded(false);
            toast.success("removed");
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
    getFavouriteData();
  }, [loaded]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {FavProducts.map((item, index) => (
          <div key={index} className="relative">
            <Link href={`/products/${item.variantId}`}>
              <div className=" relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200  group-hover:opacity-75 lg:h-100">
                <img
                  src={`${IMAGE_URL + item.variant.productPhotos[0].url}`}
                  alt="product image"
                  onError={(e) => {
                    e.target.src = "";
                  }}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>

              <div className="mt-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">
                    {item?.variant.product.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {item?.variant.colorName}
                  </p>
                  <div className="mt-2">
                    <strong className="text-sm font-semibold text-gray-900">
                      ₹ {item?.variant?.price}
                    </strong>
                    &nbsp;&nbsp;
                    <strike className="text-xs font-medium text-gray-900">
                      ₹ {item?.variant?.mrp}
                    </strike>
                    &nbsp;&nbsp;
                    <span className="text-xs font-medium text-green-300">
                      0 % off
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <button
              className="absolute z-20 top-1.5 right-1.5 py-0.5 px-2 bg-white rounded-full text-sm cursor-pointer"
              onClick={() => removeFav(item.variantId)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
export default Favourites;
