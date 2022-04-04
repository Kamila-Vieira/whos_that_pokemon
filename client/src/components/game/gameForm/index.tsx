import { FunctionComponent, MouseEvent, useState } from "react";
import { usePokemonContext } from "../../../context/PokemonContext";
import defaults from "../../../mocks/defaults";
import { ButtonSubmit, Spinner } from "../../../styles/GlobalStyles";
import Autocomplete from "../Autocomplete";

import { CharacteristicsTable, FormContainer, GameResults } from "./styles";

const GameForm: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    gameState: { allPokemons, selectedPokemon, attempts, answers },
  } = usePokemonContext();

  const handlerSubmit = (e: MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), defaults.LOADING_TIMEOUT);
    console.log(selectedPokemon);
  };

  return (
    <>
      <FormContainer
        data-testid="game-form"
        className="game-form"
        isLoading={isLoading}
      >
        <h4 className="game-form-text" data-testid="game-form-text">
          Insira o nome do Pokemon:
        </h4>
        <div className="game-form-content">
          <Autocomplete pokemons={allPokemons} />
          <ButtonSubmit
            type="submit"
            data-testid="game-form-submit"
            isLoading={isLoading}
            disabled={isLoading}
            onClick={handlerSubmit}
          >
            {attempts > 0 ? "Try again" : "Verify"}
          </ButtonSubmit>
        </div>
      </FormContainer>
      {isLoading ? (
        <Spinner size="60px" />
      ) : (
        <GameResults data-testid="game-form-results">
          {attempts > 0 && (
            <div
              data-testid="form-attempts-content"
              className="form-attempts-content"
            >
              <h4>Attempts: {attempts}</h4>
            </div>
          )}
          {answers.length > 0 && (
            <div
              data-testid="form-characteristic-results"
              className="form-characteristic-results"
            >
              (
              <CharacteristicsTable data-testid="form-characteristics-table">
                <thead>
                  <tr>
                    <th>Characteristic</th>
                    <th>Result</th>
                  </tr>
                </thead>
                <tbody>
                  {answers.map((answer) => {
                    return Object.entries(answer).map(([key, value]) => {
                      return (
                        <tr>
                          <td>{key}</td>
                          <td>{value.verification}</td>
                        </tr>
                      );
                    });
                  })}
                </tbody>
              </CharacteristicsTable>
              )
            </div>
          )}
        </GameResults>
      )}
    </>
  );
};

export default GameForm;
