import { FunctionComponent } from "react";
import { usePokemonContext } from "../../../context/PokemonContext";
import defaults from "../../../mocks/defaults";
import { ButtonSubmit } from "../../../styles/GlobalStyles";
import { Pokemon } from "../../../typings/pokemons";
import helpers from "../../../utils/helpers";

type Props = {
  text?: string;
};

const ButtonPlay: FunctionComponent<Props> = ({ text = "Play" }) => {
  const { gameState, setGameState } = usePokemonContext();

  const handlerClick = () => {
    setGameState({
      ...gameState,
      isLoading: true,
    });
    setTimeout(() => {
      setGameState({
        ...gameState,
        isLoading: false,
        state: "playing",
        raffledPokemon: drawPokemon(gameState.allPokemons),
      });
    }, defaults.LOADING_TIMEOUT);
  };

  const drawPokemon = (pokemonList: Pokemon[]) => {
    const limitRandom = pokemonList.length;
    const pokemonIndex = helpers.generateRandomNumber(limitRandom);
    return pokemonList[pokemonIndex];
  };

  return (
    <ButtonSubmit
      data-testid="game-play"
      buttonWidth="200px"
      buttonHeight="70px"
      buttonFont="25px"
      onClick={handlerClick}
    >
      {text}
    </ButtonSubmit>
  );
};

export default ButtonPlay;
