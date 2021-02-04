import React, { useEffect, useState } from 'react';
import './App.css';
import Character from "./components/Character"
import axios from "axios";
import Styled from 'styled-components'






const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [rickmortyObj, setRickMortyObj] = useState([])

  useEffect(() =>{
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then(resp =>{
        console.log(resp.data.results)
        setRickMortyObj(resp.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  },[])


  return (
    <div className="App">
      <h1>WANTED</h1>
      <h1>From the Federation of Ricks</h1>
      {rickmortyObj.map((Obj) =>
      <Character rickmortyObj={Obj} className="Header" />
      )}
    </div>
  );
}

export default App;
