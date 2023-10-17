import { useState } from 'react'
import './App.css'
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import axios from 'axios';
//import  characters from './data.js';

function App() {
  
  const [characters, setCharacters] = useState([]);
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
      axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-seb-rm`).then(
      ({ data }) => {
        console.log(data);
        if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
        } else {
            window.alert('¡No hay personajes con este ID!');
        }
      }
  );
  };
console.log(characters);
  const onClose = (id) => {
      setCharacters(
        characters.filter(character => character.id !== Number(id))//Number o parseInt por que hay que hacer la comparacion con un numero
      )
  }
return (
      <div className='App' style={{ padding:'25px'}}>
        <Nav onSearch={onSearch}/>
        <div>
          <Cards characters={characters} onClose={onClose} />
        </div>
      </div>
  );
}

export default App;
