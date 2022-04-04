import express, { Application } from "express";
import { config } from "dotenv";
import axios from "axios";
import routes from "./routes";
import connection from "./database";
import initSupply from "./middlewares/initSupply";
import { PokemonModel } from "../typings/pokemon";

config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

class App {
  express: Application;

  constructor() {
    this.express = express();

    this.middlewares();
    this.connection();
    this.routes();
    this.insertSupply(false);
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
  }

  async connection() {
    try {
      await connection;
      this.express.emit("dbConnected");
    } catch (error) {
      console.log(error);
    }
  }

  routes() {
    this.express.use(routes);
  }

  insertSupply(insert = true) {
    if (!insert) return;
    this.express.on("dbConnected", async () => {
      const pokemons = await initSupply(!insert);
      pokemons.forEach(async (pokemon: PokemonModel) => {
        try {
          await axios({
            url: `/pokemon`,
            method: "POST",
            baseURL: `${process.env.HOSTNAME}:${process.env.PORT}`,
            data: JSON.parse(JSON.stringify(pokemon)),
          });
          console.log({
            message: `Supply ${pokemon.name} inserted successfully`,
          });
        } catch (error) {
          const throwError = new Error(error);
          const { message, name } = throwError;
          console.log({
            error: message,
            type: name,
            message: `Supply ${pokemon.name} not inserted`,
          });
        }
      });
    });
  }
}

export default new App().express;
