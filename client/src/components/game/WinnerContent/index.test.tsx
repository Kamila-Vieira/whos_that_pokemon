import { render, screen } from "@testing-library/react";
import WinnerContent from ".";

test("should render a form game", () => {
  render(<WinnerContent />);
  const gameWinner = screen.getByTestId("game-winner");
  expect(gameWinner).toBeInTheDocument();
});

test("should render a winner results", () => {
  render(<WinnerContent />);
  const gameWinner = screen.getByTestId("game-winner");
  const gamWinnerResults = screen.getByTestId("game-form-results");
  expect(gameWinner).toContainElement(gamWinnerResults);
});

test("should render a winner restart button", () => {
  render(<WinnerContent />);
  const gameWinner = screen.getByTestId("game-winner");
  const gamWinnerRestart = screen.getByTestId("game-restart");
  expect(gameWinner).toContainElement(gamWinnerRestart);
});
