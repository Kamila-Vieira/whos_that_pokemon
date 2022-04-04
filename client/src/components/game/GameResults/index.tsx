import { FunctionComponent } from "react";
import { usePokemonContext } from "../../../context/PokemonContext";
import { Container, CharacteristicsTable } from "./styles";

const GameResults: FunctionComponent = () => {
  const {
    gameState: { attempts, answers, state },
  } = usePokemonContext();

  return (
    <Container data-testid="game-form-results">
      {state !== "won" && attempts === 4 && (
        <h5>Pense bem na resposta, esta é a sua última tentativa!</h5>
      )}
      {state !== "won" && attempts > 0 && (
        <div
          data-testid="form-attempts-content"
          className="form-attempts-content"
        >
          <h4>Tentativas: {attempts}</h4>
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
                <th>Caracteristica</th>
                <th>Resultado</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(
                answers[state === "won" ? attempts : attempts - 1]
              ).map(([key, value]) => {
                return (
                  <tr key={key}>
                    <td>
                      {(() => {
                        switch (key) {
                          case "type1":
                            return "Type 1";
                          case "type2":
                            return "Type 2";
                          case "height":
                            return "Height";
                          case "weight":
                            return "Weight";
                          default:
                            break;
                        }
                      })()}
                    </td>
                    <td>{value.verification}</td>
                  </tr>
                );
              })}
            </tbody>
          </CharacteristicsTable>
        </div>
      )}
    </Container>
  );
};

export default GameResults;
