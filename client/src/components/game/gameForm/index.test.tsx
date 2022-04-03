import { render, screen } from "@testing-library/react";
import GameForm from ".";

test("should render a form game", () => {
  render(<GameForm />);
  const gameForm = screen.getByTestId("game-form");
  expect(gameForm).toBeInTheDocument();
});

test("should render a form button submit", () => {
  render(<GameForm />);
  const gameForm = screen.getByTestId("game-form");
  const gameFormSubmit = screen.getByTestId("game-form-submit");
  expect(gameForm).toContainElement(gameFormSubmit);
});

test("should render a form game autocomplete", () => {
  render(<GameForm />);
  const gameForm = screen.getByTestId("game-form");
  const gameFormAutocomplete = screen.getByTestId("game-form-autocomplete");
  expect(gameForm).toContainElement(gameFormAutocomplete);
});
