import { useContext } from "react"
import { MyContext } from "../Context/contextProvider";

export default () => {
  const { search, setSearch, setListPokemons, setPage, allPokemons } = useContext(MyContext);

    return (
      <header>
        <form>
          <input 
            type="text" 
            value={search}
            onChange={(t) => setSearch(t.currentTarget.value)} 
          />
          <input 
            type="button" 
            value="search"
            onClick={() => {
              setPage(20);
              const newList = allPokemons.filter(({name}) =>  name.includes(search.toLowerCase()));
              setListPokemons(newList); 
            }
          }  
          />
        </form>
      </header>
  )
}