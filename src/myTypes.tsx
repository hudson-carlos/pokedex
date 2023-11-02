import { Dispatch, ReactNode, SetStateAction } from "react";

export type contextProps = {
    children: ReactNode;
  };
  
export type ListPokemons = {
name: string;
url: string;
}

export type typeDefaultValue = {
  listPokemons: ListPokemons[]; 
  setListPokemons: Dispatch<SetStateAction<ListPokemons[]>>;  
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  allPokemons: ListPokemons[]; 
  setAllPokemons: Dispatch<SetStateAction<ListPokemons[]>>;
  pokemonDetails: any;
  setPokemonDetails: Dispatch<SetStateAction<any>>;
}