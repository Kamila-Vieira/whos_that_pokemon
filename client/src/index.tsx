import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("Failed to find the root element");

const root = createRoot(rootElement);

const App = () => {
  return (
    <StrictMode>
      <Router>
        <GlobalStyles />
        <Header />
        <Routes />
      </Router>
    </StrictMode>
  );
};

root.render(<App />);
