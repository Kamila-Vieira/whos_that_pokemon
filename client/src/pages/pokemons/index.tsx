import { FunctionComponent } from "react";
import PokemonsList from "../../components/Pokemons/PokemonsList";
import { Container } from "../../styles/GlobalStyles";
import { usePokemonContext } from "../../context/PokemonContext";

const Pokemons: FunctionComponent = () => {
  const {
    gameState: { allPokemons },
  } = usePokemonContext();

  return (
    <Container data-testid="app-pokemons">
      <PokemonsList pokemons={allPokemons} />
    </Container>
  );
};

export default Pokemons;
