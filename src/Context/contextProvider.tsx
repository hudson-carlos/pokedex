import { FC, createContext, useState } from "react";
import { typeDefaultValue, contextProps, ListPokemons } from "../myTypes";

const defaultValue = {
  listPokemons: [], 
  setListPokemons: () => {},
  page: 20,
  setPage: () => {},
  loading: true, 
  setLoading: () => {},
  search: "",
  setSearch: () => {},
  allPokemons: [], 
  setAllPokemons: () => {},
}


export const MyContext = createContext<typeDefaultValue>(defaultValue);

export const ContextProvider: FC<contextProps> = ({ children }) => {
  const [listPokemons, setListPokemons] = useState<ListPokemons[] | []>(defaultValue.listPokemons);
  const [page, setPage] = useState<number>(defaultValue.page);
  const [allPokemons, setAllPokemons] = useState<ListPokemons[] | []>(defaultValue.listPokemons);
  const [loading, setLoading] = useState<boolean>(defaultValue.loading);
  const [search, setSearch] = useState<string>(defaultValue.search);
  
  return (
    <MyContext.Provider value={{
      listPokemons,
      setListPokemons,
      page,
      setPage,
      loading,
      setLoading,
      search,
      setSearch,
      allPokemons,
      setAllPokemons
    }}>
      {children}
    </MyContext.Provider>
  );  
}
