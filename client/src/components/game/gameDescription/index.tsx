import { FunctionComponent } from "react";

import { Container } from "./styles";

const GameDescription: FunctionComponent = () => {
  return (
    <Container data-testid="game-description">
      <h2 data-testid="description-title" className="description-title">
        Descrição do jogo
      </h2>
      <div>
        <p data-testid="description-text" className="description-text">
          <b>O jogo funciona da seguinte forma:</b>
          Ao iniciar o jogo será sorteado um Pokemon aleatóriamente da base de
          dados, o jogador tentará adivinhar qual foi o Pokemon sorteado
          selecionando o nome no local indicado. Serão 5 chances para tentar
          solucionar o mistério. Durante as tentativas, em caso de erro os
          campos com informações incorretas serão sinalizados com um comparativo
          entre as informções do Pokemon sorteado e as informções do Pokemon
          selecionado.
        </p>
      </div>
    </Container>
  );
};

export default GameDescription;
