import { Schema, model } from "mongoose";
import { PokemonModel, ErrorBody } from "../../typings/pokemon";

const pokemonSchema = new Schema({
  name: { type: String, required: true, unique: true },
  type1: { type: String, required: true },
  type2: { type: String, required: true },
  height: { type: String, required: true },
  width: { type: String, required: true },
  image: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
});

const pokemonModel = model("Pokemon", pokemonSchema);

class Pokemon {
  body: PokemonModel;
  pokemon: PokemonModel | null;
  errors: ErrorBody[];
  DEFAULT_PROPS: string[];
  constructor(body: PokemonModel) {
    this.body = body;
    this.pokemon = null;
    this.errors = [];
    this.DEFAULT_PROPS = ["name", "type1", "type2", "width", "height", "image"];
  }

  clearBody() {
    for (const key in this.body) {
      if (typeof this.body[key as keyof PokemonModel] !== "string") {
        this.body[key as keyof PokemonModel] = "";
      }
    }
    this.body = {
      name: this.body.name,
      type1: this.body.type1,
      type2: this.body.type2,
      width: this.body.width,
      height: this.body.height,
    };
  }

  validFields() {
    this.clearBody();

    for (const key in this.body) {
      if (!this.body[key as keyof PokemonModel]) {
        this.errors.push({
          message: `Field '${key}' is required`,
          error: "Bad Request",
          code: 400,
        });
      }
    }
  }

  async create() {
    this.validFields();

    if (this.errors.length > 0) return;

    try {
      this.pokemon = await pokemonModel.create(this.body);

      return this.pokemon;
    } catch (error) {
      const errorMessage = new Error(error).message;
      if (errorMessage.includes("duplicate key error")) {
        this.errors.push({
          message: `Field name must be unique`,
          error: "Bad Request",
          code: 400,
        });
      }
      return;
    }
  }

  static async list() {
    const pokemons = await pokemonModel.find().sort({ createdAt: -1 });
    return pokemons;
  }

  static async show(id: string) {
    const pokemon = await pokemonModel.findById(id);
    return pokemon;
  }

  async update(id: string) {
    this.validFields();

    if (this.errors.length > 0) return;

    try {
      const pokemon = await pokemonModel.findOne({ _id: id, ...this.body });

      if (pokemon) {
        this.errors.push({
          message: `No fields to change`,
          error: "Bad request",
          code: 400,
        });
        return;
      }

      this.pokemon = await pokemonModel.findByIdAndUpdate(id, this.body, {
        new: true,
      });
      return;
    } catch (error) {
      const errorMessage = new Error(error).message;
      if (errorMessage.includes("duplicate key error")) {
        this.errors.push({
          message: `Field name must be unique`,
          error: "Bad Request",
          code: 400,
        });
      } else {
        this.errors.push({
          message: errorMessage,
          error: new Error(error).name,
          code: 400,
        });
      }
      return;
    }
  }

  static async delete(id: string) {
    const pokemon = await pokemonModel.findOneAndDelete({ id });
    return pokemon;
  }
}

export default Pokemon;
