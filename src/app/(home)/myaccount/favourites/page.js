import React from "react";
import Link from "next/link";

const FavProducts = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://www.beyoung.in/api/cache/catalog/products/new_shirt_upload_21_10_2022/mint_blue_striped_urban_shirt_for_men_base_02_03_2024_400x533.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "35",
    strikePrice: "355",
    offPrice: "50",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Red",
    href: "#",
    imageSrc:
      "https://www.beyoung.in/api/cache/catalog/products/printed_oversized_t-shirt/drip_culture_printed_oversized_t-shirt_for_men_front_and_back_20_10_2023_400x533.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "35",
    strikePrice: "355",
    offPrice: "50",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic green",
    href: "#",
    imageSrc:
      "https://www.beyoung.in/api/cache/catalog/products/printed_oversized_t-shirt/black_yellow_color_block_oversized_t_shirt_for_men_base_02_02_2024_400x533.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "35",
    strikePrice: "355",
    offPrice: "50",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://www.beyoung.in/api/cache/catalog/products/new_shirt_upload_21_10_2022/black_colorblock_corduroy_shirt_for_men_base_19_01_2024_400x533.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "35",
    strikePrice: "355",
    offPrice: "50",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://www.beyoung.in/api/cache/catalog/products/printed_t-shirts_for_men_15_8_2022/relax_navy_blue_men_base_22_12_2023_700x933.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "35",
    strikePrice: "355",
    offPrice: "50",
    color: "Black",
  },

  // More products...
];

function Favourites() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {FavProducts.map((item, index) => (
          <div key={index}>
            <Link href="/products/1">
              <div className=" relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200  group-hover:opacity-75 lg:h-100">
                <img
                  src={item?.imageSrc}
                  alt={item?.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />

                <button className="absolute top-1.5 right-1.5 py-0.5 px-2 bg-white rounded-full text-sm cursor-pointer">
                  X
                </button>
              </div>

              <div className="mt-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">
                    {item?.name}
                  </h3>

                  <p className="text-sm text-gray-500">{item?.color}</p>
                  <div className="mt-2">
                    <strong className="text-sm font-semibold text-gray-900">
                      ₹ {item?.price}
                    </strong>
                    &nbsp;&nbsp;
                    <strike className="text-xs font-medium text-gray-900">
                      ₹ {item?.strikePrice}
                    </strike>
                    &nbsp;&nbsp;
                    <span className="text-xs font-medium text-green-300">
                      [{item?.offPrice}% off]
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Favourites;
