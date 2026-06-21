import { useState } from "react";
import { useProducts } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "10px",
  marginBottom: "14px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "15px",
  boxSizing: "border-box",
};

const labelStyle = {
  display: "block",
  marginBottom: "4px",
  fontWeight: "600",
  color: "#333",
};

export default function ProductForm() {
  const { addProduct } = useProducts();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate() {
    if (!name.trim()) return "Product name is required.";
    if (!description.trim()) return "Description is required.";
    if (!price || isNaN(Number(price)) || Number(price) <= 0)
      return "Please enter a valid price greater than 0.";
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      addProduct({
        name: name.trim(),
        description: description.trim(),
        price: Number(price),
      });

      setSuccess(true);
      setName("");
      setDescription("");
      setPrice("");

      // Redirect to products page after 1.5s
      setTimeout(() => navigate("/products"), 1500);
    } catch (err) {
      setError("Failed to add product. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h2>➕ Add New Product</h2>

      {error && (
        <div
          style={{
            backgroundColor: "#ffe0e0",
            color: "#c0392b",
            padding: "10px",
            borderRadius: "6px",
            marginBottom: "14px",
          }}
        >
          ⚠️ {error}
        </div>
      )}

      {success && (
        <div
          style={{
            backgroundColor: "#e0ffe0",
            color: "#27ae60",
            padding: "10px",
            borderRadius: "6px",
            marginBottom: "14px",
          }}
        >
          ✅ Product added! Redirecting to products...
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <label style={labelStyle} htmlFor="name">
          Product Name *
        </label>
        <input
          id="name"
          style={inputStyle}
          placeholder="e.g. Wireless Headphones"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label style={labelStyle} htmlFor="description">
          Description *
        </label>
        <textarea
          id="description"
          style={{ ...inputStyle, height: "80px", resize: "vertical" }}
          placeholder="e.g. Noise-cancelling over-ear headphones"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label style={labelStyle} htmlFor="price">
          Price ($) *
        </label>
        <input
          id="price"
          style={inputStyle}
          type="number"
          min="0.01"
          step="0.01"
          placeholder="e.g. 49.99"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: loading ? "#aaa" : "#e94560",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
