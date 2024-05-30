import { useContext } from "react"
import { MyContext } from "../Context/contextProvider"

export default ({loadMoreRef}: any) => {
  const { listPokemons } = useContext(MyContext);

  const messageNotFaund: string = "No pokemon found"
  const messageLoading: string = "Loading more pokemons..." 

  if (listPokemons.length === 0) return <h4>{messageNotFaund}</h4>

  if (listPokemons.length < 20) return null;
  
  console.log(listPokemons);
  

  return (<h4 ref={loadMoreRef}>{messageLoading}</h4>)
}