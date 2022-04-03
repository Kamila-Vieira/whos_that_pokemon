import { FunctionComponent, useState } from "react";
import { usePokemonContext } from "../../../context/PokemonContext";
import defaults from "../../../mocks/defaults";
import { ButtonSubmit } from "../../../styles/GlobalStyles";

type Props = {
  text?: string;
};

const ButtonPlay: FunctionComponent<Props> = ({ text = "Play" }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { gameState, setGameState } = usePokemonContext();

  const handlerClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setGameState({
        ...gameState,
        isLoading: true,
      });
      setTimeout(() => {
        setGameState({
          ...gameState,
          isLoading: false,
          state: "playing",
        });
      }, defaults.LOADING_TIMEOUT);
    }, defaults.LOADING_TIMEOUT);
  };

  return (
    <ButtonSubmit
      data-testid="game-play"
      buttonWidth="200px"
      buttonHeight="70px"
      buttonFont="25px"
      onClick={handlerClick}
      isLoading={isLoading}
    >
      {text}
    </ButtonSubmit>
  );
};

export default ButtonPlay;
