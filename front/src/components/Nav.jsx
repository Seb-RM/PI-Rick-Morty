/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const Nav = ({onSearch,personajeRandom})=>{
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <br />
            <SearchBar onSearch={onSearch} />
            <button onClick={personajeRandom}>Agrega un Personaje Aleatorio</button>
        </div>
    );
};

export default Nav;