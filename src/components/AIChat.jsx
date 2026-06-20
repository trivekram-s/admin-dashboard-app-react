
import {useState,useRef} from "react";import ReactMarkdown from "react-markdown";import remarkGfm from "remark-gfm";
export default function AIChat(){const [response,setResponse]=useState("Ready."); const [loading,setLoading]=useState(false); const ref=useRef();
async function ask(){setLoading(true); try{const prompt=ref.current.value; setResponse(`Ollama integration point. User asked: ${prompt}`);}finally{setLoading(false)}}
return <div><h3>AI Assistant</h3><input ref={ref}/><button onClick={ask}>Send</button>{loading?"Loading...":<ReactMarkdown remarkPlugins={[remarkGfm]}>{response}</ReactMarkdown>}</div>}
