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
  isLoading: true,
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
      await Api.getAllPokemons()
        .then((response) => {
          setGameState({
            ...gameState,
            allPokemons: response,
            isLoading: false,
          });
        })
        .catch((err) => {
          setGameState({ ...gameState, allPokemons: [], isLoading: false });
        });
    })();
  }, []);

  return (
    <PokemonContext.Provider value={{ gameState, setGameState }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => useContext(PokemonContext);
