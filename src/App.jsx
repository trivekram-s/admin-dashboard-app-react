import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import Products from "./pages/Products";

export default function App() {
  return (
    <div style={{ fontFamily: "sans-serif", minHeight: "100vh", backgroundColor: "#f4f6f8" }}>
      <Navbar />
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 20px 40px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </div>
  );
}
