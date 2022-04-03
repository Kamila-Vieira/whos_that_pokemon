import { render, screen } from "@testing-library/react";
import Home from ".";

test("should render a home page", () => {
  render(<Home />);
  const home = screen.getByTestId("app-home");
  expect(home).toBeInTheDocument();
});

test("should render a game container", () => {
  render(<Home />);
  const game = screen.getByTestId("game-container");
  expect(game).toBeInTheDocument();
});
