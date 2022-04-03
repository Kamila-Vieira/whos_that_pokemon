import { render, screen } from "@testing-library/react";
import GameState from ".";

test("should render a game state container", () => {
  render(<GameState gameState="init" />);
  const gameState = screen.getByTestId("game-state");
  expect(gameState).toBeInTheDocument();
});

test("should render a initial content when game state is 'init'", () => {
  render(<GameState gameState="init" />);
  const gameState = screen.getByTestId("game-state");
  const gameStateInitial = screen.getByTestId("state-initial");
  expect(gameState).toContainElement(gameStateInitial);
});

test("should render a playing content when game state is 'playing'", () => {
  render(<GameState gameState="playing" />);
  const gameState = screen.getByTestId("game-state");
  const gameStatePlaying = screen.getByTestId("state-playing");
  expect(gameState).toContainElement(gameStatePlaying);
});

test("should render a winner content when game state is 'won'", () => {
  render(<GameState gameState="won" />);
  const gameState = screen.getByTestId("game-state");
  const gameStatePlaying = screen.getByTestId("state-won");
  expect(gameState).toContainElement(gameStatePlaying);
});

test("should render a loser content when game state is 'lost'", () => {
  render(<GameState gameState="lost" />);
  const gameState = screen.getByTestId("game-state");
  const gameStatePlaying = screen.getByTestId("state-lost");
  expect(gameState).toContainElement(gameStatePlaying);
});
