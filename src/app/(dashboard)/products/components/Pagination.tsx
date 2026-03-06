"use client";
import Button from "@/components/Button";
import { useAppDispatch, useAppSelector } from "@/lib/redux-toolkit/hooks";
import React from "react";
import { changePaginatePage, handlePagination } from "../store/products.slice";

const Pagination: React.FC = () => {
  const { filteredCachedProducts, currentPage } = useAppSelector(
    (state) => state.products,
  );
  const dispatch = useAppDispatch();

  const limit = 20;

  const totalPages = Math.ceil(filteredCachedProducts.length / limit);

  const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  const btnStyle = `cursor-pointer capitalize p-2 rounded-md transition-colors duration-300 text-foreground! font-medium`;

  const handlePageChange = (page: number) => {
    dispatch(changePaginatePage(+page));
    dispatch(handlePagination());
  };

  if (filteredCachedProducts.length <= limit) return null;

  return (
    <div className="flex gap-2 items-center justify-center">
      <Button
        onClick={() => handlePageChange(currentPage - 1)}
        className={`${btnStyle} hover:bg-gray-100 bg-white shadow-sm`}
        disabled={currentPage === 1}
      >
        prev
      </Button>
      {pagesArray.map((page) => (
        <Button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`${btnStyle} ${currentPage === page ? "bg-foreground! text-white! hover:bg-foreground/80!" : "bg-transparent! hover:text-foreground/70!"}`}
        >
          {page}
        </Button>
      ))}
      <Button
        onClick={() => handlePageChange(currentPage + 1)}
        className={`${btnStyle} hover:bg-gray-100 bg-white shadow-sm`}
        disabled={currentPage === totalPages}
      >
        next
      </Button>
    </div>
  );
};

export default Pagination;
