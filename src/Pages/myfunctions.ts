import { ListPokemons } from "../myTypes";
 
export function pagination(search: string, page: number, listPokemons: ListPokemons[]): ListPokemons[] {
  let newListPokemons;
  
  if (search === "") { 
    newListPokemons = listPokemons.filter((_, index) => index >= (page - 20) && index <= (page - 1));
  }
  else {
    newListPokemons = listPokemons.filter(({name}) =>  name.includes(search))
      .filter((_, index) => index >= (page - 20) && index <= (page - 1));
  }
  return newListPokemons;
}
