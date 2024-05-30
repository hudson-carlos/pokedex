import { useEffect, useState } from "react"
import Card from "./card";
import style from "../Components_css/Evolution.module.css";

export default ({pokemonDetails}: any) => {
  const [listEvolutions, setListEvolutions] = useState<any>([]);
  const {species} = pokemonDetails;

  useEffect(() => {
    fetch(species.url).then((specie) => specie.json()).then((specie) => {
        const {evolution_chain} = specie;
        fetch(evolution_chain.url).then((evolutionChain) => evolutionChain.json()).then((evolutionChain) => {

          searchEvolutions(evolutionChain['chain']['evolves_to'], [evolutionChain['chain']['species']['name']]);
        });    
      });
  }, []);

  function searchEvolutions(arr: any, list: any[]) {
    let next = arr;

    while (next.length > 0) {
      list = [...list, next[0].species.name];
      next = next[0]['evolves_to'];   
    }
     
    
    setListEvolutions(() => list);
  }
  
  function evolutions() {
    if (listEvolutions[0]) return <div className={style.evolution_cards}>
      {
        listEvolutions.map((name:string, index:number) =>
          <Card  
            linkPokemon={`https://pokeapi.co/api/v2/pokemon/${name}/`}
            widthCard='10rem'
            key={`${index}`}
          />  
        )               
      }
    </div>
  }
    
  return (
    <div>
      <h3>Evolution</h3>
      {evolutions()}
    </div>
  );
}