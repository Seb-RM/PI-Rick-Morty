import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail= ()=>{
    const {id} = useParams();
    const [character, setCharacter] = useState({});
    console.log(id);

    useEffect(() => {
        axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-seb-rm`).then(
            ({ data }) => {
                if (data.name) {
                    setCharacter(data);
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            }
        );
        return setCharacter({});
    }, [id]);
    //se agrega un condicional"shorcircuit" para contorlar la respuesta del servidor
    //que es asincrona por eso se usa el &&, para el renderizado condicional, el signo ? se usa para enrutar al elemento correcto
    return (
        <div>
            <img src={character.image} alt={character.name} />
            <h1>Name: {character.name && character.name}</h1>
            <h1>Status: {character.status}</h1>
            <h1>Origin: {character.origin?.name && character.origin?.name}</h1>
        </div>
    )
};

export default Detail;