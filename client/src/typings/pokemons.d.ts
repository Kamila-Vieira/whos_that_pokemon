export type Pokemon = {
  _id: string;
  name: string;
  type1: string;
  type2: string;
  weight: string;
  height: string;
};

export type Pokemons = {
  pokemons: Pokemon[];
};