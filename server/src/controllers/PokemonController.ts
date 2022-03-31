import { Request, Response } from "express";
import Pokemon from "../models/Pokemon";

class PokemonController {
  static DEFAULT_PROPS: string[] = [
    "name",
    "type1",
    "type2",
    "width",
    "height",
    "image",
  ];

  async listPokemons(_request: Request, response: Response) {
    try {
      const pokemons = await Pokemon.list();

      return response.status(200).json({ pokemons });
    } catch (error) {
      return response.status(400).json({ error });
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
      return response.status(400).json({ error });
    }
  }

  static areObjectsEqual(objectA: any, ObjectB: any) {
    const defaultProps = PokemonController.DEFAULT_PROPS;

    for (var i = 0; i < defaultProps.length; i++) {
      var propName = defaultProps[i];

      if (objectA[propName] !== ObjectB[propName]) return false;
    }
    return true;
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
      return response.status(400).json({ error });
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
      const newPokemon = new Pokemon(request.body);

      await newPokemon.update(id);

      const { errors } = newPokemon;

      if (errors.length > 0) {
        return response.status(400).json({ errors });
      }

      if (PokemonController.areObjectsEqual(pokemon, newPokemon.pokemon)) {
        return response.status(400).json({
          errors: [
            {
              message: `No fields to change`,
              error: "Bad request",
              code: 400,
            },
          ],
        });
      }

      return response
        .status(200)
        .json({ message: "Pokemon updated successfully" });
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
  static deletePokemon(request: Request, response: Response) {
    const { id } = request.params;
  }
}

export default PokemonController;
