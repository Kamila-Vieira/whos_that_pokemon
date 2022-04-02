import { Component, ReactNode } from "react";
import { Pokemons } from "../../typings/pokemons";
import { Container } from "./syles";

class PokemonsList extends Component<Pokemons> {
  render(): ReactNode {
    return (
      <Container data-testid="app-pokemonsList">
        {this.props.pokemons.length > 0 ? (
          <ul data-testid="pokemonsList-ul">
            {this.props.pokemons.map((pokemon) => {
              return (
                <li key={pokemon.name} data-testid="pokemonsList-li">
                  {pokemon.name}
                </li>
              );
            })}
          </ul>
        ) : (
          <h4 data-testid="pokemonsList-empty">Não há pokemons cadastrados</h4>
        )}
      </Container>
    );
  }
}

export default PokemonsList;
