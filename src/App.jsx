import {useState,useEffect} from 'react';
import './App.css';
import PokemonCard from "./components/PokemonCard";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  const[names,setNames] = useState([]);

  const getPokemonNames = () =>{
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")
      .then(res => res.json())
      .then(res => {setNames(res.results)})
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <button className="btn btn-primary p-4 m-4" onClick={getPokemonNames}>Fetch Pokemon</button>
      {
        names.map((n,i) => {
          return <PokemonCard name={n} key={i}/>
        })
      }
    </div>
  );
}

export default App;
