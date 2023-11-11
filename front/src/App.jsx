// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Form from "./components/Form/Form";
import Nav from "./components/Nav/Nav";
import About from "./components/About";
import Detail from "./components/Detail/Detail";
import Cards from "./components/Cards/Cards";
import Favorites from "./components/Favorites/Favorites";

import "./App.css";

//import  characters from './data.js';

// eslint-disable-next-line no-unused-vars
//const EMAIL = "ejemplo@gmail.com";
// eslint-disable-next-line no-unused-vars
//const PASSWORD = "Password1";

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);

  let clase = 'App';

  if(pathname=== '/home') clase = 'App home';

  if(pathname==='/favorites') clase = 'App favoritos';

  if (pathname === "/about") clase = "App about";

const  login= async (userData)=> {
  // const { email, password } = userData;
  // const URL = "http://localhost:3001/rickandmorty/login/";
  // axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
  //   const { access } = data;
  //   setAccess(data);
  //   access && navigate("/home");
  // });
  try {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    const {data} = await axios(URL + `?email=${email}&password=${password}`)

    const { access } = data;

    setAccess(access);

    access && navigate("/home");

  } catch (error) {
    console.log(error.message);
  }
}



  useEffect(() => {
    //!access && navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
     !access && navigate("/home");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access]);

  const [characterSet, setCharacterSet] = useState(new Set());

    const personajeRandom = () => {
      const randomId = Math.floor(Math.random() * 826) + 1;
      onSearch(randomId);
    };
    
  //(...characters,id) también se puede usar de esta forma
  const onSearch = async (id) => {
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
    console.log(characterSet);
        if (characterSet.has(id)) {

          window.alert(
            "¡Este personaje ya se encuentra seleccionado, intenta otra vez!"
          );
        } else {
          try {
            const { data } = await axios(
              `http://localhost:3001/rickandmorty/character/${id}`
            );

            if (data.name) {
              setCharacters((oldChars) => [...oldChars, data]);
              setCharacterSet(new Set([...characterSet, id]));
            } else {
              window.alert("¡No hay personajes con este ID!");
            }
          } catch (error) {
            window.alert(error);
          }
        }
    
    // if (characterSet.has(id)) {
    //   window.alert(
    //     "¡Este personaje ya se encuentra seleccionado, intenta otra vez!"
    //   );
    // } else {
    //   axios(
    //     //`https://rym2.up.railway.app/api/character/${id}?key=pi-seb-rm`
    //     `http://localhost:3001/rickandmorty/character/${id}`
    //   ).then(({ data }) => {
    //     if (data.name) {
    //       setCharacters((oldChars) => [...oldChars, data]);
    //       setCharacterSet(new Set([...characterSet, id]));
    //     } else {
    //       window.alert("¡No hay personajes con este ID!");
    //     }
    //   });
    // }
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => character.id !== id) //Number o parseInt por que hay que hacer la comparacion con un numero
    );
  };



  return (
    <div className={clase} >
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
