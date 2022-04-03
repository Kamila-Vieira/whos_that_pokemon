import { render, screen } from "@testing-library/react";
import Pokemon from ".";

const pokemonTest = {
  _id: "1",
  name: "test1",
  type1: "test1",
  type2: "test2",
  weight: "20 cm",
  height: "100 cm",
};

test("should render a pokemons page", () => {
  render(<Pokemon pokemon={pokemonTest} />);
  const pokemon = screen.getByTestId("app-pokemon");
  expect(pokemon).toBeInTheDocument();
});
