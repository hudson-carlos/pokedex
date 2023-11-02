import { useContext, useEffect, useState } from "react"
import { MyContext } from "../Context/contextProvider";

export default () => {
  const [evolution, setEvolution] = useState<any>({})
  const {pokemonDetails} = useContext(MyContext);
  const {species} = pokemonDetails;

  useEffect(() => {
    fetch(species.url).then((specie) => specie.json()).then((specie) => {
        const {evolution_chain} = specie;
        fetch(evolution_chain.url).then((evolutionChain) => evolutionChain.json()).then((evolutionChain) => {
          setEvolution(evolutionChain.chain.evolves_to);
        });    
      });
    }, []);
    
  return (
    <>
      <h1>hudson</h1>
    </>
  );
}