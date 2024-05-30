import { Carousel } from 'react-bootstrap';
import styled from "../Components_css/Details.module.css";
import { useEffect, useState } from 'react';
const CarouselComponent = ({pokemon}: any) => {
  const [sprites, setSprites] = useState<any>([]);
  
  useEffect(() => {
    const images =  Object.values(pokemon["sprites"]).filter((sprite: any) => typeof sprite == 'string');
    const imagensDream = Object.values(pokemon["sprites"]["other"]["dream_world"])
      .filter((sprite: any) => typeof sprite == 'string');
    const imagenshome = Object.values(pokemon["sprites"]["other"]["home"])
      .filter((sprite: any) => typeof sprite == 'string');
    const imagensArt = Object.values(pokemon["sprites"]["other"]["official-artwork"])
      .filter((sprite: any) => typeof sprite == 'string');  

    setSprites((olds: any) => [...imagensArt, ...imagensDream, ...imagenshome, ...images]);    
  }, [])
  
  const carouselStyle = {
    width: '300px',
    heigt: '300px'
  };

  const imageStyle = {
    width: '100%',
    heigt: '100%'
  };
  sprites.forEach((s: any) => console.log(s));
  
  return (
    <div style={carouselStyle}>
      <Carousel>
        {sprites.map((sprite: any) => (
            <Carousel.Item>
              <img
                src={`${sprite}`}
                style={imageStyle}
              />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
