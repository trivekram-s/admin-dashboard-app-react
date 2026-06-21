import AIChat from "../components/AIChat";

export default function Home() {
  return (
    <div>
      <h2>Welcome to E-Commerce Admin</h2>
      <p style={{ color: "#555" }}>
        Manage your inventory, update pricing, and add new products.
      </p>
      <AIChat />
    </div>
  );
}
