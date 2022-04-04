import {
  createContext,
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import Api from "../services/api";
import { GameState, ContextProps } from "../typings/pokemons";

export const DEFAULT_VALUES: GameState = {
  raffledPokemon: null,
  selectedPokemon: null,
  isLoading: false,
  attempts: 0,
  state: "init",
  answers: [],
  allPokemons: [],
};

export const PokemonContext = createContext<ContextProps>({
  gameState: DEFAULT_VALUES,
  setGameState: () => {},
});

export const PokemonContextProvider: FunctionComponent = ({ children }) => {
  const [gameState, setGameState] = useState<GameState>(DEFAULT_VALUES);

  useEffect(() => {
    (async () => {
      const allPokemons = await Api.getAllPokemons();
      setGameState({ ...gameState, allPokemons });
    })();
  }, []);

  return (
    <PokemonContext.Provider value={{ gameState, setGameState }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => useContext(PokemonContext);
