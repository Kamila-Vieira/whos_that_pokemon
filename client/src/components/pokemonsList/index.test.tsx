import { render, screen } from "@testing-library/react";
import PokemonsList from "./index";

const pokemonsListTest = [
  {
    _id: "1",
    name: "test1",
    type1: "test1",
    type2: "test2",
    width: "20 cm",
    height: "100 cm",
  },
];

test("should render a pokemons list container", () => {
  render(<PokemonsList pokemons={pokemonsListTest} />);
  const pokemonsList = screen.getByTestId("app-pokemonsList");
  expect(pokemonsList).toBeInTheDocument();
});

test("should render a message when pokemons list is empty", () => {
  render(<PokemonsList pokemons={[]} />);
  const pokemonsList = screen.getByTestId("app-pokemonsList");
  const pokemonsListEmpty = screen.getByTestId("pokemonsList-empty");
  expect(pokemonsList).toContainElement(pokemonsListEmpty);
});

test("should render a list when pokemons list is not empty", () => {
  render(<PokemonsList pokemons={pokemonsListTest} />);
  const pokemonsList = screen.getByTestId("app-pokemonsList");
  const pokemonsListUl = screen.getByTestId("pokemonsList-ul");
  const pokemonsListLis = screen.getAllByTestId("pokemonsList-li");
  expect(pokemonsList).toContainElement(pokemonsListUl);
  pokemonsListLis.forEach((li) => {
    expect(pokemonsListUl).toContainElement(li);
  });
});

test("should render all list items", () => {
  render(<PokemonsList pokemons={pokemonsListTest} />);
  const pokemonsListLis = screen.getAllByTestId("pokemonsList-li");
  expect(pokemonsListLis).toHaveLength(pokemonsListTest.length);
});
