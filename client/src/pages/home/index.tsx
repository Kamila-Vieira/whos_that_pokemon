import { FunctionComponent } from "react";
import Game from "../../components/game";
import { PokemonContextProvider } from "../../context/PokemonContext";
import { Container } from "./styles";

const Home: FunctionComponent = () => {
  return (
    <PokemonContextProvider>
      <Container data-testid="app-home">
        <Game />
      </Container>
    </PokemonContextProvider>
  );
};

export default Home;
