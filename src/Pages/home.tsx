import React from "react";
import { useEffect, useState } from "react";
import Card from "../Componets/card";

export default () => {
  
  useEffect (() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0").
    then(res => res.json()).
    then(res => setListPokemons(lsit => [...lsit, ...res.results]));

  }, []);

  const [listPokemons, setListPokemons] = useState<any[]>([]);

  console.log(listPokemons);
    
  return (<div>{listPokemons.map(({name}, index) => {
      const urlIMG: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png`;
      return <Card imgPokemon={urlIMG} namePokemon={name}/>
    }    
  )}   
  </div>)
}