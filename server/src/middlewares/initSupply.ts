import { Response } from "express";
import { PokemonModel } from "../../typings/pokemon";
import defaults from "../mocks/defaults";
import Pokemon from "../models/Pokemon";
import Api from "../utils/api";

type SuppliedItemTypes = {
  type: {
    name: string;
  };
};

type SuppliedItem = {
  name: string;
  pokemon: {
    nodes: [
      {
        height: number;
        weight: number;
        types: SuppliedItemTypes[];
      }
    ];
  };
};

type SuppliedList = {
  species: SuppliedItem[];
};

const initSupply = async (supplied = true, limit = defaults.SUPPLY_LIMIT) => {
  if (supplied) return;

  try {
    const initialPokemons = await Api(limit);
    const suppliedList = formatSuppliedList(JSON.parse(JSON.stringify(initialPokemons)));
    return suppliedList;
  } catch (error) {
    console.log(error);
    return [{}];
  }
};

const formatSuppliedList = (suppliedList: SuppliedList) => {
  const { species } = suppliedList;
  const mappedSpecies = species.map((specie) => {
    const {
      name,
      pokemon: {
        nodes: [{ height, weight, types }],
      },
    } = specie;

    return {
      name,
      height: String(height),
      weight: String(weight),
      type1: types?.length && types[0]?.type?.name ? types[0]?.type?.name : "null",
      type2: types?.length && types[1] && types[1]?.type?.name ? types[1]?.type?.name : "null",
    };
  });
  return mappedSpecies;
};

export async function createInitialPokemon(pokemonData: PokemonModel) {
  try {
    const pokemon = new Pokemon(pokemonData);

    await pokemon.create();

    const { errors } = pokemon;

    if (errors.length > 0) {
      return false;
    }

    return true;
  } catch (_err) {
    return false;
  }
}

export default initSupply;
