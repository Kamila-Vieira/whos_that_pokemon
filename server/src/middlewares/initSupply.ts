const SUPPLY_LIMIT = 151;
const SUPPLY_URL = "https://pokeapi.co/api/v2/pokemon/{index}";
import api from "../utils/api";

const initSupply = async () => {
  api(SUPPLY_URL);
};

export default initSupply;
