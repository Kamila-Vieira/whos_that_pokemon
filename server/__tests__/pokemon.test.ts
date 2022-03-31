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
    const newPokemon = { ...defaultPokemon, name: "" };

    const response = await request(app).post("/pokemon").send(newPokemon);

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

describe("When list Pokemons", () => {
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
        width: expect.any(String),
      })
    );
  });
});

describe("When update a Pokemon", () => {
  it("should have successfully", async () => {
    const pokemon = await new Pokemon(defaultPokemon).create();
    const editedPokemon = { ...defaultPokemon, name: "updated" };

    const response = await request(app)
      .put(`/pokemon/${pokemon.id}`)
      .send(editedPokemon);

    expect(response.statusCode).toBe(200);
  });

  it("should return 400 when has not valid fields", async () => {
    const pokemon = await new Pokemon(defaultPokemon).create();
    const editedPokemon = { ...defaultPokemon, name: "" };

    const response = await request(app)
      .put(`/pokemon/${pokemon.id}`)
      .send(editedPokemon);

    expect(response.statusCode).toBe(400);
  });

  it("should return 404 when pokemon was not found", async () => {
    const pokemon = await new Pokemon(defaultPokemon);
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

    const response = await request(app)
      .put(`/pokemon/${fakeId}`)
      .send(defaultPokemon);

    expect(response.statusCode).toBe(400);
  });

  it("should return 400 when has not an id", async () => {
    const response = await request(app).put(`/pokemon`).send(defaultPokemon);

    expect(response.statusCode).toBe(400);
  });

  it("should not update when has no changes", async () => {
    const pokemon = await new Pokemon(defaultPokemon).create();

    const response = await request(app)
      .put(`/pokemon/${pokemon.id}`)
      .send(defaultPokemon);

    expect(response.statusCode).toBe(400);
  });
});

describe("When delete a Pokemon", () => {
  it("should have successfully", async () => {
    const pokemon = await new Pokemon(defaultPokemon).create();

    const response = await request(app).delete(`/pokemon/${pokemon.id}`);

    expect(response.statusCode).toBe(200);
  });

  it("should return 404 when pokemon was not found", async () => {
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
