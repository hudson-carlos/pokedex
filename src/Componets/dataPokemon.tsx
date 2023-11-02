export default ({pokemonDetails}: any) => {
  const abilities = pokemonDetails.abilities;
  const types = pokemonDetails.types;

  return (
    <>
      <h5>weight</h5>
      <p>{pokemonDetails.weight / 10} KG</p>

      <h5>height</h5>
      <p>{pokemonDetails.height / 10} M</p>

      <h5>abilities</h5>
      {abilities.map(({ability}: any) => <p key={ability.name} >{ability.name}</p>)}

      <h5>types</h5>
      {types.map(({type}: any) => <p key={type.name}>{type.name}</p>)}
    </>
  ); 
}
