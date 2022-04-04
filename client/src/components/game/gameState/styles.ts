import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  height: 100%;
  width: 100%;
  padding: 50px 0;
  @media (max-width: 1024px) {
    height: initial;
  }
  .state-initial {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .state-initial-title {
      margin-bottom: 20px;
    }
  }
  .state-playing {
    height: 100%;
    @media (max-width: 1024px) {
      height: initial;
    }
  }
  .state-lost {
    display: flex;
    flex-direction: column;
    h3 {
      margin-bottom: 20px;
    }
  }
`;
