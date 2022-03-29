import express, { Application } from "express";
import routes from "./routes";
import { config } from "dotenv";
import connectdb from "./database";

config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

class App {
  express: Application;

  constructor() {
    this.express = express();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));

    connectdb
      .then(() => {
        this.express.emit("dbConnected");
      })
      .catch((e) => console.log(e));
  }

  routes() {
    this.express.use(routes);
  }
}

export default new App().express;
