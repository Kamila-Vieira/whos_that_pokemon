import { FunctionComponent } from "react";
import { usePokemonContext } from "../../../context/PokemonContext";
import { Spinner } from "../../../styles/GlobalStyles";
import ButtonPlay from "../ButtonPlay";
import GameForm from "../GameForm";

import { Container } from "./styles";

type Props = {
  gameState: "init" | "playing" | "won" | "lost";
};

const GameState: FunctionComponent<Props> = ({ gameState = "init" }) => {
  const {
    gameState: { isLoading },
  } = usePokemonContext();
  return (
    <Container data-testid="game-state">
      {isLoading ? (
        <Spinner size="50px" />
      ) : (
        (() => {
          switch (gameState) {
            case "playing":
              return (
                <div data-testid="state-playing" className="state-playing">
                  <GameForm />
                </div>
              );
            case "won":
              return (
                <div data-testid="state-won" className="state-won">
                  state {gameState}
                </div>
              );
            case "lost":
              return (
                <div data-testid="state-lost" className="state-lost">
                  state {gameState}
                </div>
              );
            default:
              return (
                <div data-testid="state-initial" className="state-initial">
                  <h3 className="state-initial-title">
                    Clique no botão abaixo para iniciar o jogo
                  </h3>
                  <ButtonPlay />
                </div>
              );
          }
        })()
      )}
    </Container>
  );
};

export default GameState;
