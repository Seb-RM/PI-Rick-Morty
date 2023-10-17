/* eslint-disable react/prop-types */
import SearchBar from "./SearchBar";

const Nav = ({onSearch,personajeRandom})=>{
    return (
        <div>
            <SearchBar onSearch={onSearch} />
            <button onClick={personajeRandom}>Agrega un Personaje Aleatorio</button>
        </div>
    );
};

export default Nav;