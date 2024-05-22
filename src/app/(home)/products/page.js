"use client"
import ProductFilter from "@/components/ProductFilter/ProductFilter";
import { getProducts } from "@/config/Api";
import React, { useEffect, useState } from "react";

function Products() {
// const [product, setProduct] = useState([]);

// useEffect(()=>{
//    const getProductsData = async() =>{
     
//    }
// },[])

  const products = [
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://www.beyoung.in/api/cache/catalog/products/plain_new_update_images_2_5_2022/navy_blue_plain_t-shirt_side_view_03_03_2023_03_03_2023_400x533.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "355",
      strikePrice: "355",
      offPrice:"50",
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

export default Products;
