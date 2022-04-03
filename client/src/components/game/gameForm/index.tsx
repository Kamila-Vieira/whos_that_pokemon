import { FunctionComponent, MouseEvent, useState } from "react";
import { usePokemonContext } from "../../../context/PokemonContext";
import defaults from "../../../mocks/defaults";
import { ButtonSubmit } from "../../../styles/GlobalStyles";
import Autocomplete from "../Autocomplete";

import { FormContainer } from "./styles";

const GameForm: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    gameState: { allPokemons, selectedPokemon, disableFields, attempts },
  } = usePokemonContext();

  const handlerSubmit = (e: MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), defaults.LOADING_TIMEOUT);
    console.log(selectedPokemon);
  };

  return (
    <FormContainer
      data-testid="game-form"
      className="game-form"
      isLoading={isLoading}
    >
      <Autocomplete pokemons={allPokemons} />
      <ButtonSubmit
        type="submit"
        data-testid="game-form-submit"
        isLoading={isLoading}
        disabled={isLoading || disableFields}
        onClick={handlerSubmit}
      >
        {attempts > 0 ? "Try again" : "Verify"}
      </ButtonSubmit>
    </FormContainer>
  );
};

export default GameForm;
