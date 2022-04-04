import { Route, Routes as BrowserRoutes } from "react-router-dom";

import Home from "./pages/Home";
import Pokemons from "./pages/Pokemons";

function Routes() {
  return (
    <BrowserRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemons" element={<Pokemons />} />
    </BrowserRoutes>
  );
}

export default Routes;
