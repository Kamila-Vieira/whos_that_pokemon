import { FunctionComponent, useEffect, useState } from "react";
import {
  DEFAULT_VALUES,
  usePokemonContext,
} from "../../../context/PokemonContext";
import defaults from "../../../mocks/defaults";
import Api from "../../../services/api";
import { ButtonSubmit } from "../../../styles/GlobalStyles";
import { Pokemon } from "../../../typings/pokemons";

type Props = {
  text?: string;
};

const ButtonRestart: FunctionComponent<Props> = ({ text = "Play again" }) => {
  const { gameState, setGameState } = usePokemonContext();
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    (async () => {
      const allPokemons = await Api.getAllPokemons();
      setPokemons(allPokemons);
    })();
  }, []);

  const handlerClick = () => {
    setGameState({
      ...gameState,
      isLoading: true,
    });
    setTimeout(() => {
      setGameState({ ...DEFAULT_VALUES, allPokemons: pokemons });
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
