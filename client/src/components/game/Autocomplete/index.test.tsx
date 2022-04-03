import { fireEvent, render, screen } from "@testing-library/react";
import Autocomplete from ".";
import pokemonsList from "../../../mocks/pokemonsList";

test("should render a autocomplete", () => {
  render(<Autocomplete pokemons={[]} />);
  const gameFormAutocomplete = screen.getByTestId("game-form-autocomplete");
  expect(gameFormAutocomplete).toBeInTheDocument();
});

test("should render a autocomplete input", () => {
  render(<Autocomplete pokemons={[]} />);
  const gameFormAutocomplete = screen.getByTestId("game-form-autocomplete");
  const gameFormAutocompleteInput = screen.getByTestId(
    "game-form-autocomplete-input"
  );
  expect(gameFormAutocomplete).toContainElement(gameFormAutocompleteInput);
});

test("should render autocomplete list if has results", async () => {
  render(<Autocomplete pokemons={pokemonsList} />);
  const gameFormAutocomplete = screen.getByTestId("game-form-autocomplete");
  const gameFormAutocompleteInput = screen.getByTestId(
    "game-form-autocomplete-input"
  );
  fireEvent.change(gameFormAutocompleteInput, { target: { value: "test" } });

  const gameFormAutocompleteContent = screen.getByTestId(
    "autocomplete-suggestions"
  );
  expect(gameFormAutocomplete).toContainElement(gameFormAutocompleteContent);
});

test("should render autocomplete empty text if not has results", async () => {
  render(<Autocomplete pokemons={[]} />);
  const gameFormAutocomplete = screen.getByTestId("game-form-autocomplete");
  const gameFormAutocompleteInput = screen.getByTestId(
    "game-form-autocomplete-input"
  );
  fireEvent.change(gameFormAutocompleteInput, { target: { value: "test" } });

  const gameFormAutocompleteContent = screen.getByTestId(
    "autocomplete-no-suggestions"
  );
  expect(gameFormAutocomplete).toContainElement(gameFormAutocompleteContent);
  expect(gameFormAutocompleteContent).toHaveTextContent("No results");
});
