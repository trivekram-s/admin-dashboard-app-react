
import {useState,useId} from "react";import {useProducts} from "../context/ProductContext";
export default function ProductForm(){
 const {addProduct}=useProducts(); const id=useId();
 const [name,setName]=useState(""); const [description,setDescription]=useState(""); const [price,setPrice]=useState("");
 async function submit(e){e.preventDefault(); const r=await fetch("http://localhost:3001/products",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name,description,price:Number(price)})}); const p=await r.json(); addProduct(p);}
 return <form onSubmit={submit}><label htmlFor={id}>Name</label><input id={id} value={name} onChange={e=>setName(e.target.value)}/><input placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)}/><input placeholder="Price" value={price} onChange={e=>setPrice(e.target.value)}/><button type="submit">Add Product</button></form>
}
