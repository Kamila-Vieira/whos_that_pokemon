import { Request, Response } from "express";
import Pokemon from "../models/Pokemon";

class PokemonController {
  async listPokemons(_request: Request, response: Response) {
    try {
      const pokemons = await Pokemon.list();

      return response.status(200).json({ pokemons });
    } catch (error) {
      const throwError = new Error(error);
      return response.status(400).json({
        message: throwError.message,
        error: throwError.name,
        code: 400,
      });
    }
  }

  async showPokemon(request: Request, response: Response) {
    const { id } = request.params;

    if (typeof id !== "string") {
      return response.status(400).json({
        errors: [
          {
            message: `Invalid Id`,
            error: "Bad Request",
            code: 400,
          },
        ],
      });
    }

    if (!Boolean(id)) {
      return response.status(400).json({
        errors: [
          {
            message: `Id is required`,
            error: "Bad Request",
            code: 400,
          },
        ],
      });
    }

    try {
      const pokemon = await Pokemon.show(id);

      if (!pokemon) {
        return response.status(404).json({
          errors: [
            {
              message: `Pokemon not found`,
              error: "Not Found",
              code: 404,
            },
          ],
        });
      }

      return response.status(200).json({ pokemon });
    } catch (error) {
      const throwError = new Error(error);
      return response.status(400).json({
        message: throwError.message,
        error: throwError.name,
        code: 400,
      });
    }
  }

  async createPokemon(request: Request, response: Response) {
    try {
      const pokemon = new Pokemon(request.body);

      await pokemon.create();

      const { errors } = pokemon;

      if (errors.length > 0) {
        return response.status(400).json({ errors });
      }

      return response
        .status(200)
        .json({ message: "Pokemon created successfully" });
    } catch (error) {
      const throwError = new Error(error);
      return response.status(400).json({
        message: throwError.message,
        error: throwError.name,
        code: 400,
      });
    }
  }

  async updatePokemon(request: Request, response: Response) {
    const { id } = request.params;

    if (typeof id !== "string") {
      return response.status(400).json({
        errors: [
          {
            message: `Invalid Id`,
            error: "Bad Request",
            code: 400,
          },
        ],
      });
    }

    if (!Boolean(id)) {
      return response.status(400).json({
        errors: [
          {
            message: `Id is required`,
            error: "Bad Request",
            code: 400,
          },
        ],
      });
    }

    try {
      const newPokemon = new Pokemon(request.body);

      const pokemon = await Pokemon.show(id);

      if (!pokemon) {
        return response.status(404).json({
          errors: [
            {
              message: `Pokemon not found`,
              error: "Not Found",
              code: 404,
            },
          ],
        });
      }

      await newPokemon.update(id);

      const { errors } = newPokemon;

      if (errors.length > 0) {
        return response.status(400).json({ errors });
      }

      return response
        .status(200)
        .json({ message: "Pokemon updated successfully" });
    } catch (error) {
      const throwError = new Error(error);
      return response.status(400).json({
        message: throwError.message,
        error: throwError.name,
        code: 400,
      });
    }
  }

  async deletePokemon(request: Request, response: Response) {
    const { id } = request.params;

    if (typeof id !== "string") {
      return response.status(400).json({
        errors: [
          {
            message: `Invalid Id`,
            error: "Bad Request",
            code: 400,
          },
        ],
      });
    }

    if (!Boolean(id)) {
      return response.status(400).json({
        errors: [
          {
            message: `Id is required`,
            error: "Bad Request",
            code: 400,
          },
        ],
      });
    }

    try {
      const pokemon = await Pokemon.show(id);

      if (!pokemon) {
        return response.status(404).json({
          errors: [
            {
              message: `Pokemon not found`,
              error: "Not Found",
              code: 404,
            },
          ],
        });
      }

      await Pokemon.delete(id);

      return response
        .status(200)
        .json({ message: "Pokemon deleted successfully" });
    } catch (error) {
      const throwError = new Error(error);
      return response.status(400).json({
        message: throwError.message,
        error: throwError.name,
        code: 400,
      });
    }
  }
}

export default PokemonController;
