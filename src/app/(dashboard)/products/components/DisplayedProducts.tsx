"use client";
import React, { useEffect } from "react";
import { IProduct } from "../types/products.types";
import { useAppDispatch, useAppSelector } from "@/lib/redux-toolkit/hooks";
import { setProducts } from "../store/products.slice";
import Pagination from "./Pagination";
import ProductRow from "./ProductRow";
import { tableHeaders } from "../data/tableHeaders";

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
          <div className="shadow-sm rounded-md border border-neutral-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table
                id="my-table"
                className="min-w-full divide-y divide-neutral-200 table-fixed border-spacing-2"
              >
                <thead className="bg-foreground uppercase text-white">
                  <tr className="p-4 rounded-t-md">
                    {tableHeaders.map((item) => (
                      <th
                        className="font-normal px-6 py-3 text-sm tracking-wider text-center w-1/12"
                        key={item}
                      >
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-neutral-200 text-center">
                  {displayedProducts?.slice(0, 20).map((p) => (
                    <ProductRow key={p.id} product={p} />
                  ))}
                </tbody>
              </table>
            </div>
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
