import { Component, ReactNode } from "react";
import Header from "../../components/header";
import PokemonsList from "../../components/pokemonsList";
import { Container } from "./styles";

class Pokemons extends Component {
  render(): ReactNode {
    return (
      <>
        <Container data-testid="app-pokemons">
          <PokemonsList pokemons={[]} />
        </Container>
      </>
    );
  }
}

export default Pokemons;
