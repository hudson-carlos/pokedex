import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import DataPokemon from "../Components/dataPokemon";
import Evolution from "../Components/evolution";
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => {
  const localPokemon = JSON.parse(localStorage.getItem('pokeDetails') || "");
  
  return(    
    <>
      <h1>{localPokemon.name}</h1>
      <Card style={{ width: '30rem'}}>
          <Card.Img variant="top" src={localPokemon["sprites"]["other"]["official-artwork"]["front_default"]} />
      </Card> 
      <DataPokemon  pokemonDetails = {localPokemon}/>
      <Evolution pokemonDetails={localPokemon}/>
    </>
  );
}

  // if (pokemonDetails) return (
    
  // ); 
  // else return <h1>Loading</h1>;

