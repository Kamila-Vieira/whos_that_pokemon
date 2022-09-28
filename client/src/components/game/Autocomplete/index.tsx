import { FunctionComponent, useState, FormEvent, MouseEvent, KeyboardEvent, useRef } from "react";
import { usePokemonContext } from "../../../context/PokemonContext";
import { Pokemon } from "../../../typings/pokemons";

import {
  Container,
  ContainerSuggestions,
  InputAutocomplete,
  NoSuggestions,
  Suggestion,
  Suggestions,
} from "./styles";

type Props = {
  pokemons: Pokemon[];
};

const Autocomplete: FunctionComponent<Props> = ({ pokemons }) => {
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState<number>(0);
  const [suggestions, setSuggestions] = useState<Pokemon[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<string>("");

  const $suggestionsList = useRef<HTMLUListElement>(null);
  const $suggestionElement = useRef<HTMLLIElement>(null);

  const { gameState, setGameState } = usePokemonContext();

  const handlerInput = (e: FormEvent<HTMLInputElement>) => {
    const userInput = e.currentTarget.value;

    const filteredSuggestions = pokemons.filter(
      (pokemon) => pokemon.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    setGameState({
      ...gameState,
      selectedPokemon: !userInput.trim().length ? null : filteredSuggestions[0],
    });
    setActiveSuggestionIndex(0);
    setSuggestions(filteredSuggestions);
    setShowSuggestions(true);
    setUserInput(e.currentTarget.value);
  };

  const handlerClick = (e: MouseEvent<HTMLLIElement>) => {
    const itemIndex = Number(e.currentTarget.dataset.index);
    setActiveSuggestionIndex(itemIndex);
    setGameState({
      ...gameState,
      selectedPokemon: suggestions[itemIndex],
    });
    setSuggestions([]);
    setShowSuggestions(false);
    setUserInput(e.currentTarget.innerText);
  };

  const handlerKeyDown = (e: KeyboardEvent) => {
    const elementOffsetHeight = $suggestionElement.current?.offsetHeight;
    if (!elementOffsetHeight) return;

    if (e.keyCode === 13) {
      setActiveSuggestionIndex(0);
      setShowSuggestions(false);
      setGameState({
        ...gameState,
        selectedPokemon: suggestions[activeSuggestionIndex],
      });
      setUserInput(suggestions[activeSuggestionIndex].name);
    } else if (e.keyCode === 38) {
      if (activeSuggestionIndex === 0) {
        return;
      }
      setActiveSuggestionIndex(activeSuggestionIndex - 1);
      setUserInput(suggestions[activeSuggestionIndex - 1].name);
      $suggestionsList?.current?.scrollTo({
        top: elementOffsetHeight * (activeSuggestionIndex - 1),
      });
    } else if (e.keyCode === 40) {
      if (activeSuggestionIndex === suggestions.length - 1) {
        return;
      }

      $suggestionsList?.current?.scrollTo({
        top: elementOffsetHeight * (activeSuggestionIndex + 1),
      });

      setActiveSuggestionIndex(activeSuggestionIndex + 1);
      setUserInput(suggestions[activeSuggestionIndex + 1].name);
    }
  };

  const suggestionsListComponent = userInput && (
    <ContainerSuggestions className="autocomplete-suggestions-container">
      {suggestions.length ? (
        <Suggestions
          className="autocomplete-suggestions"
          data-testid="autocomplete-suggestions"
          ref={$suggestionsList}
        >
          {suggestions.map((suggestion, index) => {
            const isActive = activeSuggestionIndex === index;
            return (
              <Suggestion
                isActive={isActive}
                data-index={index}
                className="autocomplete-suggestion"
                data-testid="autocomplete-suggestion"
                key={suggestion._id}
                onClick={handlerClick}
                {...(isActive ? { ref: $suggestionElement } : {})}
              >
                {suggestion.name}
              </Suggestion>
            );
          })}
        </Suggestions>
      ) : (
        <NoSuggestions
          className="autocomplete-no-suggestions"
          data-testid="autocomplete-no-suggestions"
        >
          <em>No results</em>
        </NoSuggestions>
      )}
    </ContainerSuggestions>
  );

  return (
    <Container data-testid="game-form-autocomplete">
      <InputAutocomplete
        type="text"
        className="game-form-autocomplete-input"
        data-testid="game-form-autocomplete-input"
        onKeyDown={handlerKeyDown}
        onInput={handlerInput}
        value={userInput}
      />
      {showSuggestions && suggestionsListComponent}
    </Container>
  );
};

export default Autocomplete;
