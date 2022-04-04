import { FunctionComponent } from "react";
import PokemonsList from "../../components/Pokemons/PokemonsList";
import { Container } from "../../styles/GlobalStyles";
import pokemonsList from "../../mocks/pokemonsList";

const Pokemons: FunctionComponent = () => {
  return (
    <Container data-testid="app-pokemons">
      <PokemonsList pokemons={pokemonsList} />
    </Container>
  );
};

export default Pokemons;
