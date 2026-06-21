import { useProducts } from "../context/ProductContext";

export default function ProductCard({ product }) {
  const { updatePrice, deleteProduct } = useProducts();

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "12px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.07)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <div style={{ flex: 1 }}>
        <h3 style={{ margin: "0 0 6px", color: "#1a1a2e" }}>
          {product.name}
        </h3>
        <p style={{ margin: "0 0 8px", color: "#555", fontSize: "14px" }}>
          {product.description}
        </p>
        <span
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            color: "#e94560",
          }}
        >
          ${Number(product.price).toFixed(2)}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          marginLeft: "16px",
        }}
      >
        <button
          onClick={() => updatePrice(product.id)}
          style={{
            padding: "6px 12px",
            backgroundColor: "#3498db",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "13px",
          }}
        >
          💲 +$1
        </button>
        <button
          onClick={() => deleteProduct(product.id)}
          style={{
            padding: "6px 12px",
            backgroundColor: "#e74c3c",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "13px",
          }}
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}
