import Pokemon from "../src/models/Pokemon";
import app from "../src/app";
import request from "supertest";
import mongoose from "mongoose";
import { PokemonModel } from "../typings/pokemon";

afterAll(() => {
  mongoose.connection.dropCollection("pokemons");
});

describe("When creating a Pokemon", () => {
  const defaultPokemon: PokemonModel = {
    name: "create",
    type1: "teste1",
    type2: "teste2",
    height: "20 cm",
    weight: "30 cm",
  };

  it("should created successfully", async () => {
    const response = await request(app).post("/pokemon").send(defaultPokemon);

    expect(response.statusCode).toBe(200);
  });

  it("should not create with duplicated name", async () => {
    const response = await request(app).post("/pokemon").send(defaultPokemon);

    expect(response.statusCode).toBe(400);
  });

  it("should return 400 when has not valid fields", async () => {
    const newPokemon = { ...defaultPokemon, name: "" };

    const response = await request(app).post("/pokemon").send(newPokemon);

    expect(response.statusCode).toBe(400);
  });
});

describe("When getting a Pokemon", () => {
  it("should show a valid pokemon", async () => {
    const defaultPokemon: PokemonModel = {
      name: "getting",
      type1: "teste1",
      type2: "teste2",
      height: "20 cm",
      weight: "30 cm",
    };

    const pokemon = await new Pokemon(defaultPokemon).create();

    const response = await request(app).get(`/pokemon/${pokemon.id}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchObject(
      JSON.parse(JSON.stringify({ pokemon }))
    );
  });

  it("should return 404 when pokemon was not found", async () => {
    const defaultPokemon: PokemonModel = {
      name: "gettingError",
      type1: "teste1",
      type2: "teste2",
      height: "20 cm",
      weight: "30 cm",
    };

    const pokemon = await new Pokemon(defaultPokemon);
    const newPokemon = await pokemon.create();
    const deletedPokemon = await Pokemon.delete(newPokemon.id);

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

describe("When list Pokemons", () => {
  beforeAll(async () => {
    await new Pokemon({
      name: "list",
      type1: "teste1",
      type2: "teste2",
      height: "20 cm",
      weight: "30 cm",
    }).create();
  });

  it("should show all pokemons", async () => {
    const response = await request(app).get(`/pokemons`);

    expect(response.statusCode).toBe(200);
  });

  it("should have valid objects", async () => {
    const response = await request(app).get(`/pokemons`);

    const { pokemons } = response.body;

    expect(pokemons).toBeTruthy();

    expect(pokemons[0]).toEqual(
      expect.objectContaining({
        name: expect.any(String),
        type1: expect.any(String),
        type2: expect.any(String),
        height: expect.any(String),
        weight: expect.any(String),
      })
    );
  });
});

describe("When update a Pokemon", () => {
  it("should have successfully", async () => {
    const newPokemon: PokemonModel = {
      name: "successfully",
      type1: "teste1",
      type2: "teste2",
      height: "20 cm",
      weight: "30 cm",
    };

    const pokemon = await new Pokemon(newPokemon).create();
    const editedPokemon = { ...newPokemon, name: "updated" };

    const response = await request(app)
      .put(`/pokemon/${pokemon.id}`)
      .send(editedPokemon);

    expect(response.statusCode).toBe(200);
  });

  it("should return 400 when has not valid fields", async () => {
    const pokemonError: PokemonModel = {
      name: "InvalidFieldsError",
      type1: "teste1",
      type2: "teste2",
      height: "20 cm",
      weight: "30 cm",
    };

    const pokemon = await new Pokemon(pokemonError).create();
    const editedPokemon = { ...pokemonError, name: "" };

    const response = await request(app)
      .put(`/pokemon/${pokemon.id}`)
      .send(editedPokemon);

    expect(response.statusCode).toBe(400);
  });

  it("should return 404 when pokemon was not found", async () => {
    const pokemonError: PokemonModel = {
      name: "notFoundError",
      type1: "teste1",
      type2: "teste2",
      height: "20 cm",
      weight: "30 cm",
    };
    const pokemon = await new Pokemon(pokemonError);
    const newPokemon = await pokemon.create();
    const pokemonId = newPokemon.id;
    const deletedPokemon = await Pokemon.delete(pokemonId);
    const editedPokemon = { ...deletedPokemon, name: "updated" };

    const response = await request(app)
      .put(`/pokemon/${deletedPokemon.id}`)
      .send(editedPokemon);

    expect(response.statusCode).toBe(404);
  });

  it("should return 400 when has not valid id", async () => {
    const fakeId = "fakeId";
    const newPokemon: PokemonModel = {
      name: "InvalidIdError",
      type1: "teste1",
      type2: "teste2",
      height: "20 cm",
      weight: "30 cm",
    };

    const response = await request(app)
      .put(`/pokemon/${fakeId}`)
      .send(newPokemon);

    expect(response.statusCode).toBe(400);
  });

  it("should return 400 when has not an id", async () => {
    const newPokemon: PokemonModel = {
      name: "notHaveIdError",
      type1: "teste1",
      type2: "teste2",
      height: "20 cm",
      weight: "30 cm",
    };

    const response = await request(app).put(`/pokemon`).send(newPokemon);

    expect(response.statusCode).toBe(400);
  });

  it("should not update when has no changes", async () => {
    const newPokemon: PokemonModel = {
      name: "NoChangesError",
      type1: "teste1",
      type2: "teste2",
      height: "20 cm",
      weight: "30 cm",
    };
    const pokemon = await new Pokemon(newPokemon).create();

    const response = await request(app)
      .put(`/pokemon/${pokemon.id}`)
      .send(newPokemon);

    expect(response.statusCode).toBe(400);
  });
});

describe("When delete a Pokemon", () => {
  it("should have successfully", async () => {
    const newPokemon: PokemonModel = {
      name: "successfully",
      type1: "teste1",
      type2: "teste2",
      height: "20 cm",
      weight: "30 cm",
    };

    const pokemon = await new Pokemon(newPokemon).create();

    const response = await request(app).delete(`/pokemon/${pokemon.id}`);

    expect(response.statusCode).toBe(200);
  });

  it("should return 404 when pokemon was not found", async () => {
    const defaultPokemon: PokemonModel = {
      name: "deleteError404",
      type1: "teste1",
      type2: "teste2",
      height: "20 cm",
      weight: "30 cm",
    };

    const pokemon = await new Pokemon(defaultPokemon);
    const newPokemon = await pokemon.create();
    const pokemonId = newPokemon.id;
    const deletedPokemon = await Pokemon.delete(pokemonId);

    const response = await request(app).delete(`/pokemon/${deletedPokemon.id}`);

    expect(response.statusCode).toBe(404);
  });

  it("should return 400 when has not valid id", async () => {
    const fakeId = "fakeId";

    const response = await request(app).delete(`/pokemon/${fakeId}`);

    expect(response.statusCode).toBe(400);
  });

  it("should return 400 when has not an id", async () => {
    const response = await request(app).delete(`/pokemon`);

    expect(response.statusCode).toBe(400);
  });
});
