import { ICategory } from "./categories.types";

export interface IProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  availabilityStatus: string;
  meta: IMeta;
  images: string[];
  thumbnail: string;
}

export interface IMeta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface IProductsStore {
  cachedProducts: IProduct[];
  filteredCachedProducts: IProduct[];
  paginatedProducts: IProduct[];
  cachedCategories: ICategory[];
  selectedCategory: string;
  sortByPrice: "asc" | "dsc" | "";
  currentPage: number;
}
