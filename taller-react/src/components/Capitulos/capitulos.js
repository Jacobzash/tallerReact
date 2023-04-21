import "./capitulos.css";
import { useEffect, useState } from "react";
import {ReactComponent as Loading} from "../assets/loading.svg"

export default function Capitulos(){
    const [episode, setEpisode] = useState(null);
    const [shouldRefresh, setShouldRefresh] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(function getEpisode(){
        if(!shouldRefresh){
            return
        }
        setIsLoading(true);
        fetch('https://www.officeapi.dev/api/episodes/random')
            .then(response => response.json())
            .then(data=>{
                setShouldRefresh(false)
                setEpisode(data.data)
                setIsLoading(false)
            })
    }, [shouldRefresh])
    function onRefresh() {
        setShouldRefresh(true);
    }
    if (!isLoading){
        return
    }
    return (
    <div>
        <button onClick={onRefresh}>Refresh</button>
        <h1>{episode.title}</h1>
        <h2>{episode.description}</h2>
    </div>
    )
}