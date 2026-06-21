import { useProducts as useProductsContext } from "../context/ProductContext";

export default function useProducts() {
  const { products, addProduct, updatePrice, deleteProduct } =
    useProductsContext();

  const getProductById = (id) => {
    return products.find((p) => p.id === id) || null;
  };

  const getTotalProducts = () => products.length;

  const getTotalValue = () =>
    products.reduce((sum, p) => sum + Number(p.price), 0).toFixed(2);

  const getAveragePrice = () => {
    if (products.length === 0) return "0.00";
    return (
      products.reduce((sum, p) => sum + Number(p.price), 0) / products.length
    ).toFixed(2);
  };

  const getMostExpensive = () =>
    products.reduce(
      (max, p) => (Number(p.price) > Number(max.price) ? p : max),
      products[0] || null
    );

  const getCheapest = () =>
    products.reduce(
      (min, p) => (Number(p.price) < Number(min.price) ? p : min),
      products[0] || null
    );

  return {
    // Core CRUD from context
    products,
    addProduct,
    updatePrice,
    deleteProduct,

    // Extra utility functions
    getProductById,
    getTotalProducts,
    getTotalValue,
    getAveragePrice,
    getMostExpensive,
    getCheapest,
  };
}
