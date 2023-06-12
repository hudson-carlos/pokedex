import { useEffect, useRef, useContext } from "react";
import Card from "../Componets/card";
import { MyContext } from "../Context/contextProvider";
import LoadingPokemons from "../Componets/loadingPokemons";
import Header from "../Componets/header";
import { getPokeAPI } from "../api";

export default () => {
  const {
    page,
    setPage,
    setListPokemons,
    listPokemons,
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
      setListPokemons(results);
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

  }, [loading, listPokemons]);

  if (loading) {
    return <h1>Loading</h1>
  } 

  return (
    <main>
      <Header />
      {
      listPokemons.map(({url, name}, index, arr) => {
        if (index <= (page - 1)) return <Card  linkPokemon={ url } key={`${name}_${index}`}/>
      })}
      <LoadingPokemons loadMoreRef = {loadMoreRef} />   

    </main>
  )
}