import "./citas.css";
import { useEffect, useState } from "react";

export default function Citas(){
    const [quote, setQuote] = useState(null);
    useEffect(function getQuote(){
        fetch('https://www.officeapi.dev/api/quotes/random')
            .then(response => response.json())
            .then(data=>setQuote(data.data))
    }, [])
    if (!quote){
        return null
    }
    return (
    <div>
        {quote?.content}
    </div>
    )
}