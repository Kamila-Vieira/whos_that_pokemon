import { FunctionComponent, MouseEvent, useState } from "react";
import { usePokemonContext } from "../../../context/PokemonContext";
import defaults from "../../../mocks/defaults";
import { ButtonSubmit, Spinner } from "../../../styles/GlobalStyles";
import helpers from "../../../utils/helpers";
import Autocomplete from "../Autocomplete";

import { CharacteristicsTable, FormContainer, GameResults } from "./styles";

const GameForm: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { gameState, setGameState } = usePokemonContext();

  const { allPokemons, selectedPokemon, attempts, answers, raffledPokemon } =
    gameState;

  console.log(raffledPokemon);
  const handlerSubmit = (e: MouseEvent) => {
    e.preventDefault();

    setIsLoading(true);
    setTimeout(() => setIsLoading(false), defaults.LOADING_TIMEOUT);

    if (raffledPokemon && selectedPokemon) {
      const attempVerification = {
        type1: {
          answer: selectedPokemon.type1,
          verification: helpers.verifications(
            raffledPokemon.type1,
            selectedPokemon.type1,
            true
          ),
        },
        type2: {
          answer: selectedPokemon.type2,
          verification: helpers.verifications(
            raffledPokemon.type2,
            selectedPokemon.type2,
            true
          ),
        },
        height: {
          answer: selectedPokemon.height,
          verification: helpers.verifications(
            raffledPokemon.height,
            selectedPokemon.height,
            false
          ),
        },
        weight: {
          answer: selectedPokemon.weight,
          verification: helpers.verifications(
            raffledPokemon.weight,
            selectedPokemon.weight,
            false
          ),
        },
      };

      const isWinner = Object.values(attempVerification)
        .map((value) => value.verification)
        .every((value) => value === "Right");

      if (isWinner) {
        setGameState({
          ...gameState,
          state: "won",
        });
      } else {
        if (attempts + 1 === 5) {
          setGameState({
            ...gameState,
            state: "lost",
          });
        } else {
          setGameState({
            ...gameState,
            attempts: attempts + 1,
            answers: [...answers, attempVerification],
          });
        }
      }
    }
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
          {attempts === 4 && (
            <h5>Pense bem na resposta, esta é a sua última tentativa!</h5>
          )}
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
              <CharacteristicsTable data-testid="form-characteristics-table">
                <thead>
                  <tr>
                    <th>Characteristic</th>
                    <th>Result</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(answers[attempts - 1]).map(([key, value]) => {
                    return (
                      <tr key={key}>
                        <td>{key}</td>
                        <td>{value.verification}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </CharacteristicsTable>
            </div>
          )}
        </GameResults>
      )}
    </>
  );
};

export default GameForm;
