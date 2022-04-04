import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import { PokemonContextProvider } from "./context/PokemonContext";
const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("Failed to find the root element");

const root = createRoot(rootElement);

const App = () => {
  return (
    <StrictMode>
      <Router>
        <GlobalStyles />
        <Header />
        <PokemonContextProvider>
          <Routes />
        </PokemonContextProvider>
      </Router>
    </StrictMode>
  );
};

root.render(<App />);
