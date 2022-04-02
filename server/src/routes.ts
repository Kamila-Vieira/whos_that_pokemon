import express, { Router } from "express";
import Pokemon from "../src/controllers/PokemonController";
import initialRoute from "./middlewares/initialRoute";

const routes: Router = express.Router();
const pokemonController = new Pokemon();

routes.get("/", initialRoute);

routes.post("/pokemon", pokemonController.createPokemon);
routes.get("/pokemon/:id?", pokemonController.showPokemon);
routes.get("/pokemons", pokemonController.listPokemons);
routes.put("/pokemon/:id?", pokemonController.updatePokemon);
routes.delete("/pokemon/:id?", pokemonController.deletePokemon);

export default routes;
