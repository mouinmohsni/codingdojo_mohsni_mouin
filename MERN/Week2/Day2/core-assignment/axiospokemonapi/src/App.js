import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [pokemon , setPokemon] = useState([]);
  const fetchpokemon = () => {
    
  //   fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0s")
  //   .then(response => {
  //     return response.json();
  // }).then(response => {
  //     console.log(" test",response);
  //     setPokemon(response.results);
      
  // }).catch(err=>{
  //     console.log(err);
  // });

  axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0s').then(response=>{
    console.log(response.data.results);
    setPokemon(response.data.results);
    console.log(pokemon);
  })

  }
  return (
    <div className="App">
      <header className="App-header">
      <button onClick={fetchpokemon}>Fetch Pokemon </button>
      <div>
      {pokemon.map((p,i)=>{
        return(
          <ul key={i}>
        <li >{p.name}</li>
      </ul>
        )
      })}


      </div>
      </header>
    </div>
  );
}

export default App;
