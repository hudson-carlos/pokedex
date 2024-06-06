import { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../Components_css/Card.module.css";
import { Button, Figure, Image } from 'react-bootstrap';
import { MyContext } from '../Context/contextProvider';

interface linkPokemon {
  linkPokemon: string;
  widthCard: string;
}

export default ({linkPokemon, widthCard}: linkPokemon) => {
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
    <div className={styles.cardAll}>
      <div>
        <Link to={`/details/${pokemon.name}`}>
          <Button 
            variant="outline-danger"
            onClick={() =>{
              localStorage.setItem('pokeDetails',  JSON.stringify(pokemon))
              setPokemonDetails(pokemon)
            }}
          >
            <Figure>
              <Figure.Image
                style={{ width: `${widthCard}`}}
                src={sprite}
              />
            </Figure>
          </Button>
        </Link>
        <div className={styles.name}>
          <h5>{pokemon.name}</h5>
          <img src={gif} />
        </div>
      </div>
    </div>
 );
}
