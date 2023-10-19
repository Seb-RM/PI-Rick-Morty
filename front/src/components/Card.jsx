/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const  Card =({id,name,status,species,gender,origin,image,onClose})=> {
    console.log(id);
    return (
        <div>
            <button onClick={onClose}>X</button>
            <Link to={`/detail/${id}`}><h2>Nombre: {name} </h2></Link>
            <h2>Status: {status}</h2>
            <h2>Especie: {species}</h2>
            <h2>Género: {gender}</h2>
            <h2>Origen: {origin}</h2>
            <img src={image} alt='`${name}`'/>
        </div>
    )
}

export default Card;