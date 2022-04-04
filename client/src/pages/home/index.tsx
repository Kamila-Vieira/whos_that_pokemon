import { FunctionComponent } from "react";
import Game from "../../components/Game";
import { Container } from "./styles";

const Home: FunctionComponent = () => {
  return (
    <Container data-testid="app-home">
      <Game />
    </Container>
  );
};

export default Home;
