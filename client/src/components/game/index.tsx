import { FunctionComponent } from "react";
import { usePokemonContext } from "../../context/PokemonContext";
import GameDescription from "./GameDescription";
import GameState from "./GameState";

import { Container } from "./styles";

const Game: FunctionComponent = () => {
  const {
    gameState: { state },
  } = usePokemonContext();
  return (
    <Container data-testid="game-container">
      <GameState gameState={state} />
      <GameDescription />
    </Container>
  );
};

export default Game;
