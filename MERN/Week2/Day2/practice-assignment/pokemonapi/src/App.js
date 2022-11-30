import React, { useState } from 'react';

import './App.css';

function App() {

  const [pokemon , setPokemon] = useState([]);

  const fetchpokemon = () => {
    
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0s")
    .then(response => {
      return response.json();
  }).then(response => {
      console.log(" test",response);
      setPokemon(response.results);
      
  }).catch(err=>{
      console.log(err);
  });

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
