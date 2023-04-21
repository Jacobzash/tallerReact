import "./personajes.css";
import { useEffect, useState } from "react";

export default function Personajes(){
    const [character, setCharacter, setSetCharacter] = useState(null);
    useEffect(function getCharacters(){
        fetch('https://www.officeapi.dev/api/characters/random')
            .then(response => response.json())
            .then(data=>setCharacter(data.data))
    }, [])
    if (!character){
        return null
    }
    return (
    <div>
        {character.firstName} {character.lastName}
    </div>
    )
}