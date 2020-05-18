import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import { CardGroup} from 'reactstrap';

const App = () => {

 const [ characters, setCharacters ] = useState ([])
 const [ searchTerm, setSearchTerm ] = useState('')

 useEffect(() => { 
  axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(res => {
      console.log('this should only render once!')
      console.log(res.data.results)
      setCharacters(res.data.results)
    })
    .catch(err => {
      console.log('nope')
    })
  }, [])

    
    
  

  return (
    <div className="App">
      <h1 className="Header">Rick and Morty Characters</h1>

      <form>
        <input 
        onChange= {event =>
          setSearchTerm(event.target.value)
        }
        type='text'
        placeholder='Search'
        id='searchInput'
        />
      </form>
      
    <CardGroup inverse style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}> 
        { characters.map(character => {
          if (character.name.toLowerCase().includes(searchTerm.toLowerCase()))
        return <Character key={character.id} info = {character} />
      })
        }
    </CardGroup>
      

    </div>
  );
}

export default App;
