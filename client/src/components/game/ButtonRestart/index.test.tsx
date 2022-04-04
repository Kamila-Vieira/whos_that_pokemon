import { render, screen } from "@testing-library/react";
import ButtonRestart from ".";

test("should render a button play", () => {
  render(<ButtonRestart />);
  const gameButtonRestart = screen.getByTestId("game-restart");
  expect(gameButtonRestart).toBeInTheDocument();
});
