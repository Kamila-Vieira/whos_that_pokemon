import { Request, Response } from "express";
import Pokemon from "../src/models/Pokemon";
import app from "../src/app";
import request from "supertest";

const defaultPokemon: PokemonModel = {
  name: "teste1",
  type1: "teste1",
  type2: "teste2",
  height: "20 cm",
  width: "30 cm",
};

describe("When creating a Pokemon", () => {
  it("should created successfully", async () => {
    const response = await request(app).post("/pokemon").send(defaultPokemon);

    expect(response.statusCode).toBe(200);
  });

  it("should return 400 when has not valid fields", async () => {
    const errorPokemon = { ...defaultPokemon };
    errorPokemon.name = "";

    const response = await request(app).post("/pokemon").send(errorPokemon);

    expect(response.statusCode).toBe(400);
  });
});

describe("When getting a Pokemon", () => {
  it("should show a valid pokemon", async () => {
    const pokemon = await new Pokemon(defaultPokemon).create();

    const response = await request(app).get(`/pokemon/${pokemon.id}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchObject(
      JSON.parse(JSON.stringify({ pokemon }))
    );
  });

  it("should return 404 when pokemon was not found", async () => {
    const pokemon = await new Pokemon(defaultPokemon);
    const newPokemon = await pokemon.create();
    const pokemonId = newPokemon.id;
    const deletedPokemon = await Pokemon.delete(pokemonId);

    const response = await request(app).get(`/pokemon/${deletedPokemon.id}`);

    expect(response.statusCode).toBe(404);
  });

  it("should return 400 when has not valid id", async () => {
    const fakeId = "fakeId";

    const response = await request(app).get(`/pokemon/${fakeId}`);

    expect(response.statusCode).toBe(400);
  });

  it("should return 400 when has not an id", async () => {
    const response = await request(app).get(`/pokemon`);

    expect(response.statusCode).toBe(400);
  });
});

describe("When getting all Pokemons", () => {
  it("should show all pokemons", async () => {
    const pokemon = await new Pokemon(defaultPokemon).create();

    const response = await request(app).get(`/pokemons`);

    const { pokemons } = response.body;

    expect(response.statusCode).toBe(200);

    // expect(pokemons[0]).toBeCalledWith(
    //   expect.objectContaining({
    //     name: expect.any(String),
    //   })
    // );
  });
});
