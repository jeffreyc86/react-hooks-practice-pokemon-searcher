import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemon, setPokemon] = useState([])
  const [query, setQuery] = useState("")


  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(res => res.json())
    .then(pokeArray => {
      setPokemon(pokeArray)
    })
  }, [])
  
  const filteredPokemon = pokemon.filter(pokemon => {return pokemon.name.toLowerCase().includes(query.toLowerCase())})

  const createNewPokemon = (newPokemon) => {
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {'Content-Type': "application/json"},
      body: JSON.stringify(newPokemon)
    })
    .then(res=>res.json())
    .then(pokeObj => {
      const newArray = [...pokemon, pokeObj]
      setPokemon(newArray)
    })
  }


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm createNewPokemon={createNewPokemon}/>
      <br />
      <Search query={query} setQuery={setQuery}/>
      <br />
      <PokemonCollection pokemon={filteredPokemon}/>
    </Container>
  );
}

export default PokemonPage;
