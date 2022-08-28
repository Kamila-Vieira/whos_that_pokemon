export type Pokemon = {
  _id: string;
  name: string;
  type1: string;
  type2: string;
  weight: string;
  height: string;
};
export type PokemonData = {
  name: string;
  type1: string;
  type2: string;
  weight: string;
  height: string;
};

export type Pokemons = {
  pokemons: Pokemon[];
};

export type Answer = {
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

export type GameState = {
  raffledPokemon: Pokemon | null;
  selectedPokemon: Pokemon | null;
  isLoading: boolean;
  attempts: number;
  state: "init" | "playing" | "won" | "lost";
  answers: Answer[];
  allPokemons: Pokemon[];
};

export type ContextProps = {
  gameState: GameState;
  setGameState: Dispatch<SetStateAction<GameState>>;
};
