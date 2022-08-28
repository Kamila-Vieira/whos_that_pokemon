import { FunctionComponent, useState, ChangeEvent } from "react";
import {
  DEFAULT_VALUES,
  usePokemonContext,
} from "../../../context/PokemonContext";
import Api from "../../../services/api";
import { Spinner } from "../../../styles/GlobalStyles";
import { Pokemon } from "../../../typings/pokemons";
import {
  Container,
  ButtonsContent,
  ButtonEdit,
  ButtonRemove,
  ErrorMessage,
} from "./styles";

type Props = {
  pokemon: Pokemon;
};

const PokemonItem: FunctionComponent<Props> = ({ pokemon }) => {
  const { _id, name, type1, type2, height, weight } = pokemon;
  const { gameState, setGameState } = usePokemonContext();
  const [editPokemon, setEditPokemon] = useState(false);
  const [loadingEditPokemon, setLoadingEditPokemon] = useState(false);
  const [loadingRemovePokemon, setLoadingRemovePokemon] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [pokemonName, setPokemonName] = useState(name);
  const [pokemonType1, setPokemonType1] = useState(type1);
  const [pokemonType2, setPokemonType2] = useState(type2);
  const [pokemonHeight, setPokemonHeight] = useState(height);
  const [pokemonWeight, setPokemonWeight] = useState(weight);

  const handleEditPokemon = async () => {
    setErrorMessage(undefined);
    if (editPokemon) {
      setLoadingEditPokemon(true);
      await Api.updatePokemon(_id, {
        name: pokemonName,
        type1: pokemonType1,
        type2: pokemonType2,
        height: pokemonHeight,
        weight: pokemonWeight,
      })
        .then(async (_) => {
          setLoadingEditPokemon(false);
          await Api.getAllPokemons()
            .then((response) => {
              setGameState({
                ...DEFAULT_VALUES,
                allPokemons: response,
                isLoading: false,
              });
            })
            .catch((err) => {
              setGameState({ ...gameState, allPokemons: [], isLoading: false });
            });
        })
        .catch((err) => {
          const error = new Error(err);
          setLoadingEditPokemon(false);
          setErrorMessage(error.message);
        });
    }
    setEditPokemon(!editPokemon);
  };

  const handleRemovePokemon = async () => {
    setErrorMessage(undefined);
    setLoadingRemovePokemon(true);
    await Api.deletePokemon(_id)
      .then(async (_) => {
        setLoadingRemovePokemon(false);
        await Api.getAllPokemons()
          .then((response) => {
            setGameState({
              ...DEFAULT_VALUES,
              allPokemons: response,
              isLoading: false,
            });
          })
          .catch((err) => {
            setGameState({ ...gameState, allPokemons: [], isLoading: false });
          });
      })
      .catch((err) => {
        const error = new Error(err);
        setLoadingRemovePokemon(false);
        setErrorMessage(error.message);
      });
  };

  return (
    <Container data-testid="pokemon-card" data-id={_id}>
      <div className="pokemon-card-data">
        <label data-testid="pokemon-name" className="pokemon-field name-field">
          <input
            data-testid="pokemon-input"
            type="text"
            value={pokemonName}
            id="name"
            disabled={!editPokemon}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setErrorMessage(undefined);
              setPokemonName(event.currentTarget.value);
            }}
          />
        </label>
        <label data-testid="pokemon-type1" className="pokemon-field">
          <b>Tipo 1: </b>
          <input
            data-testid="pokemon-input"
            type="text"
            value={pokemonType1}
            id="type1"
            disabled={!editPokemon}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setErrorMessage(undefined);
              setPokemonType1(event.currentTarget.value);
            }}
          />
        </label>
        <label data-testid="pokemon-type2" className="pokemon-field">
          <b>Tipo 2: </b>
          <input
            data-testid="pokemon-input"
            type="text"
            value={pokemonType2}
            id="type2"
            disabled={!editPokemon}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setErrorMessage(undefined);
              setPokemonType2(event.currentTarget.value);
            }}
          />
        </label>
        <label data-testid="pokemon-height" className="pokemon-field">
          <b>Altura: </b>
          <input
            data-testid="pokemon-input"
            type="text"
            value={pokemonHeight}
            id="height"
            disabled={!editPokemon}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setErrorMessage(undefined);
              setPokemonHeight(
                event.currentTarget.value.replace(/[^(\d)]/gi, "")
              );
            }}
          />
        </label>
        <label data-testid="pokemon-weight" className="pokemon-field">
          <b>Peso: </b>
          <input
            data-testid="pokemon-input"
            type="text"
            value={pokemonWeight}
            id="weight"
            disabled={!editPokemon}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setErrorMessage(undefined);
              setPokemonWeight(
                event.currentTarget.value.replace(/[^(\d)]/gi, "")
              );
            }}
          />
        </label>
      </div>
      <ButtonsContent>
        <ButtonEdit
          data-testid="button-edit"
          onClick={handleEditPokemon}
          disabled={loadingEditPokemon || loadingRemovePokemon}
        >
          {loadingEditPokemon ? <Spinner /> : editPokemon ? "Salvar" : "Editar"}
        </ButtonEdit>
        <ButtonRemove
          onClick={handleRemovePokemon}
          disabled={loadingEditPokemon || loadingRemovePokemon}
        >
          {loadingRemovePokemon ? <Spinner /> : "Remover"}
        </ButtonRemove>
      </ButtonsContent>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
};

export default PokemonItem;
