import { render, screen } from "@testing-library/react";
import GameState from ".";
import { PokemonContext } from "../../../context/PokemonContext";
import { GameState as GameStateProps } from "../../../typings/pokemons";

const defaultContext: {
  gameState: GameStateProps;
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

test("should render a game state container", () => {
  render(
    <PokemonContext.Provider value={defaultContext}>
      <GameState gameState="init" />
    </PokemonContext.Provider>
  );
  const gameState = screen.getByTestId("game-state");
  expect(gameState).toBeInTheDocument();
});

test("should render a initial content when game state is 'init'", () => {
  render(
    <PokemonContext.Provider value={defaultContext}>
      <GameState gameState="init" />
    </PokemonContext.Provider>
  );
  const gameState = screen.getByTestId("game-state");
  const gameStateInitial = screen.getByTestId("state-initial");
  expect(gameState).toContainElement(gameStateInitial);
});

test("should render a playing content when game state is 'playing'", () => {
  render(
    <PokemonContext.Provider value={defaultContext}>
      <GameState gameState="playing" />
    </PokemonContext.Provider>
  );
  const gameState = screen.getByTestId("game-state");
  const gameStatePlaying = screen.getByTestId("state-playing");
  expect(gameState).toContainElement(gameStatePlaying);
});

test("should render a winner content when game state is 'won'", () => {
  render(
    <PokemonContext.Provider value={defaultContext}>
      <GameState gameState="won" />
    </PokemonContext.Provider>
  );
  const gameState = screen.getByTestId("game-state");
  const gameStatePlaying = screen.getByTestId("state-won");
  expect(gameState).toContainElement(gameStatePlaying);
});

test("should render a loser content when game state is 'lost'", () => {
  render(
    <PokemonContext.Provider value={defaultContext}>
      <GameState gameState="lost" />
    </PokemonContext.Provider>
  );
  const gameState = screen.getByTestId("game-state");
  const gameStatePlaying = screen.getByTestId("state-lost");
  expect(gameState).toContainElement(gameStatePlaying);
});
