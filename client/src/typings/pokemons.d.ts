export type Pokemon = {
  _id: string;
  name: string;
  type1: string;
  type2: string;
  width: string;
  height: string;
  image?: string;
};

export type Pokemons = {
  pokemons: Pokemon[];
};
