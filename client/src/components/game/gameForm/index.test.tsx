import { render, screen } from "@testing-library/react";
import { Dispatch, SetStateAction } from "react";
import { PokemonContext } from "../../../context/PokemonContext";
import pokemonsList from "../../../mocks/pokemonsList";
import { GameState } from "../../../typings/pokemons";
import GameForm from "./index";

test("should render a form game", () => {
  render(<GameForm />);
  const gameForm = screen.getByTestId("game-form");
  expect(gameForm).toBeInTheDocument();
});

test("should render a form text", () => {
  render(<GameForm />);
  const gameForm = screen.getByTestId("game-form");
  const gameFormText = screen.getByTestId("game-form-text");
  expect(gameForm).toContainElement(gameFormText);
});

test("should render a form game autocomplete", () => {
  render(<GameForm />);
  const gameForm = screen.getByTestId("game-form");
  const gameFormAutocomplete = screen.getByTestId("game-form-autocomplete");
  expect(gameForm).toContainElement(gameFormAutocomplete);
});

test("should render a form button submit", () => {
  render(<GameForm />);
  const gameForm = screen.getByTestId("game-form");
  const gameFormSubmit = screen.getByTestId("game-form-submit");
  expect(gameForm).toContainElement(gameFormSubmit);
  expect(gameFormSubmit).toHaveTextContent("Verify");
});

test("should change a button submit text", () => {
  const defaultContext: {
    gameState: GameState;
    setGameState: Dispatch<SetStateAction<GameState>>;
  } = {
    gameState: {
      raffledPokemon: null,
      selectedPokemon: null,
      isLoading: false,
      attempts: 1,
      state: "init",
      answers: [],
      allPokemons: pokemonsList,
    },
    setGameState: () => {},
  };

  render(
    <PokemonContext.Provider value={defaultContext}>
      <GameForm />
    </PokemonContext.Provider>
  );

  const gameFormSubmit = screen.getByTestId("game-form-submit");

  expect(gameFormSubmit).toHaveTextContent("Try again");
});
