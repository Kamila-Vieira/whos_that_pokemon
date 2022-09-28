import { FunctionComponent } from "react";
import ButtonRestart from "../ButtonRestart";
import GameResults from "../GameResults";
import { Container } from "./styles";

const WinnerContent: FunctionComponent = () => {
  return (
    <Container data-testid="game-winner">
      <h3>Você ganhou!</h3>
      <GameResults />
      <ButtonRestart />
    </Container>
  );
};

export default WinnerContent;
