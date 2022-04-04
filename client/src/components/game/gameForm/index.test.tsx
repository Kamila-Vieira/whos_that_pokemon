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
});

test("should render a attempts content when is bigger than 0", () => {
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

  const gameFormResults = screen.getByTestId("game-form-results");
  const gameFormAttempts = screen.getByTestId("form-attempts-content");
  expect(gameFormResults).toContainElement(gameFormAttempts);
  expect(gameFormAttempts).toHaveTextContent(
    `Attempts: ${defaultContext.gameState.attempts}`
  );
});

test("should render a characteristic result when answers length is bigger than 0", () => {
  const defaultContext: {
    gameState: GameState;
    setGameState: Dispatch<SetStateAction<GameState>>;
  } = {
    gameState: {
      raffledPokemon: null,
      selectedPokemon: null,
      isLoading: false,
      attempts: 0,
      state: "init",
      answers: [
        {
          type1: {
            answer: "",
            verification: "",
          },
          type2: {
            answer: "",
            verification: "",
          },
          height: {
            answer: "",
            verification: "",
          },
          weight: {
            answer: "",
            verification: "",
          },
        },
      ],
      allPokemons: pokemonsList,
    },
    setGameState: () => {},
  };

  render(
    <PokemonContext.Provider value={defaultContext}>
      <GameForm />
    </PokemonContext.Provider>
  );

  const gameFormResults = screen.getByTestId("game-form-results");
  const gameFormCharacteristicResults = screen.getByTestId(
    "form-characteristic-results"
  );
  expect(gameFormResults).toContainElement(gameFormCharacteristicResults);
});

test("should not render content when attempts is 0 and has not characteristics", () => {
  const defaultContext: {
    gameState: GameState;
    setGameState: Dispatch<SetStateAction<GameState>>;
  } = {
    gameState: {
      raffledPokemon: null,
      selectedPokemon: null,
      isLoading: false,
      attempts: 0,
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

  const gameFormResults = screen.getByTestId("game-form-results");

  expect(gameFormResults).toBeEmptyDOMElement();
});
