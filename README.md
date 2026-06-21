#  E-Commerce Admin Dashboard

A lightweight admin dashboard built with **React + Vite** for managing
products, pricing and inventory.

---

##  Features

-  **Add Product** — Validated form with success feedback & auto-redirect
-  **Search Products** — Real-time search by name, description or price
-  **Update Price** — Increase any product price by $1
-  **Delete Product** — Remove products instantly
-  **Persistent Storage** — localStorage by default, json-server optional
-  **AI Assistant** — Integrated chat on the Home page

---

##  Project Structure

```
src/
├── components/
│   ├── AIChat.jsx
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── ProductForm.jsx
│   └── ProductList.jsx
├── context/
│   └── ProductContext.jsx
├── hooks/
│   ├── useProducts.js
│   └── useSearch.js
├── pages/
│   ├── Home.jsx
│   ├── AddProduct.jsx
│   └── Products.jsx
├── App.jsx
└── main.jsx
```

---

##  Setup

```bash
# Install &amp; run
npm install
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

##  Tech Stack

| Tech | Purpose |
|---|---|
| React 18 + Vite | UI & build tool |
| React Router v6 | Client-side routing |
| json-server | Mock REST API (optional) |
| react-markdown | AI chat rendering |

---

##  Routes

| Path | Page |
|---|---|
| `/` | Home + AI Assistant |
| `/add` | Add Product |
| `/products` | Product List & Search |

---

##  Roadmap

- [ ] Edit product
- [ ] Category filter
- [ ] Sort by price / date
- [ ] Dark mode
- [ ] Real AI integration (Ollama / OpenAI)

---
Built using React + Vite/
Author : Trivekram
