import { useEffect, useState } from "react"
import Card from "./card";

export default ({pokemonDetails}: any) => {
  const [evolution, setEvolution] = useState<any>({})
  const {species} = pokemonDetails;

  useEffect(() => {
    fetch(species.url).then((specie) => specie.json()).then((specie) => {
        const {evolution_chain} = specie;
        fetch(evolution_chain.url).then((evolutionChain) => evolutionChain.json()).then((evolutionChain) => {
          setEvolution(evolutionChain['chain']);
        });    
      });
    }, []);
    
    function nextEvolution(next: any, list: any[]) {
      if (next?.length > 0) {
        list.push(next[0]?.species?.name)
        nextEvolution(next[0]?.evolves_to, list);
      }     
      
      if (list[0]) return list.map((name, index) =>
      <div onClick={() => window.location.reload()}>
        <Card  
            linkPokemon={`https://pokeapi.co/api/v2/pokemon/${name}/`}
            widthCard='10rem'
            key={`${index}`}
          />
      </div>  
      );      
    }
    
  return (
    <>
      {nextEvolution(evolution?.evolves_to, [evolution.species?.name])}
    </>
  );
}