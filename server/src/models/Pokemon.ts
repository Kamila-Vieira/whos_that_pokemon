import mongoose from "mongoose";

type PokemonModel = {
  name: string;
  type1: string;
  type2: string;
  height: string;
  width: string;
};
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  name: { type: String, required: true },
  type1: { type: String, required: true },
  type2: { type: String, required: true },
  height: { type: String, required: true },
  width: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  image: String,
});

const pokemonModel = mongoose.model("Pokemon", pokemonSchema);

class Pokemon {
  body: PokemonModel;
  pokemon: PokemonModel | null;
  errors: string[];

  constructor(body: PokemonModel) {
    this.body = body;
    this.pokemon = null;
    this.errors = [];
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
        this.errors.push(`Field '${key}' is required`);
      }
    }
  }

  async createPokemon() {
    this.validFields();

    if (this.errors.length > 0) return;

    this.pokemon = await pokemonModel.create(this.body);
  }

  async updatePokemon(id: string) {
    if (typeof id !== "string") return;

    this.validFields();
    if (this.errors.length > 0) return;

    this.pokemon = await pokemonModel.findByIdAndUpdate(id, this.body, {
      new: true,
    });
  }

  static async listAllPokemons() {
    const pokemons = await pokemonModel.find().sort({ createdAt: -1 });
    return pokemons;
  }

  static async findPokemonById(id: string) {
    if (typeof id !== "string" || !id) return;

    const pokemon = await pokemonModel.findById(id);
    return pokemon;
  }

  static async deletePokemon(id: string) {
    if (typeof id !== "string" || !id) return;

    const pokemon = await pokemonModel.findOneAndDelete({ _id: id });
    return pokemon;
  }
}

export default Pokemon;
