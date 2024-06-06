import { Carousel } from 'react-bootstrap';
import styled from "../Components_css/Details.module.css";
import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../Context/contextProvider';


export default () => {
  const { pokemonDetails } = useContext(MyContext);
  const [sprites, setSprites] = useState<any>([]);
  
  useEffect(() => {
    const images =  Object.values(pokemonDetails["sprites"]).filter((sprite: any) => typeof sprite == 'string');
    const imagensDream = Object.values(pokemonDetails["sprites"]["other"]["dream_world"])
      .filter((sprite: any) => typeof sprite == 'string');
    const imagenshome = Object.values(pokemonDetails["sprites"]["other"]["home"])
      .filter((sprite: any) => typeof sprite == 'string');
    const imagensArt = Object.values(pokemonDetails["sprites"]["other"]["official-artwork"])
      .filter((sprite: any) => typeof sprite == 'string');  

    setSprites(() => [...imagensArt, ...imagensDream, ...imagenshome, ...images]);    
  }, [pokemonDetails])
  
  return (
    <div className={styled.carouselsDiv}>
      <h1>{pokemonDetails.name}</h1 >
      <Carousel className={styled.carousels}>
        {sprites.map((sprite: any) => (
            <Carousel.Item key={sprite}>
              <img src={`${sprite}`} className={styled.sprints}/>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
