import express, { Application } from "express";
import routes from "./routes";
import { config } from "dotenv";
import connection from "./database";

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
}

export default new App().express;
