import styled from '../Components_css/DataPokemon.module.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default ({pokemonDetails}: any) => {
  const abilities = pokemonDetails.abilities;
  const types = pokemonDetails.types;

  return (
    <div>
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="weight" title="Weight">
        {pokemonDetails.weight / 10} KG
      </Tab>
      <Tab eventKey="height" title="Height">
        {pokemonDetails.height / 10} M
      </Tab>
      <Tab eventKey="abilities" title="Abilities">
        {abilities.map(({ability}: any) => <p key={ability.name} >{ability.name}</p>)}
      </Tab>
      <Tab eventKey="type" title="Type">
        {types.map(({type}: any) => <p key={type.name}>{type.name}</p>)}
      </Tab>
    </Tabs>  

      {/* <h1>{pokemonDetails.name}</h1>
      
      <h5>weight</h5>
      <p>{pokemonDetails.weight / 10} KG</p>

      <h5>height</h5>
      <p>{pokemonDetails.height / 10} M</p>

      <h5>abilities</h5>
      {abilities.map(({ability}: any) => <p key={ability.name} >{ability.name}</p>)}

      <h5>types</h5>
      {types.map(({type}: any) => <p key={type.name}>{type.name}</p>)} */}
    </div>
  ); 
}
