import express, { Router, Request, Response } from "express";
import Pokemon from "../src/controllers/PokemonController";

const routes: Router = express.Router();
const pokemonController = new Pokemon();

routes.get("/", (_request: Request, response: Response) => {
  response.status(200).json({
    message: `Bem vindos(as) a API "Who's that pokemon?"`,
  });
  response.end();
});

routes.post("/pokemon", pokemonController.createPokemon);
routes.get("/pokemon/:id?", pokemonController.showPokemon);
routes.get("/pokemons", pokemonController.listPokemons);
routes.put("/pokemon/:id?", pokemonController.updatePokemon);

export default routes;
