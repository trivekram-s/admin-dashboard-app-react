
import {Routes,Route,Link} from "react-router-dom";
import {useState,useEffect} from "react";
import ProductForm from "./components/ProductForm";
import AIChat from "./components/AIChat";

export default function App(){
 const [products,setProducts]=useState([]);
 const [search,setSearch]=useState("");

 useEffect(()=>{
  fetch("http://localhost:3001/products").then(r=>r.json()).then(setProducts);
 },[]);

 const addProduct=(p)=>setProducts([...products,p]);

 const updatePrice=(id)=>{
  const product=products.find(p=>p.id===id);
  const price=product.price+1;
  fetch(`http://localhost:3001/products/${id}`,{
   method:"PATCH",
   headers:{"Content-Type":"application/json"},
   body:JSON.stringify({price})
  }).then(()=>setProducts(products.map(p=>p.id===id?{...p,price}:p)));
 };

 const filtered=products.filter(p=>p.name.toLowerCase().includes(search.toLowerCase()));

 return <div style={{padding:"20px"}}>
 <nav>
 <Link to="/">Home</Link> | <Link to="/add">Add Product</Link> | <Link to="/products">Products</Link>
 </nav>
 <Routes>
 <Route path="/" element={<div><h1>Admin Dashboard</h1><p>Manage products and inventory.</p><AIChat/></div>}/>
 <Route path="/add" element={<ProductForm onAdd={addProduct}/>}/>
 <Route path="/products" element={<div>
 <input placeholder="Search" value={search} onChange={e=>setSearch(e.target.value)}/>
 {filtered.map(p=><div key={p.id}>
 <h3>{p.name}</h3>
 <p>{p.description}</p>
 <p>${p.price}</p>
 <button onClick={()=>updatePrice(p.id)}>Increase Price</button>
 </div>)}
 </div>}/>
 </Routes>
 </div>
}
