import { render, screen } from "@testing-library/react";
import Home from ".";
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

test("should render a home page", () => {
  render(
    <PokemonContext.Provider value={defaultContext}>
      <Home />
    </PokemonContext.Provider>
  );
  const home = screen.getByTestId("app-home");
  expect(home).toBeInTheDocument();
});

test("should render a game container", () => {
  render(
    <PokemonContext.Provider value={defaultContext}>
      <Home />
    </PokemonContext.Provider>
  );
  const game = screen.getByTestId("game-container");
  expect(game).toBeInTheDocument();
});
