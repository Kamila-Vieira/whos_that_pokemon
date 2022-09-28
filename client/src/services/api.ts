import axios from "axios";
import { PokemonData } from "../typings/pokemons";

const Api = {
  getAllPokemons: async () => {
    try {
      const response = await axios({
        url: "/pokemons",
        method: "GET",
      });
      return await response.data.pokemons;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  getPokemon: async (id: string) => {
    try {
      const response = await axios({
        url: `/pokemon/${id}`,
        method: "GET",
      });
      return await response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  createPokemon: async (data: PokemonData) => {
    try {
      await axios({
        url: `/pokemon`,
        method: "POST",
        data,
      });
      return "Pokemon created successfully";
    } catch (error) {
      console.error(error);
      return false;
    }
  },
  updatePokemon: async (id: string, data: PokemonData) => {
    try {
      await axios({
        url: `/pokemon/${id}`,
        method: "PUT",
        data,
      });
      return "Pokemon updated successfully";
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  deletePokemon: async (id: string) => {
    try {
      await axios({
        url: `/pokemon/${id}`,
        method: "DELETE",
      });
      return "Pokemon deleted successfully";
    } catch (error) {
      console.error(error);
      return [];
    }
  },
};

export default Api;
