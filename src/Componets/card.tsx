import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

interface linkPokemon {
  linkPokemon: string;
}

export default ({linkPokemon}: linkPokemon) => {
  const [name, setName] = useState<string>("");
  const [sprite, setSprite] = useState<string>("");

  useEffect (() => {
    fetch(linkPokemon).then((pokemon) => pokemon.json()).then((pokemon) => {
      setName(pokemon.name)
      setSprite(pokemon.sprites.other["official-artwork"]["front_default"]);       
    });
    
  }, []);
 
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={sprite} />
      <Card.Body style={{ 
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Card.Text><p>{name}</p> </Card.Text>
      </Card.Body>
    </Card>    
 )
}
