import ProductBarChart from "./components/ProductBarChart";
import { getProducts } from "../products/services/products.services";
import UserInfo from "./components/UserInfo";

export default async function DashboardPage() {
  const productsData = await getProducts();

  return (
    <div className="w-full flex flex-col gap-6">
      <UserInfo />
      <ProductBarChart products={productsData.products} />
    </div>
  );
}
