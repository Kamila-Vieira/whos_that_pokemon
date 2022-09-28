import { render, screen } from "@testing-library/react";
import ButtonRestart from ".";
import { PokemonContext } from "../../../context/PokemonContext";
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

test("should render a button play", () => {
  render(
    <PokemonContext.Provider value={defaultContext}>
      <ButtonRestart />
    </PokemonContext.Provider>
  );
  const gameButtonRestart = screen.getByTestId("game-restart");
  expect(gameButtonRestart).toBeInTheDocument();
});
