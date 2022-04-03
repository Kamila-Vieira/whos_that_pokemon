import { render, screen } from "@testing-library/react";
import Game from ".";

test("should render a game content", () => {
  render(<Game />);
  const gameContent = screen.getByTestId("game-description");
  expect(gameContent).toBeInTheDocument();
});

test("should render a game description", () => {
  render(<Game />);
  const gameDescription = screen.getByTestId("game-description");
  expect(gameDescription).toBeInTheDocument();
});

test("should render a game state container", () => {
  render(<Game />);
  const gameState = screen.getByTestId("game-state");
  expect(gameState).toBeInTheDocument();
});
