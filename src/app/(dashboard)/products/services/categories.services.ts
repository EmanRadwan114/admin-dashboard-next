export const getAllCategories = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DUMMMY_JSON_BASE_URL}/products/categories`,
  );
  const data = await response.json();
  return data;
};
