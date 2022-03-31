type PokemonModel = {
  id?: string;
  name: string;
  type1: string;
  type2: string;
  height: string;
  width: string;
  image?: string;
};

type ErrorBody = {
  message: string;
  error: string;
  code: number;
};
