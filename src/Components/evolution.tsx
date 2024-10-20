import { useContext, useEffect, useState } from "react"
import Card from "./card";
import style from "../Components_css/Evolution.module.css";
import { MyContext } from "../Context/contextProvider";

export default () => {
  const { pokemonDetails } = useContext(MyContext);
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
    if (listEvolutions.length === 1) return <h3>Esse pokemon não tem Evolução</h3>

    return <div className={style.evolution}>
      {
        listEvolutions.map((name:string, index:number) => {
          if (index === listEvolutions.length - 1) {          
            return (
              <Card  
                linkPokemon={`https://pokeapi.co/api/v2/pokemon/${name}/`}
                widthCard='10rem'
                key={index}
              />
          )} 
          return (
           <>
            <Card  
              linkPokemon={`https://pokeapi.co/api/v2/pokemon/${name}/`}
              widthCard='10rem'
              key={`${index}`}
            />
            <i className={`bi bi-arrow-right-circle ${style.mobileOff}`} style={{ fontSize: "3rem", color: "rgb(195, 235, 235)" }}></i>
            <i className={`bi bi-arrow-down-circle ${style.mobileOn}`} style={{ fontSize: "3rem", color: "rgb(195, 235, 235)" }}></i>   
            </>
          )
        })               
      }
    </div>
  }
    
  return (
    <div className={style.evolutionDiv}>
      <h1>Evolutions</h1>
      {evolutions()}
    </div>
  );
}