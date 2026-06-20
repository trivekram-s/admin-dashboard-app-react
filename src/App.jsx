
import {Routes,Route,Link} from "react-router-dom";
import {useState} from "react";
import ProductForm from "./components/ProductForm";
import AIChat from "./components/AIChat";
import {useProducts} from "./context/ProductContext";
import useSearch from "./hooks/useSearch";
export default function App(){
 const {products,updatePrice}=useProducts();
 const [search,setSearch]=useState("");
 const filtered=useSearch(products,search);
 return <div style={{padding:"20px",maxWidth:"900px",margin:"auto"}}>
 <h1>E-Commerce Admin Dashboard</h1>
 <nav><Link to="/">Home</Link> | <Link to="/add">Add Product</Link> | <Link to="/products">Products</Link></nav>
 <Routes>
 <Route path="/" element={<div><p>Manage inventory, pricing and products.</p><AIChat/></div>} />
 <Route path="/add" element={<ProductForm/>}/>
 <Route path="/products" element={<div><input placeholder="Search products" value={search} onChange={e=>setSearch(e.target.value)}/>
 {filtered.map(p=><div key={p.id}><h3>{p.name}</h3><p>{p.description}</p><p>${p.price}</p><button onClick={()=>updatePrice(p.id)}>Increase Price</button></div>)}</div>} />
 </Routes></div>
}
