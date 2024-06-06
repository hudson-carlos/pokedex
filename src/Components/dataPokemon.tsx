import { useContext, useRef, useState } from 'react';
import styled from '../Components_css/DataPokemon.module.css';
import { MyContext } from '../Context/contextProvider';

export default () => {
  const { pokemonDetails } = useContext(MyContext);

  const abilities = pokemonDetails.abilities;
  const types = pokemonDetails.types;
  const { latest } = pokemonDetails.cries
  const audioRef = useRef<HTMLAudioElement>(null);
  
  function PlaySound (){
    if (audioRef.current) return audioRef.current.play();
  }


  return (
    <div className={styled.data}>
      <i onClick={PlaySound} className="bi bi-volume-up" style={{ fontSize: "2rem", }}>
        <audio ref={audioRef} src={latest} />
      </i>
      <div>
        <h5>Weight</h5>
        <h6>{pokemonDetails.weight / 10} KG</h6>
      </div>
      <div>
        <h5>Height</h5>
        <h6>{pokemonDetails.height / 10} M KG</h6>
      </div>
      <div>
        <h5>Abilities</h5>
        {abilities.map(({ability}: any) => <h6 key={ability.name} >{ability.name}</h6>)}
      </div>
      <div>
        <h5>Types</h5>
        {types.map(({type}: any) => <h6 key={type.name}>{type.name}</h6>)}
      </div>
    </div>
  ); 
}
