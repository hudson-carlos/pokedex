import { useEffect, useState, useRef } from "react";
import Card from "../Componets/card";
import LoadingPokemons from "../Componets/loadingPokemons";

export default () => {
  const [page, setPage] = useState<number>(0);  
  const [listPokemons, setListPokemons] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const loadMoreRef = useRef(null);

  useEffect (() => {
    getPokeAPI(page);
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entities) => {
      const target = entities[0];
      
      if (target.isIntersecting) setPage((old: number) => old + 20);
      
    }, { root: null, rootMargin: "0px", threshold: 1});
    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    return () => observer.disconnect(); 

  }, [loading]);

  async function getPokeAPI(page: number): Promise<any> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${page}`);
    const {results} = await res.json();
    
    setListPokemons(old =>  [...old, ...results]);
    if (loading) setLoading(false);
  }

  if (loading) return <h1>Loading</h1> 
  return (
    <div>
      {
      listPokemons.map(({name}, index) => {
        const urlIMG: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png`;
        return <Card imgPokemon={urlIMG} namePokemon={name} key={`${name}_${index}`}/>
      })}
      <LoadingPokemons loadMoreRef = {loadMoreRef} />   
    </div>
  )
}