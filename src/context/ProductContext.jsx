import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

const API = "http://localhost:3001/products";
const USE_LOCAL = true; // Set to false when json-server is running

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  // Load products from localStorage OR json-server
  useEffect(() => {
    if (USE_LOCAL) {
      const stored = localStorage.getItem("products");
      if (stored) setProducts(JSON.parse(stored));
    } else {
      fetch(API)
        .then((r) => r.json())
        .then(setProducts)
        .catch(() => {
          const stored = localStorage.getItem("products");
          if (stored) setProducts(JSON.parse(stored));
        });
    }
  }, []);

  // Persist to localStorage whenever products change
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Date.now().toString(), // generate unique ID locally
    };
    setProducts((prev) => [...prev, newProduct]);
    return newProduct;
  };

  const updatePrice = async (id) => {
    const product = products.find((p) => p.id === id);
    if (!product) return;

    const updatedPrice = Number(product.price) + 1;

    if (!USE_LOCAL) {
      await fetch(`${API}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price: updatedPrice }),
      });
    }

    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, price: updatedPrice } : p))
    );
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, updatePrice, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProducts = () => useContext(ProductContext);
