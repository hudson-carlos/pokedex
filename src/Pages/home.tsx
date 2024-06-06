import { useEffect, useRef, useContext } from "react";
import { MyContext } from "../Context/contextProvider";
import LoadingPokemons from "../Components/loadingPokemons";
import Header from "../Components/header";
import { getPokeAPI } from "../api";
import ListPokemons from "../Components/listPokemons";
import styled from "../Components_css/Homer.module.css";

export default () => {
  const {
    page,
    setPage,
    listPokemons,
    allPokemons
  } = useContext(MyContext)
  const loadMoreRef = useRef(null);


  // listagem por escrool
  useEffect(() => {
    const observer = new IntersectionObserver((entities) => {
      const target = entities[0];
      
      if (target.isIntersecting) setPage((old: number): number => old + 20);
      
    }, { root: null, rootMargin: "0px", threshold: 1});

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    return () => observer.disconnect(); 

  }, [listPokemons]);

  if (!allPokemons[0]) {
    return <h1>Loading Pokemons</h1>
  } 
  //

  return (
    <main className={styled.home}>
      <Header />
      <ListPokemons />
      <LoadingPokemons loadMoreRef = {loadMoreRef} />
    </main>
  )
}