import Header from "./components/header";
import Routes from "./routes";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <div data-testid="app-container" id="App">
      <GlobalStyles />
      <Header />
      <Routes />
    </div>
  );
}

export default App;
