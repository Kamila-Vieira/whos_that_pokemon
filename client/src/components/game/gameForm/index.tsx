import { FunctionComponent, MouseEvent, useState } from "react";
import { usePokemonContext } from "../../../context/PokemonContext";
import defaults from "../../../mocks/defaults";
import { ButtonSubmit, Spinner } from "../../../styles/GlobalStyles";
import helpers from "../../../utils/helpers";
import Autocomplete from "../Autocomplete";
import GameResults from "../GameResults";

import { ErrorMessage, FormContainer } from "./styles";

const GameForm: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { gameState, setGameState } = usePokemonContext();

  const { allPokemons, selectedPokemon, attempts, answers, raffledPokemon } = gameState;

  const handlerSubmit = (e: MouseEvent) => {
    e.preventDefault();

    if (raffledPokemon && selectedPokemon) {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), defaults.LOADING_TIMEOUT);
      setErrorMessage("");

      const attempVerification = {
        type1: {
          answer: selectedPokemon.type1,
          verification: helpers.verifications(raffledPokemon.type1, selectedPokemon.type1, true),
        },
        type2: {
          answer: selectedPokemon.type2,
          verification: helpers.verifications(raffledPokemon.type2, selectedPokemon.type2, true),
        },
        height: {
          answer: selectedPokemon.height,
          verification: helpers.verifications(raffledPokemon.height, selectedPokemon.height, false),
        },
        weight: {
          answer: selectedPokemon.weight,
          verification: helpers.verifications(raffledPokemon.weight, selectedPokemon.weight, false),
        },
      };

      const isWinner = Object.values(attempVerification)
        .map((value) => value.verification)
        .every((value) => value === "Certo");

      if (attempts === 4) {
        setGameState({
          ...gameState,
          state: "lost",
        });
        return;
      }

      setGameState({
        ...gameState,
        attempts: attempts + 1,
        answers: [...answers, attempVerification],
      });

      if (isWinner) {
        setGameState({
          ...gameState,
          state: "won",
          answers: [...answers, attempVerification],
        });
      }
    } else {
      setErrorMessage("Selecione um pokemon");
    }
  };

  return (
    <>
      <FormContainer data-testid="game-form" className="game-form" isLoading={isLoading}>
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
            {attempts > 0 ? "Tentar novamente" : "Verificar"}
          </ButtonSubmit>
        </div>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </FormContainer>

      {isLoading ? <Spinner size="60px" /> : <GameResults />}
    </>
  );
};

export default GameForm;
