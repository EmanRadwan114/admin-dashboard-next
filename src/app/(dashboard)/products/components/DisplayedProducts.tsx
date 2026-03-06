"use client";
import React, { useEffect } from "react";
import { IProduct } from "../types/products.types";
import ProductCard from "./ProductCard";
import { useAppDispatch, useAppSelector } from "@/lib/redux-toolkit/hooks";
import { setProducts } from "../store/products.slice";
import Pagination from "./Pagination";

interface IProps {
  products: IProduct[];
}

const DisplayedProducts: React.FC<IProps> = ({ products }) => {
  const dispatch = useAppDispatch();
  const {
    filteredCachedProducts,
    selectedCategory,
    sortByPrice,
    paginatedProducts,
    currentPage,
  } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(setProducts(products));
  }, []);

  const displayedProducts =
    selectedCategory === "" && sortByPrice === "" && currentPage === 1
      ? products
      : currentPage === 1
        ? filteredCachedProducts
        : paginatedProducts;
  return (
    <>
      {displayedProducts.length > 0 ? (
        <>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {displayedProducts?.slice(0, 20).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <Pagination />
        </>
      ) : (
        <div className="flex items-center justify-center h-[30vh] w-full">
          <p className="text-xl capitalize">no products found</p>
        </div>
      )}
    </>
  );
};

export default DisplayedProducts;
