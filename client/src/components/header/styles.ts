import styled from "styled-components";
import { Container, MainTheme } from "../../styles/GlobalStyles";

export { Container, MainTheme };

export const HeaderContainer = styled.header`
  padding: 20px;
  background-color: #fff;
  border-bottom: 2px solid #ff0000;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.h1`
  margin-right: 30px;
  color: #990000;
`;

export const Nav = styled.nav`
  .header-list {
    display: flex;
    align-items: center;

    .header-list-item {
      margin: 0 10px;
      color: #ff0000;
    }
  }
`;

export const LinkButton = styled.button`
  color: inherit;
`;
