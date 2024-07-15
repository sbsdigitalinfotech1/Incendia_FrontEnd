"use client";
import ProductFilter from "@/components/ProductFilter/ProductFilter";
import { getProducts, getProductsFiltered } from "@/config/Api";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Products() {
  const [products, setProducts] = useState([]);
  const [pageSize, setPageSize] = useState(12);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("new");
  const [size, setSize] = useState();
  const [categoryId, setCategoryId] = useState("");
  const [colorName, setColorName] = useState("");

  const getProductsData = async (data) => {
    window.scrollTo(0, 0);
    setLoading(true);
    await getProductsFiltered({
      page: data?.page,
      pageSize: pageSize,
      sort: data?.sort,
      size: data?.size,
      categoryId: data?.categoryId,
      colorName: data?.colorName,
    })
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

  useEffect(() => {
    getProductsData({ page: page, sort: sort });
  }, [page]);

  useEffect(() => {
    getProductsData({
      page: 1,
      sort: sort,
      size: size,
      categoryId: categoryId,
      colorName: colorName,
    });
  }, [sort]);

  useEffect(() => {
    getProductsData({
      page: 1,
      sort: sort,
      size: size,
      categoryId: categoryId,
      colorName: colorName,
    });
  }, [size]);

  useEffect(() => {
    getProductsData({
      page: 1,
      sort: sort,
      size: size,
      categoryId: categoryId,
      colorName: colorName,
    });
  }, [categoryId]);

  useEffect(() => {
    getProductsData({
      page: 1,
      sort: sort,
      size: size,
      categoryId: categoryId,
      colorName: colorName,
    });
  }, [colorName]);

  return (
    <>
      <ProductFilter
        setSort={setSort}
        setSize={setSize}
        setCategoryId={setCategoryId}
        setColorName={setColorName}
        loading={loading}
        count={count}
        products={products}
        setProducts={setProducts}
        page={page}
        pageSize={pageSize}
        setPage={setPage}
        getProductsData={getProductsData}
      />
    </>
  );
}

export default Products;
