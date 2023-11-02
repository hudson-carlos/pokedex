import { useContext, useEffect, useState } from "react"
import { MyContext } from "../Context/contextProvider";
import Card from "../Componets/card";

export default ({pokemonDetails}: any) => {
  const [evolution, setEvolution] = useState<any>({})
  // const {pokemonDetails} = useContext(MyContext);
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
      <Card  
          linkPokemon={`https://pokeapi.co/api/v2/pokemon/${name}/`}
          widthCard='10rem'
          key={`${index}`}
        />
      );      
    }
    
  return (
    <>
      {nextEvolution(evolution?.evolves_to, [evolution.species?.name])}
    </>
  );
}