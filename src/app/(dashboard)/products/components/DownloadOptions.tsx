"use client";
import React, { useState } from "react";
import { utils, writeFile } from "xlsx";
import { IProduct } from "../types/products.types";
import { useAppSelector } from "@/lib/redux-toolkit/hooks";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { tableHeaders } from "../data/tableHeaders";

const DownloadOptions: React.FC = () => {
  const [option, setOption] = useState("");
  const { cachedProducts } = useAppSelector((state) => state.products);

  const exportAsXlsxFile = (data: IProduct[]) => {
    const workSheet = utils.json_to_sheet(data);
    const workBook = utils.book_new();
    utils.book_append_sheet(workBook, workSheet, "Data");
    writeFile(workBook, "products.xlsx");
  };

  const exportAsPdfFile = (data: IProduct[]) => {
    const doc = new jsPDF();
    doc.text("Products Data", 10, 10);

    autoTable(doc, {
      head: [
        [
          ...tableHeaders.filter((h) => h.toLocaleLowerCase() !== "image"),
          "Discount Price",
        ],
      ],
      body: data.map((item) => [
        item.title,
        item.description,
        item.category,
        item.availabilityStatus,
        `${item.price}$`,
        `${item.discountPercentage}% off`,
      ]),
      styles: {
        cellPadding: 2,
        fontSize: 8,
        valign: "middle",
        minCellHeight: 10,
      },
    });

    doc.save("products.pdf");
  };

  //   handlers
  const handleOptionChange = (
    e: React.ChangeEvent<HTMLSelectElement, HTMLSelectElement>,
  ) => {
    setOption(e.target.value);
    if (e.target.value === "xlsx") {
      exportAsXlsxFile(cachedProducts);
    } else if (e.target.value === "pdf") {
      exportAsPdfFile(cachedProducts);
    }
    setOption("");
  };

  return (
    <select
      value={option}
      onChange={handleOptionChange}
      className="outline outline-gray-500 rounded-md p-2 focus-within:ring-2 focus-within:ring-foreground focus-within:outline-offset-4 w-full"
    >
      <option value="" disabled>
        -- Choose Export Formate --
      </option>
      <option value="pdf">PDF</option>
      <option value="xlsx">XLSX</option>
    </select>
  );
};

export default DownloadOptions;
