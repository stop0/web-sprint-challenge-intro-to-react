import React, { useEffect, useState } from 'react';
import './App.css';
import Character from "./components/Character"
import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [starwars, setStarWars] = useState([])

  useEffect(() =>{
    axios
      .get('https://swapi.py4e.com/api/people')
      .then(resp =>{
        console.log(resp.data.results)
        setStarWars(resp.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  },[])


  return (
    <div className="App">
      <h1>WANTED</h1>
      <h1>DEAD OR ALIVE</h1>
      {starwars.map((name) =>
      <Character starwars={name} className="Header" />
      )}
    </div>
  );
}

export default App;
