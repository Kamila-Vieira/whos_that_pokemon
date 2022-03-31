import mongoose from "mongoose";

const pokemonSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type1: { type: String, required: true },
    type2: { type: String, required: true },
    height: { type: String, required: true },
    width: { type: String, required: true },
    image: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
  },
  {
    toJSON: {
      transform: (_, ret): void => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

const pokemonModel = mongoose.model("Pokemon", pokemonSchema);

class Pokemon {
  body: PokemonModel;
  pokemon: PokemonModel | null;
  errors: ErrorBody[];

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

    this.pokemon = await pokemonModel.create(this.body);

    return this.pokemon;
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

    this.pokemon = await pokemonModel.findByIdAndUpdate(id, this.body, {
      new: true,
    });
  }

  static async delete(id: string) {
    const pokemon = await pokemonModel.findOneAndDelete({ id });
    return pokemon;
  }
}

export default Pokemon;
