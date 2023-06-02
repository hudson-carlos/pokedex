import { useContext } from "react"
import { MyContext } from "../Context/contextProvider";

export default () => {
  const { search, setSearch, setListPokemons } = useContext(MyContext);

    return (
      <header>
        <input 
          type="text" 
          value={search}
          onChange={(t) => {
            setListPokemons([]);
            setSearch(t.currentTarget.value)} 
          }
        />
      </header>
  )
}