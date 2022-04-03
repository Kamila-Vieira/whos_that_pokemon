import {
  createContext,
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useContext,
  useState,
} from "react";
import pokemonsList from "../mocks/pokemonsList";
import { Pokemon } from "../typings/pokemons";

type Answer = {
  type1: {
    answer: string;
    verification: string;
  };
  type2: {
    answer: string;
    verification: string;
  };
  height: {
    answer: string;
    verification: string;
  };
  weight: {
    answer: string;
    verification: string;
  };
};

type GameState = {
  raffledPokemon: Pokemon | null;
  selectedPokemon: Pokemon | null;
  isLoading: boolean;
  attempts: number;
  disableFields: boolean;
  state: "init" | "playing" | "won" | "lost";
  answers: Answer[];
  allPokemons: Pokemon[];
};

type Props = {
  gameState: GameState;
  setGameState: Dispatch<SetStateAction<GameState>>;
};

const DEFAULT_VALUES: GameState = {
  raffledPokemon: null,
  selectedPokemon: null,
  isLoading: false,
  attempts: 0,
  disableFields: false,
  state: "init",
  answers: [],
  allPokemons: pokemonsList,
};

export const PokemonContext = createContext<Props>({
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
