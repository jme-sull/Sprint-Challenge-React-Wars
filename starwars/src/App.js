import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Character from './components/Character';

const App = () => {

 const [ characters, setCharacters ] = useState ([])

 useEffect(() => { 
  axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(res => {
      console.log('this should only render once!')
      console.log(res.data.results)
      setCharacters(res.data.results)
    })
    .catch(err => {
      console.log('nope')
      debugger
    })
  }, [])
  



  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      { characters.map(character => {
        return <Character key={character.id} info = {character} />
      })
    }

    </div>
  );
}

export default App;
