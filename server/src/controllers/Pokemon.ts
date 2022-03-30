import { Request, Response } from "express";
import Pokemon from "../models/Pokemon";

interface Requisition {
  request: Request;
  response: Response;
}

class PokemonController {
  constructor() {}
  ListAllPokemons(_request: Request, response: Response) {
    //response.send("pokemon", { pokemon: {} });
  }
  showPokemon(request: Request, response: Response) {
    const { id } = request.body;
  }
  createPokemon(request: Request, response: Response) {
    const { id } = request.body;
  }
  editPokemon(request: Request, response: Response) {
    const { id } = request.body;
  }
  deletePokemon(request: Request, response: Response) {
    const { id } = request.body;
  }
}
