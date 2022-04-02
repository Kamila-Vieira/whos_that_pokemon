import { Component, ReactNode } from "react";
import Header from "../../components/header";
import { Container } from "./styles";

class Home extends Component {
  render(): ReactNode {
    return (
      <>
        <Container data-testid="app-home">
          <h1>HOME</h1>
        </Container>
      </>
    );
  }
}

export default Home;
