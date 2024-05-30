import Card from "./card"
import style from "../Components_css/ListPokemons.module.css";

export default ({listPokemons, page}: any) => <div className={style.list}>
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
