import { useState } from 'react'
import './App.css'
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
//import  characters from './data.js';

function App() {
  
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
      fetch(`https://rym2.up.railway.app/api/character/${id}?key=pi-seb-rm`)
      .then((response)=> response.json())
      .then( (data ) => {
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
        characters.filter(character => character.id !== id)
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
