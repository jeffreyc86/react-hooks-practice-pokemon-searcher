import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {

  const pokeCards = pokemon.map(poke => {
    return <PokemonCard key={poke.id} pokemon={poke} />
  })

  return (
    <Card.Group itemsPerRow={6}>
      {pokeCards}
    </Card.Group>
  );
}

export default PokemonCollection;
