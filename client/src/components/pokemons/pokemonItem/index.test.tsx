import { render, screen } from "@testing-library/react";
import PokemonItem from ".";
import { Pokemon } from "../../../typings/pokemons";

const pokemonTest: Pokemon = {
  _id: "1",
  name: "test1",
  type1: "test1",
  type2: "test2",
  weight: "20 cm",
  height: "100 cm",
};

test("should render a pokemon card", () => {
  render(<PokemonItem pokemon={pokemonTest} />);
  const pokemonItem = screen.getByTestId("pokemon-card");
  expect(pokemonItem).toBeInTheDocument();
});

test("each card should render props fields unless prop _id", () => {
  render(<PokemonItem pokemon={pokemonTest} />);
  const pokemonItem = screen.getByTestId("pokemon-card");
  for (const propKey in pokemonTest) {
    propKey as keyof Pokemon;
    if (propKey !== "_id") {
      const pokemonPropTag = screen.getByTestId(`pokemon-${propKey}`);
      // eslint-disable-next-line jest/no-conditional-expect
      expect(pokemonItem).toContainElement(pokemonPropTag);
    }
  }
});
