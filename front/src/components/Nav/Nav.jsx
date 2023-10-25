/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

import styles from "./Nav.module.css"

const Nav = ({onSearch,personajeRandom})=>{

    return (
      // <div className={styles.navBar}>
      //   <div className={styles.contenedorUno}>
      //     <h1>Rick And Morty APP</h1>
      //     <div className={styles.navLinks}>
      //       <Link to="/home" className={styles.boton}>
      //         <button className={styles.boton}>Home</button>
      //       </Link>
      //       <Link to="/favorites">
      //         <button>Favorites</button>
      //       </Link>
      //       <Link to="/about">
      //         <button>About</button>
      //       </Link>
      //     </div>
      //   </div>
      //   <div className={styles.contenedorDos}>
      //     <SearchBar onSearch={onSearch} />
      //     <button onClick={personajeRandom}>
      //       Agrega un Personaje Aleatorio!
      //     </button>
      //   </div>
      // </div>
      <div className={styles.navBar}>
        <div className={styles.contenedorUno}>
          <h1>Rick And Morty - App</h1>
          <div className={styles.navLinks}>
            <NavLink
              to="home"
              className={({ isActive }) =>
                isActive ? styles.active : styles.inactive
              }>
              <button className={styles.btn1}>Home</button>
            </NavLink>
            <NavLink
              to="favorites"
              className={({ isActive }) =>
                isActive ? styles.active : styles.inactive
              }>
              <button className={styles.btn1}>Favorites</button>
            </NavLink>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? styles.active : styles.inactive
              }>
              <button className={styles.btn1}>About</button>
            </NavLink>
          </div>
        </div>
        <div className={styles.contenedorDos}>
          <SearchBar onSearch={onSearch} onClick={personajeRandom} />
          <button>Agrega un Personaje Aleatorio!</button>
        </div>
      </div>
    );
};

export default Nav;