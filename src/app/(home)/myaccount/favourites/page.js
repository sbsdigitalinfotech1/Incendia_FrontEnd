"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IMAGE_URL, getFavourite, updateFavourite } from "@/config/Api";
import toast from "react-hot-toast";
import { Image } from "@nextui-org/react";
import { Player } from "@lottiefiles/react-lottie-player";
import noMatchFound from "@/assets/images/noMatchFound"

function Favourites() {
  const [FavProducts, setFavProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const lottieRef = useRef(null);

  const getFavouriteData = async () => {

      await getFavourite()
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
    
  };

  const removeFav = async (id) => {

      const data = {
        id: id,
      };
      await updateFavourite(data)
        .then((res) => {
          if (res.data.success) {
            setLoaded(false);
            toast.success(res.data.data);
          }
        })
        .catch((err) => {
          if (err.response.data.message) {
            return toast.error(err.response.data.message);
          }
          toast.error(err.message);
        });
    
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
        {FavProducts.length > 0 ? FavProducts.map((item, index) => (
          <div key={index} className="relative">
            <Link href={`/products/${item.variantId}`}>
              <div className=" relative  w-full overflow-hidden rounded-md bg-gray-200  group-hover:opacity-75 lg:h-100">
                <Image
                radius="none"
                removeWrapper
                  src={`${IMAGE_URL + item.variant.productPhotos[0].url}`}
                  alt="product image"
                  onError={(e) => {
                    e.target.src = "";
                  }}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full aspect-9/12 z-0"
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
                    <strike className={`text-xs font-medium text-gray-900 ${item.variant.mrp - item.variant.price == 0 ? "hidden": ""}`}>
                      ₹ {item?.variant?.mrp}
                    </strike>
                    &nbsp;&nbsp;
                    <span className={`text-xs font-medium text-green-300 ${Math.round(((parseInt(item?.variant?.mrp) - parseInt(item?.variant?.price))/parseInt(item?.variant?.mrp))*100)== 0 ? "hidden": "" } `}>
                     {Math.round(((parseInt(item?.variant?.mrp) - parseInt(item?.variant?.price))/parseInt(item?.variant?.mrp))*100)}
                      % off
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <button
              className="absolute z-0 top-1.5 right-1.5 py-0.5 px-2 bg-white rounded-full text-sm cursor-pointer"
              onClick={() => removeFav(item.variantId)}
            >
              X
            </button>
          </div>
        )): (
          <div className="grid col-span-3 max-h-80">
                    <Player
                      ref={lottieRef}
                      autoplay
                      loop
                      src={noMatchFound}
                      style={{ height: "300px", width: "300px" }}
                    />
                    <p className="text-center text-lg font-semibold opacity-70">
                      No Favourites Found 🙁!
                    </p>
                  </div>
        )}
      </div>
    </>
  );
}
export default Favourites;
