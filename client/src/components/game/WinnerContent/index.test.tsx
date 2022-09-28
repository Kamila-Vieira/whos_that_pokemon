import { render, screen } from "@testing-library/react";
import WinnerContent from ".";
import { PokemonContext } from "../../../context/PokemonContext";
import { GameState } from "../../../typings/pokemons";

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

test("should render a form game", () => {
  render(
    <PokemonContext.Provider value={defaultContext}>
      <WinnerContent />
    </PokemonContext.Provider>
  );
  const gameWinner = screen.getByTestId("game-winner");
  expect(gameWinner).toBeInTheDocument();
});

test("should render a winner results", () => {
  render(
    <PokemonContext.Provider value={defaultContext}>
      <WinnerContent />
    </PokemonContext.Provider>
  );
  const gameWinner = screen.getByTestId("game-winner");
  const gamWinnerResults = screen.getByTestId("game-form-results");
  expect(gameWinner).toContainElement(gamWinnerResults);
});

test("should render a winner restart button", () => {
  render(
    <PokemonContext.Provider value={defaultContext}>
      <WinnerContent />
    </PokemonContext.Provider>
  );
  const gameWinner = screen.getByTestId("game-winner");
  const gamWinnerRestart = screen.getByTestId("game-restart");
  expect(gameWinner).toContainElement(gamWinnerRestart);
});
