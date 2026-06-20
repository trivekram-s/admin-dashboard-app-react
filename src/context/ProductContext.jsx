
import {createContext,useContext,useEffect,useState} from "react";
const ProductContext=createContext();
export function ProductProvider({children}){
 const [products,setProducts]=useState([]);
 useEffect(()=>{fetch("http://localhost:3001/products").then(r=>r.json()).then(setProducts)},[]);
 const addProduct=(p)=>setProducts(prev=>[...prev,p]);
 const updatePrice=async(id)=>{
  const product=products.find(p=>p.id===id); if(!product) return;
  const price=Number(product.price)+1;
  await fetch(`http://localhost:3001/products/${id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({price})});
  setProducts(prev=>prev.map(p=>p.id===id?{...p,price}:p));
 };
 return <ProductContext.Provider value={{products,addProduct,updatePrice}}>{children}</ProductContext.Provider>
}
export const useProducts=()=>useContext(ProductContext);
