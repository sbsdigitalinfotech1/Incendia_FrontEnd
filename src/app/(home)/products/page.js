"use client";
import ProductFilter from "@/components/ProductFilter/ProductFilter";
import { getProducts } from "@/config/Api";
import { Skeleton } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Products() {
  const [products, setProducts] = useState([]);
  const [pageSize, setPageSize] = useState(12);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProductsData = async ({ page, pageSize }) => {
      window.scrollTo(0, 0);
      setLoading(true);
      await getProducts({ page, pageSize })
        .then((res) => {
          if (res.data.success) {
            // console.log(res.data.data.rows);
            setProducts(res.data.data.rows);
            setCount(res.data.data.count);
            setLoading(false);
          }
        })
        .catch((err) => {
          if (err.response?.data?.message) {
            return toast.error(err.response.data.message);
          }
          toast.error(err.message);
        });
    };
    getProductsData({ page: page, pageSize: pageSize });
  }, [page]);

    return (
      <>
        <ProductFilter loading={loading} count={count} products={products} page={page} pageSize={pageSize} setPage={setPage} />
      </>
    );
  
  
  
}

export default Products;
