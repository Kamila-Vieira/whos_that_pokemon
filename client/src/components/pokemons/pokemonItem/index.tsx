import { FunctionComponent } from "react";

import { Pokemon as PokemonProps } from "../../../typings/pokemons";
import { Container } from "./styles";

type Props = {
  pokemon: PokemonProps;
};

const PokemonItem: FunctionComponent<Props> = ({ pokemon }) => {
  const { _id, name, type1, type2, height, weight } = pokemon;

  return (
    <Container data-testid="pokemon-card">
      <div className="pokemon-card-data">
        <label data-testid="pokemon-name" className="pokemon-field">
          <b>Name: </b>
          <input type="text" value={name} id="name" disabled />
        </label>
        <label data-testid="pokemon-type1" className="pokemon-field">
          <b>Type 1: </b>
          <input type="text" value={type1} id="type1" disabled />
        </label>
        <label data-testid="pokemon-type2" className="pokemon-field">
          <b>Type 2: </b>
          <input type="text" value={type2} id="type2" disabled />
        </label>
        <label data-testid="pokemon-height" className="pokemon-field">
          <b>Height: </b>
          <input type="text" value={height} id="height" disabled />
        </label>
        <label data-testid="pokemon-weight" className="pokemon-field">
          <b>Weight: </b>
          <input type="text" value={weight} id="weight" disabled />
        </label>
      </div>
      <div data-testid="pokemon-card-buttons" className="pokemon-card-buttons">
        <button data-id={_id}>Deletar</button>
        <button data-id={_id}>Editar</button>
      </div>
    </Container>
  );
};

export default PokemonItem;
