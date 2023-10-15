/* eslint-disable react/prop-types */
const  Card =({name,status,species,gender,origin,image,onClose})=> {
    return (
        <div>
            <button onClick={onClose}>X</button>
            <h2>Nombre: {name} </h2>
            <h2>Status: {status}</h2>
            <h2>Especie: {species}</h2>
            <h2>Género: {gender}</h2>
            <h2>Origen: {origin}</h2>
            <img src={image} alt='`${name}`'/>
        </div>
    )
}

export default Card;