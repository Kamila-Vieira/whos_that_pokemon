import { createContext, FunctionComponent, useContext, useState } from "react";
import pokemonsList from "../mocks/pokemonsList";
import { GameState, ContextProps } from "../typings/pokemons";

export const DEFAULT_VALUES: GameState = {
  raffledPokemon: null,
  selectedPokemon: null,
  isLoading: false,
  attempts: 0,
  state: "init",
  answers: [],
  allPokemons: pokemonsList,
};

export const PokemonContext = createContext<ContextProps>({
  gameState: DEFAULT_VALUES,
  setGameState: () => {},
});

export const PokemonContextProvider: FunctionComponent = ({ children }) => {
  const [gameState, setGameState] = useState<GameState>(DEFAULT_VALUES);

  return (
    <PokemonContext.Provider value={{ gameState, setGameState }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => useContext(PokemonContext);
