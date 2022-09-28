import { render, screen, fireEvent } from "@testing-library/react";
import PokemonItem from ".";
import { PokemonContext } from "../../../context/PokemonContext";
import { Pokemon } from "../../../typings/pokemons";
import { GameState } from "../../../typings/pokemons";

const defaultContext: {
  gameState: GameState;
  setGameState: () => void;
} = {
  gameState: {
    raffledPokemon: null,
    selectedPokemon: null,
    isLoading: false,
    attempts: 1,
    state: "init",
    answers: [],
    allPokemons: [],
  },
  setGameState: () => {},
};

const pokemonTest: Pokemon = {
  _id: "1",
  name: "test1",
  type1: "test1",
  type2: "test2",
  weight: "20 cm",
  height: "100 cm",
};

test("should render a pokemon card", () => {
  render(
    <PokemonContext.Provider value={defaultContext}>
      <PokemonItem pokemon={pokemonTest} />
    </PokemonContext.Provider>
  );
  const pokemonItem = screen.getByTestId("pokemon-card");
  expect(pokemonItem).toBeInTheDocument();
});

test("each card should render props fields unless prop _id", () => {
  render(
    <PokemonContext.Provider value={defaultContext}>
      <PokemonItem pokemon={pokemonTest} />
    </PokemonContext.Provider>
  );
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

test("each input should be able on edit", () => {
  render(
    <PokemonContext.Provider value={defaultContext}>
      <PokemonItem pokemon={pokemonTest} />
    </PokemonContext.Provider>
  );
  const pokemonInputs = screen.getAllByTestId("pokemon-input");
  const buttonEdit = screen.getByTestId("button-edit");
  fireEvent.click(buttonEdit);
  pokemonInputs.forEach((pokemonInput) => {
    expect(pokemonInput).not.toBeDisabled();
  });
});
