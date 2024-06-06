import Card from "./card"
import style from "../Components_css/ListPokemons.module.css";
import { useContext, useState } from "react";
import { MyContext } from "../Context/contextProvider";
import { Spinner } from "react-bootstrap";

export default () => {
 const [loading, setLoading] = useState<boolean>(true);
  const {
    listPokemons,
    page
  } = useContext(MyContext)

  // if(loading) {
  //   return (
  //     <div>
  //       <Spinner animation="grow" variant="primary" />
  //       <Spinner animation="grow" variant="secondary" />
  //       <Spinner animation="grow" variant="success" />
  //       <Spinner animation="grow" variant="danger" />
  //       <Spinner animation="grow" variant="warning" />
  //       <Spinner animation="grow" variant="info" />
  //       <Spinner animation="grow" variant="light" />
  //       <Spinner animation="grow" variant="dark" />
  //     </div>
  //   );
  // } 
 
  return(
    <div className={style.list}>
      {
        listPokemons.map(({url, name }: any, index: number) => {
          if (index <= (page - 1)) return (
            <Card  
              linkPokemon={ url }
              widthCard='15rem'
              key={`${name}_${index}`}/>
        )})
      }
    </div>   
  );
}

