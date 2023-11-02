import { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { MyContext } from '../Context/contextProvider';

interface linkPokemon {
  linkPokemon: string;
}

export default ({linkPokemon}: linkPokemon) => {
  const [sprite, setSprite] = useState<string>("");
  const [pokemon, setPokemon] = useState<any>({});
  const [gif, setGif] = useState<string>("");

  const { setPokemonDetails } = useContext(MyContext);

  useEffect (() => {
    fetch(linkPokemon).then((pokemon) => pokemon.json()).then((pokemon) => {
      setSprite(pokemon.sprites.other["official-artwork"]["front_default"]);
      setPokemon(pokemon);
      setGif(pokemon.sprites.versions["generation-v"]["black-white"]["animated"]["front_default"]);
    });
    
  }, []);
 
  return (
    <Card 
      style={{ width: '18rem'}}
      onClick={() => localStorage.setItem('pokeDetails',  JSON.stringify(pokemon))}
    >
      <Link to={`/details/${pokemon.name}`}>
        <Card.Img variant="top" src={sprite} />
        <Card.Body style={{ 
          display: 'flex',
          justifyContent: 'center',
        }}>
          <Card.Text>{pokemon.name}</Card.Text>
            <Image src={gif} rounded />
        </Card.Body>
      </Link>
    </Card>    
 );
}
