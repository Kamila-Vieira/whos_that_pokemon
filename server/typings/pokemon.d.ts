export type PokemonModel = {
  id?: string;
  name: string;
  type1: string;
  type2: string;
  height: string;
  weight: string;
};

export type ErrorBody = {
  message: string;
  error: string;
  code: number;
};
