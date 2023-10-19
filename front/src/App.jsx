// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import axios from 'axios';
import About from './components/About';
import Detail from './components/Detail';
//import  characters from './data.js';

function App() {
  
  const [characters, setCharacters] = useState([]);
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
      if(characterSet.has(id)){
          window.alert('¡Este personaje ya se encuentra seleccionado, intenta otra vez!');
      }else {
          axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-seb-rm`).then(
        ({ data }) => {
          if (data.name) {
              setCharacters((oldChars) => [...oldChars, data]);
              setCharacterSet(new Set([...characterSet, id]));
          } else {
              window.alert('¡No hay personajes con este ID!');
          }
        });
      } 
  };

  const personajeRandom = () => {
      const randomId = Math.floor(Math.random() * 826) + 1;
      onSearch(randomId);
  };

  const onClose = (id) => {
      setCharacters(
        characters.filter(character => character.id !== Number(id))//Number o parseInt por que hay que hacer la comparacion con un numero
      )
  }
return (
        <div className='App' style={{ padding:'25px'}}>
          <Nav onSearch={onSearch} personajeRandom={personajeRandom}/>
          <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail characters={characters}/>}/>
          </Routes>
          
            
            
        </div> 
  );
}

export default App;
