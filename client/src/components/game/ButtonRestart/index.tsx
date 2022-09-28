import { DEFAULT_VALUES, usePokemonContext } from "../../../context/PokemonContext";
import defaults from "../../../mocks/defaults";
import { ButtonSubmit } from "../../../styles/GlobalStyles";

const ButtonRestart = () => {
  const { gameState, setGameState } = usePokemonContext();

  const handlerClick = () => {
    setGameState({
      ...gameState,
      isLoading: true,
    });
    setTimeout(() => {
      setGameState({
        ...DEFAULT_VALUES,
        isLoading: false,
        allPokemons: gameState.allPokemons,
      });
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
      Jogar novamente
    </ButtonSubmit>
  );
};

export default ButtonRestart;
