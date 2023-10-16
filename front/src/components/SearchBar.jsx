/* eslint-disable react/prop-types */
import { useState } from "react";

export default function SearchBar({onSearch}) {
    console.log(onSearch)
    const [id, setId] = useState('');

    const handleChange = (event) => {
        setId(event.target.value);
    };

    return (
        <div>
            <input type='search' value={id} onChange={handleChange}/>
            <button onClick={()=>onSearch(id)}>Agregar</button>
        </div>
    );
}