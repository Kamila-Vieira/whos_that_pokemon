import { render, screen } from "@testing-library/react";
import Pokemons from ".";

test("should render a pokemons page", () => {
  render(<Pokemons />);
  const pokemons = screen.getByTestId("app-pokemons");
  expect(pokemons).toBeInTheDocument();
});
