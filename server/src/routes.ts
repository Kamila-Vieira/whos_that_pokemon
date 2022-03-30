import express, { Router, Request, Response } from "express";

const routes: Router = express.Router();

routes.get("/", (_request: Request, response: Response) => {
  return response.send({ message: "Hellooo" });
});

export default routes;
