import Card from 'react-bootstrap/Card';
import DataPokemon from "../Components/dataPokemon";
import Evolution from "../Components/evolution";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "../Components_css/Details.module.css";
import PokemonCarousels from '../Components/PokemonCarousels';

export default () => {
  const locaStoragelPokemon = JSON.parse(localStorage.getItem('pokeDetails') || "");
  
  return(    
    <div className={styled.details}>
      <div>
        {/* <Card style={{ width: '25rem'}}>
            <Card.Img variant="top" src={locaStoragelPokemon["sprites"]["other"]["official-artwork"]["front_default"]} />
        </Card>  */}
        <PokemonCarousels pokemon = {locaStoragelPokemon}/>
        <DataPokemon  pokemonDetails = {locaStoragelPokemon}/>
        <Evolution pokemonDetails={locaStoragelPokemon}/>
      </div>
    </div>
  );
}
