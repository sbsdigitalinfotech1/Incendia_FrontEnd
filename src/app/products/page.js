import ProductFilter from "@/components/ProductFilter/ProductFilter";
import React from "react";

function page() {
  const products = [
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://www.beyoung.in/api/cache/catalog/products/plain_new_update_images_2_5_2022/navy_blue_plain_t-shirt_side_view_03_03_2023_03_03_2023_400x533.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://www.beyoung.in/api/cache/catalog/products/full_sleeves_new_update_images/plain_burgundy_full_sleeves_t-shirt_base_08_03_2023_700x933.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://www.beyoung.in/api/cache/catalog/products/polo_new_update_images_10_1_2022/classic_white_polo_t-shirt_base_31_1_2023_19_05_2023_700x933.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://www.beyoung.in/api/cache/catalog/products/printed_t-shirts_for_men_15_8_2022/take_the_road_less_travelled_t-shirt_for_men_base_700x933.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://www.beyoung.in/api/cache/catalog/products/printed_t-shirts_for_men_15_8_2022/aalas_se_majboor_half_sleeve_t-shirt_for_men_base_400x533.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://www.beyoung.in/api/cache/catalog/products/printed_t-shirts_for_men_15_8_2022/airplane_mode_on_t-shirts_for_men_base_700x933.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://www.beyoung.in/api/cache/catalog/products/new_full_sleeves_14_10_2022/smoky_green_melange_full_sleeves_t_shirt30_11_2022_700x933.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://www.beyoung.in/api/cache/catalog/products/printed_oversized_t-shirt/pitch_black_mock_neck_full_sleeves_t-shirt_base_09_02_2024_700x933.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },

    // More products...
  ];
  return (
    <>
      <ProductFilter products={products}/>
    </>
  );
}

export default page;
