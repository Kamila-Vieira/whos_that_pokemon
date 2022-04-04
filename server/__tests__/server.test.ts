import app from "../src/app";
import server from "../src/server";
import request from "supertest";
import mongoose from "mongoose";
import initSupply from "../src/middlewares/initSupply";
import { PokemonModel } from "../typings/pokemon";

describe("When init aplication", () => {
  afterAll(async () => {
    await server.close();
    await mongoose.connection.close();
  });

  test("should have success on get main route", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });

  test("should show welcome message on get main route", async () => {
    const response = await request(app).get("/");
    expect(response.body).toHaveProperty("message");
  });

  test("should not found a invalid route", async () => {
    const response = await request(app).get("/asuasuasua");
    expect(response.statusCode).toBe(404);
  });

  test("should insert a initial supply", async () => {
    const pokemons = await initSupply(false, 1);
    pokemons.forEach(async (pokemon: PokemonModel) => {
      const response = await request(app).post("/pokemon").send(pokemon);
      expect(response.statusCode).toBe(200);
    });
  });
});
