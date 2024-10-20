import DataPokemon from "../Components/dataPokemon";
import Evolution from "../Components/evolution";
import styled from "../Components_css/Details.module.css";
import PokemonCarousels from '../Components/pokemonCarousels'; 
import NavPage from '../Components/navPage';
import { useContext, useEffect, useState } from 'react';
import { MyContext } from "../Context/contextProvider";

export default () => {
  const { setPokemonDetails, pokemonDetails } = useContext(MyContext);

  useEffect(() => {
    locaStoragelPokemon();
  },[]);

  function locaStoragelPokemon() {
    let data = localStorage.getItem('pokeDetails');
    data = data ? JSON.parse(data) : null;
    setPokemonDetails(data);
  } 

  if (!pokemonDetails.name) return null;

  return(    
    <div className={styled.details}>
        <NavPage />
      <div className={styled.detailsDiv}>
      <h1 className={styled.mobileOn} >{pokemonDetails.name}</h1 >
        <PokemonCarousels />
        <div className={styled.detailsDiv2}>
          <h1 className={styled.mobileOff} >{pokemonDetails.name}</h1>
          <DataPokemon />
        </div>
      </div>
      <Evolution />
    </div>
  );
}
