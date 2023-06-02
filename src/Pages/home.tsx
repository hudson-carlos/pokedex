import { useEffect, useRef, useContext } from "react";
import Card from "../Componets/card";
import { MyContext } from "../Context/contextProvider";
import LoadingPokemons from "../Componets/loadingPokemons";
import Header from "../Componets/header";
import { getPokeAPI } from "../api";
import { pagination } from "./myfunctions";

export default () => {
  const {
    page,
    setPage,
    listPokemons,
    setListPokemons,
    loading,
    setLoading,
    search,
    setAllPokemons,
    allPokemons,
  } = useContext(MyContext)
  const loadMoreRef = useRef(null);

  useEffect (() => {
    getPokeAPI().then((results) => {
      setAllPokemons(results);
      if (loading) setLoading(false);
    })
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entities) => {
      const target = entities[0];
      
      if (target.isIntersecting) setPage((old: number): number => old + 20);
      
    }, { root: null, rootMargin: "0px", threshold: 1});

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    return () => observer.disconnect(); 

  }, [loading]);


  useEffect(() => {
    const newList =  pagination(search, page, allPokemons);
    
    setListPokemons([...listPokemons, ...newList]);   
  }, [search, loading, page]);

  if (loading) {
    return <h1>Loading</h1>
  } 

  return (
    <main>
      <Header />
      {
      listPokemons.map(({url, name}, index) => {
        return <Card  linkPokemon={ url } key={`${name}_${index}`}/>
      })}
      <LoadingPokemons loadMoreRef = {loadMoreRef} />   
    </main>
  )
}