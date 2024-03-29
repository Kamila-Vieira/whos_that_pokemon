import { render, screen } from "@testing-library/react";
import Pokemons from ".";
import { PokemonContext } from "../../context/PokemonContext";
import { GameState } from "../../typings/pokemons";

const defaultContext: {
  gameState: GameState;
  setGameState: () => void;
} = {
  gameState: {
    raffledPokemon: null,
    selectedPokemon: null,
    isLoading: false,
    attempts: 1,
    state: "init",
    answers: [],
    allPokemons: [],
  },
  setGameState: () => {},
};

test("should render a pokemons page", () => {
  render(
    <PokemonContext.Provider value={defaultContext}>
      <Pokemons />
    </PokemonContext.Provider>
  );
  const pokemons = screen.getByTestId("app-pokemons");
  expect(pokemons).toBeInTheDocument();
});
