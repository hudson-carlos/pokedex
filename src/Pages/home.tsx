import { useEffect, useState, useRef } from "react";
import Card from "../Componets/card";

export default () => {
  const [page, setPage] = useState<number>(0);  
  const [listPokemons, setListPokemons] = useState<any[]>([]);
  const loadMoreRef = useRef(null);

  useEffect (() => {
    getPokeAPI(page);
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entities) => {
      const target = entities[0];
      
      if (target.isIntersecting && listPokemons.length > 0) setPage((old: number) => old + 20);
      
    });
    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    return () => observer.disconnect();

  }, []);

  async function getPokeAPI(page: number): Promise<any> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${page}`);
    const {results} = await res.json();
    
    setListPokemons(old =>  [...old, ...results]);
  }

  function loadingNewList() {
    return (<p
      onClick={() => {
        
        console.log(listPokemons.length);
        
      }} 
      ref={loadMoreRef}>Carregando mais pokemons...</p>)
    }

  return (
    <div>
      {
      listPokemons.map(({name}, index) => {
        const urlIMG: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png`;
        return <Card imgPokemon={urlIMG} namePokemon={name} key={`${name}_${index}`}/>
      })}
      {loadingNewList()}   
    </div>
  )
}