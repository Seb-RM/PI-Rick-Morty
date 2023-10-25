// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Form from "./components/Form/Form";
import Nav from "./components/Nav.jsx";
import About from "./components/About";
import Detail from "./components/Detail";
import Cards from "./components/Cards.jsx";
import Favorites from "./components/Favorites";

import "./App.css";
//import  characters from './data.js';

const EMAIL = "ejemplo@gmail.com";
const PASSWORD = "Password1";

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access]);

  const [characterSet, setCharacterSet] = useState(new Set());
  //(...characters,id) tambien se puede usar de esta forma
  const onSearch = (id) => {
    // fetch(`https://rym2.up.railway.app/api/character/${id}?key=pi-seb-rm`)
    // .then((response)=> response.json())
    // .then( (data ) => {
    //     if (data.name) {
    //         setCharacters((oldChars) => [...oldChars, data]);
    //     } else {
    //         window.alert('¡No hay personajes con este ID!');
    //     }
    //   }
    // );
    if (characterSet.has(id)) {
      window.alert(
        "¡Este personaje ya se encuentra seleccionado, intenta otra vez!"
      );
    } else {
      axios(
        `https://rym2.up.railway.app/api/character/${id}?key=pi-seb-rm`
      ).then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
          setCharacterSet(new Set([...characterSet, id]));
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      });
    }
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => character.id !== Number(id)) //Number o parseInt por que hay que hacer la comparacion con un numero
    );
  };

  const personajeRandom = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;
    onSearch(randomId);
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      {/* {location.pathname !== "/" && <Nav onSearch={onSearch} personajeRandom={personajeRandom}/>} */}
      {pathname !== "/" && (
        <Nav onSearch={onSearch} personajeRandom={personajeRandom} />
      )}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/detail/:id"
          element={<Detail characters={characters} />}
        />
      </Routes>
    </div>
  );
}

export default App;
