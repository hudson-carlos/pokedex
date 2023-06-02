import { ListPokemons } from "./myTypes";


export async function getPokeAPI(): Promise<ListPokemons[]> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1281&offset=0`);
    const { results } = await res.json();
    
    return results;
}
