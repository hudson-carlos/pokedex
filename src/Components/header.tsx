import { useContext, useEffect } from "react"
import { MyContext } from "../Context/contextProvider";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavPage from "./navPage";
import style from '../Components_css/Header.module.css';

export default () => {
  const { search, setSearch, setListPokemons, setPage, allPokemons } = useContext(MyContext);

  function newListPokemons(word: string){
    setPage(20);
    const newList = allPokemons.filter(({name}) =>  name.includes(word.toLowerCase()));
    setListPokemons(newList);
  }
    
  return (
    <header className={style.header}>
      <h2 onClick={() => {
        setSearch('');
        newListPokemons("");
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
      >Pokédex</h2>
      <form>
        <Form.Control
          size="lg"
          placeholder="Pokemon Name"  
          type="text" 
          value={search}
          aria-describedby="passwordHelpBlock"
          onChange={(t) => setSearch(t.currentTarget.value)}
          onKeyDown={(e) => {
        
            if (e.key === 'Enter') {
              e.preventDefault();
              newListPokemons(search);
            } 
          }} 
          />
        <Button
          style={{margin: "1rem"}}
          variant="light"
          onClick={() => {newListPokemons(search)}}
          >Search
        </Button>
      </form>
        <NavPage />
    </header>
  )
}