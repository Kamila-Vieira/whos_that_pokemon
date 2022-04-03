import { render, screen } from "@testing-library/react";
import ButtonPlay from ".";

test("should render a button play", () => {
  render(<ButtonPlay />);
  const gameButtonPlay = screen.getByTestId("game-play");
  expect(gameButtonPlay).toBeInTheDocument();
});
