import { FunctionComponent } from "react";

import { Pokemon as PokemonProps } from "../../typings/pokemons";
import { Container } from "./styles";

type Props = {
  pokemon: PokemonProps;
};

const Pokemon: FunctionComponent<Props> = ({ pokemon }) => {
  return (
    <Container data-testid="app-pokemon">
      <h1>{pokemon.name}</h1>
    </Container>
  );
};

export default Pokemon;
