import express, { Router, Request, Response } from "express";

const routes: Router = express.Router();

routes.get("/", (_request: Request, response: Response) => {
  response.send({ message: "Hellooo" });
});

export default routes;
