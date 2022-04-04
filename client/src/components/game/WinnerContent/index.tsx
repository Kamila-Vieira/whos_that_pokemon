import { FunctionComponent } from "react";
import ButtonRestart from "../ButtonRestart";
import GameResults from "../GameResults";
import { Container } from "./styles";

const WinnerContent: FunctionComponent = () => {
  return (
    <Container data-testid="game-winner">
      <GameResults />
      <h3>You Win!</h3>
      <ButtonRestart  />
    </Container>
  );
};

export default WinnerContent;
