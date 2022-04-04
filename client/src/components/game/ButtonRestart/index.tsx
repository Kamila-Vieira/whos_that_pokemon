import { FunctionComponent, useState } from "react";
import {
  DEFAULT_VALUES,
  usePokemonContext,
} from "../../../context/PokemonContext";
import defaults from "../../../mocks/defaults";
import { ButtonSubmit } from "../../../styles/GlobalStyles";
import { Pokemon } from "../../../typings/pokemons";
import helpers from "../../../utils/helpers";

type Props = {
  text?: string;
};

const ButtonRestart: FunctionComponent<Props> = ({ text = "Play" }) => {
  const { gameState, setGameState } = usePokemonContext();

  const handlerClick = () => {
    setGameState({
      ...gameState,
      isLoading: true,
    });
    setTimeout(() => {
      setGameState(DEFAULT_VALUES);
    }, defaults.LOADING_TIMEOUT);
  };

  return (
    <ButtonSubmit
      data-testid="game-restart"
      buttonWidth="200px"
      buttonHeight="70px"
      buttonFont="25px"
      onClick={handlerClick}
    >
      {text}
    </ButtonSubmit>
  );
};

export default ButtonRestart;
