import { FunctionComponent } from "react";
import { Pokemons } from "../../../typings/pokemons";
import PokemonItem from "../PokemonItem";
import { Container } from "./syles";

const PokemonsList: FunctionComponent<Pokemons> = ({ pokemons }) => {
  return (
    <Container data-testid="app-pokemonsList">
      {pokemons.length > 0 ? (
        <ul data-testid="pokemonsList-list" className="pokemonsList-list">
          {pokemons.map((pokemon) => {
            return <PokemonItem key={pokemon.name} pokemon={pokemon} />;
          })}
        </ul>
      ) : (
        <h4 data-testid="pokemonsList-empty">Não há pokemons cadastrados</h4>
      )}
    </Container>
  );
};

export default PokemonsList;
