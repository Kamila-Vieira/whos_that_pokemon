import { Route, Routes as BrowserRoutes } from "react-router-dom";

import Home from "./pages/home";
import Pokemons from "./pages/pokemons";

function Routes() {
  return (
    <BrowserRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemons" element={<Pokemons />} />
    </BrowserRoutes>
  );
}

export default Routes;
