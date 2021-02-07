import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({createNewPokemon}) {

  const [name, setName] = useState("")
  const [hp, setHp] = useState("")
  const [frontUrl, setFrontUrl] = useState("")
  const [backUrl, setBackUrl] = useState("") 

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPokemon = { name, hp, sprites: {front: frontUrl, back: backUrl}}
    createNewPokemon(newPokemon)
    setName("")
    setHp("")
    setFrontUrl("")
    setBackUrl("")
  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" htmlFor="name" placeholder="Name" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
          <Form.Input fluid label="hp" htmlFor="hp" placeholder="hp" name="hp" type="number" value={hp} onChange={(e)=>setHp(parseInt(e.target.value))} min="1" />
          <Form.Input
            fluid
            label="Front Image URL"
            htmlFor="image" 
            placeholder="front url"
            name="frontUrl"
            value={frontUrl}
            onChange={(e)=>setFrontUrl(e.target.value)}
          />
          <Form.Input
            fluid
            htmlFor="back url" 
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backUrl}
            onChange={(e)=>setBackUrl(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
