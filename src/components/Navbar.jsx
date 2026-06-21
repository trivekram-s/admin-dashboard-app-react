import { NavLink } from "react-router-dom";

const navStyle = {
  display: "flex",
  gap: "20px",
  padding: "12px 20px",
  backgroundColor: "#1a1a2e",
  marginBottom: "24px",
};

const linkStyle = ({ isActive }) => ({
  color: isActive ? "#e94560" : "#a8b2d8",
  textDecoration: "none",
  fontWeight: isActive ? "bold" : "normal",
  fontSize: "15px",
});

export default function Navbar() {
  return (
    <nav style={navStyle}>
      <NavLink to="/" end style={linkStyle}>
        Home
      </NavLink>
      <NavLink to="/add" style={linkStyle}>
        Add Product
      </NavLink>
      <NavLink to="/products" style={linkStyle}>
        Products
      </NavLink>
    </nav>
  );
}
