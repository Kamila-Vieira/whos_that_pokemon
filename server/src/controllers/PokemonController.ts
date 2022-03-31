import { Request, Response } from "express";
import Pokemon from "../models/Pokemon";

class PokemonController {
  constructor() {}
  static ListAllPokemons(_request: Request, response: Response) {
    //response.send("pokemon", { pokemon: {} });
  }

  static validateId(response: Response, id: string) {
    if (typeof id !== "string") {
      response.status(400).json({
        errors: [
          {
            message: `Invalid Id`,
            error: "Bad Request",
            code: 400,
          },
        ],
      });
      return;
    }
    if (!Boolean(id)) {
      response.status(400).json({
        errors: [
          {
            message: `Id is required`,
            error: "Bad Request",
            code: 400,
          },
        ],
      });
      return;
    }
  }

  async showPokemon(request: Request, response: Response) {
    const { id } = request.params;
    PokemonController.validateId(response, id);

    try {
      const pokemon = await Pokemon.show(id);

      response.status(200).json({ pokemon });
    } catch (error) {
      response.status(400).json({ errors: [error] });
    }
  }

  async createPokemon(request: Request, response: Response) {
    try {
      const pokemon = new Pokemon(request.body);

      await pokemon.create();

      const { errors } = pokemon;

      if (errors.length > 0) {
        response.status(400).json({ errors });
        return;
      }

      response.status(200).json({ message: "Pokemon created successfully" });
    } catch (error) {
      response.status(400).json({ errors: [{ ...error }] });
    }
  }

  static editPokemon(request: Request, response: Response) {
    const { id } = request.body;
  }
  static deletePokemon(request: Request, response: Response) {
    const { id } = request.body;
  }
}

export default PokemonController;
