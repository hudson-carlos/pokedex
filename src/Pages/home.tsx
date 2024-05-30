import { useEffect, useRef, useContext } from "react";
import { MyContext } from "../Context/contextProvider";
import LoadingPokemons from "../Components/loadingPokemons";
import Header from "../Components/header";
import { getPokeAPI } from "../api";
import ListPokemons from "../Components/listPokemons";

export default () => {
  const {
    page,
    setPage,
    setListPokemons,
    listPokemons,
    loading,
    setLoading,
    setAllPokemons,
  } = useContext(MyContext)
  const loadMoreRef = useRef(null);

  useEffect (() => {
    getPokeAPI().then((results) => {
      setAllPokemons(results);
      setListPokemons(results);
      if (loading) setLoading(false);
    })
  }, []);


  // listagem por escrool
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
  //

  return (
    <main>
      <Header />
      <ListPokemons listPokemons = {listPokemons} page = {page} />   
      <LoadingPokemons loadMoreRef = {loadMoreRef} />
    </main>
  )
}