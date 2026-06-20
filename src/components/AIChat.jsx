
import {useState,useRef} from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function AIChat(){
 const [response,setResponse]=useState("Ask me about products.");
 const [loading,setLoading]=useState(false);
 const ref=useRef();

 const ask=async()=>{
  setLoading(true);
  const prompt=ref.current.value;
  try{
   setResponse("AI feature placeholder. Connect Ollama API here. Prompt: "+prompt);
  }finally{setLoading(false);}
 };

 return <div>
 <h3>AI Assistant</h3>
 <input ref={ref} placeholder="Ask AI"/>
 <button onClick={ask}>Send</button>
 {loading?"Loading...":<ReactMarkdown remarkPlugins={[remarkGfm]}>{response}</ReactMarkdown>}
 </div>
}
