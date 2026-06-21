import { useState } from "react";
import { useProducts } from "../context/ProductContext";
import useSearch from "../hooks/useSearch";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

export default function ProductList() {
  const { products } = useProducts();
  const [query, setQuery] = useState("");
  const filtered = useSearch(products, query);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <h2>📦 Products ({products.length})</h2>
        <Link
          to="/add"
          style={{
            padding: "8px 16px",
            backgroundColor: "#e94560",
            color: "#fff",
            borderRadius: "6px",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          ➕ Add New
        </Link>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="🔍 Search by name, description or price..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "10px 14px",
          marginBottom: "20px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "15px",
          boxSizing: "border-box",
        }}
      />

      {/* Results Info */}
      {query && (
        <p style={{ color: "#777", marginBottom: "12px", fontSize: "14px" }}>
          {filtered.length === 0
            ? `No products found for "${query}"`
            : `Showing ${filtered.length} of ${products.length} products`}
        </p>
      )}

      {/* Empty State */}
      {products.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "40px",
            color: "#aaa",
          }}
        >
          <p style={{ fontSize: "40px" }}>📭</p>
          <p>No products yet.</p>
          <Link to="/add" style={{ color: "#e94560" }}>
            Add your first product →
          </Link>
        </div>
      ) : filtered.length === 0 ? (
        <p style={{ textAlign: "center", color: "#aaa" }}>
          No results match your search.
        </p>
      ) : (
        filtered.map((p) => <ProductCard key={p.id} product={p} />)
      )}
    </div>
  );
}
