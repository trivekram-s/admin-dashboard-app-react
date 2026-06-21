import AIChat from "../components/AIChat";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "40px 0" }}>
      {/* Hero Section */}
      <div
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          borderRadius: "12px",
          padding: "50px 30px",
          color: "white",
          textAlign: "center",
          marginBottom: "40px",
          boxShadow: "0 8px 24px rgba(102, 126, 234, 0.3)",
        }}
      >
        <h1 style={{ fontSize: "42px", margin: "0 0 15px 0", fontWeight: "bold" }}>
          🎯 Welcome to E-Commerce Admin
        </h1>
        <p style={{ fontSize: "18px", margin: "0", opacity: "0.95" }}>
          Your complete solution for managing your online business
        </p>
      </div>

      {/* Features Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        {/* Card 1 - Inventory Management */}
        <Link to="/products" style={{ textDecoration: "none" }}>
          <div
            style={{
              background: "white",
              borderRadius: "12px",
              padding: "25px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
              border: "3px solid #FF6B6B",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(255, 107, 107, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)";
            }}
          >
            <div style={{ fontSize: "42px", marginBottom: "12px" }}>📦</div>
            <h3 style={{ fontSize: "20px", margin: "0 0 10px 0", color: "#FF6B6B" }}>
              Inventory Management
            </h3>
            <p style={{ color: "#666", margin: "0", lineHeight: "1.6" }}>
              Track and manage your product inventory with ease
            </p>
          </div>
        </Link>

        {/* Card 2 - Pricing Control */}
        <Link to="/products" style={{ textDecoration: "none" }}>
          <div
            style={{
              background: "white",
              borderRadius: "12px",
              padding: "25px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
              border: "3px solid #4ECDC4",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(78, 205, 196, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)";
            }}
          >
            <div style={{ fontSize: "42px", marginBottom: "12px" }}>💰</div>
            <h3 style={{ fontSize: "20px", margin: "0 0 10px 0", color: "#4ECDC4" }}>
              Pricing Control
            </h3>
            <p style={{ color: "#666", margin: "0", lineHeight: "1.6" }}>
              Update pricing dynamically and manage promotions
            </p>
          </div>
        </Link>

        {/* Card 3 - Add Products */}
        <Link to="/add" style={{ textDecoration: "none" }}>
          <div
            style={{
              background: "white",
              borderRadius: "12px",
              padding: "25px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
              border: "3px solid #FFD93D",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(255, 217, 61, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)";
            }}
          >
            <div style={{ fontSize: "42px", marginBottom: "12px" }}>➕</div>
            <h3 style={{ fontSize: "20px", margin: "0 0 10px 0", color: "#FFD93D" }}>
              Add Products
            </h3>
            <p style={{ color: "#666", margin: "0", lineHeight: "1.6" }}>
              Quickly add new items to your product catalog
            </p>
          </div>
        </Link>
      </div>

      {/* AI Chat Section */}
      <div
        style={{
          background: "linear-gradient(135deg, #F093FB 0%, #F5576C 100%)",
          borderRadius: "12px",
          padding: "30px",
          color: "white",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ margin: "0 0 15px 0", fontSize: "24px", fontWeight: "bold" }}>
          🤖 AI Assistant
        </h2>
        <p style={{ margin: "0 0 20px 0", opacity: "0.95" }}>
          Get intelligent support for managing your e-commerce business
        </p>
      </div>

      <div style={{ backgroundColor: "white", borderRadius: "12px", padding: "20px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)" }}>
        <AIChat />
      </div>
    </div>
  );
}
