
import {useState,useId} from "react";
export default function ProductForm({onAdd}){
 const id=useId();
 const [name,setName]=useState("");
 const [description,setDescription]=useState("");
 const [price,setPrice]=useState("");
 const submit=e=>{
  e.preventDefault();
  fetch("http://localhost:3001/products",{
   method:"POST",
   headers:{"Content-Type":"application/json"},
   body:JSON.stringify({name,description,price:Number(price)})
  }).then(r=>r.json()).then(onAdd);
 };
 return <form onSubmit={submit}>
 <label htmlFor={id}>Name</label>
 <input id={id} value={name} onChange={e=>setName(e.target.value)}/>
 <input placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)}/>
 <input placeholder="Price" value={price} onChange={e=>setPrice(e.target.value)}/>
 <button>Add Product</button>
 </form>
}
