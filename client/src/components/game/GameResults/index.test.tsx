import { render, screen } from "@testing-library/react";
import { Dispatch, SetStateAction } from "react";
import { PokemonContext } from "../../../context/PokemonContext";
import pokemonsList from "../../../mocks/pokemonsList";
import { GameState } from "../../../typings/pokemons";
import GameResults from ".";

test("should render a attempts content when is higher than 0", () => {
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
      <GameResults />
    </PokemonContext.Provider>
  );

  const gameFormResults = screen.getByTestId("game-form-results");
  const gameFormAttempts = screen.getByTestId("form-attempts-content");
  expect(gameFormResults).toContainElement(gameFormAttempts);
  expect(gameFormAttempts).toHaveTextContent(
    `Attempts: ${defaultContext.gameState.attempts}`
  );
});

test("should render a characteristic result when answers length is higher than 0", () => {
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
      <GameResults />
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
      <GameResults />
    </PokemonContext.Provider>
  );

  const gameFormResults = screen.getByTestId("game-form-results");

  expect(gameFormResults).toBeEmptyDOMElement();
});
