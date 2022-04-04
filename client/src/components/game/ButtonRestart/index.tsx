import { FunctionComponent } from "react";
import {
  DEFAULT_VALUES,
  usePokemonContext,
} from "../../../context/PokemonContext";
import defaults from "../../../mocks/defaults";
import { ButtonSubmit } from "../../../styles/GlobalStyles";

type Props = {
  text?: string;
};

const ButtonRestart: FunctionComponent<Props> = ({ text = "Play again" }) => {
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
