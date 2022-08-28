import { FunctionComponent } from "react";
import PokemonsList from "../../components/Pokemons/PokemonsList";
import { Container, LoaderContainer, Spinner } from "./styles";
import { usePokemonContext } from "../../context/PokemonContext";

const Pokemons: FunctionComponent = () => {
  const {
    gameState: { allPokemons, isLoading },
  } = usePokemonContext();

  return (
    <Container data-testid="app-pokemons">
      {isLoading ? (
        <LoaderContainer>
          <Spinner size="50px" />
        </LoaderContainer>
      ) : (
        <PokemonsList pokemons={allPokemons} />
      )}
    </Container>
  );
};

export default Pokemons;
