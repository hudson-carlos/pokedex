import { ListPokemons } from "./myTypes";
import 'bootstrap-icons/font/bootstrap-icons.css';


export async function getPokeAPI(): Promise<ListPokemons[]> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1281&offset=0`);
    const { results } = await res.json();
    
    return results;
}

export async function getPokemon(namePokemon: string): Promise<any> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}/`);
    const { results } = await res.json();
    
    return results;
}

export async function getSpecies(idSpecies: number): Promise<ListPokemons[]> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${idSpecies}/`);
    const { results } = await res.json();
    
    return results;
}

