import { render, screen } from "@testing-library/react";
import GameDescription from ".";

test("should render a game description with title and text", () => {
  render(<GameDescription />);
  const gameDescription = screen.getByTestId("game-description");
  const gameDescriptionTitle = screen.getByTestId("description-title");
  const gameDescriptionText = screen.getByTestId("description-text");
  expect(gameDescription).toBeInTheDocument();
  expect(gameDescription).toContainElement(gameDescriptionTitle);
  expect(gameDescription).toContainElement(gameDescriptionText);
});
