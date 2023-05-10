import { useEffect, useState, useRef } from "react";
import Card from "../Componets/card";

export default () => {
  const [pageStarting, setPageStarting] = useState<number>(0)  
  const [listPokemons, setListPokemons] = useState<any[]>([]);
  const loadMoreRef = useRef(null);


  useEffect (() => {

    getPokeAPI(pageStarting);
    setPageStarting(page => page + 20);

  }, []);

  async function getPokeAPI(page: number): Promise<any> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${page}`);
    const {results} = await res.json();
    
    setListPokemons((list) => [...list, ...results]);

  }
    
  return (
    <div>
      {
      listPokemons.map(({name}, index) => {
        const urlIMG: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png`;
        return <Card imgPokemon={urlIMG} namePokemon={name} key={`${name}_${index}`}/>
      })}
      <p
      onClick={async () => {
        await getPokeAPI(pageStarting);
        setPageStarting(page => page + 20);
      }}
      
      >Carregando mais pokemons...</p>   
    </div>
  )
}