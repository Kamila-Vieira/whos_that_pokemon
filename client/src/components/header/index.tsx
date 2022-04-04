import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  Logo,
  Nav,
  HeaderContent,
  LinkButton,
} from "./styles";

const Header: FunctionComponent = () => {
  return (
    <HeaderContainer data-testid="app-header" className="header">
      <HeaderContent>
        <Logo data-testid="header-logo" className="header-logo">
          <LinkButton
            className="header-list-link"
            data-testid="header-list-link"
            title="Who's that Pokemon?"
            to="/"
            as={Link}
          >
            Who's that Pokemon?
          </LinkButton>
        </Logo>
        <Nav data-testid="header-nav" className="header-nav">
          <ul data-testid="header-list" className="header-list">
            <li data-testid="header-list-item" className="header-list-item">
              <LinkButton
                className="header-list-link"
                data-testid="header-list-link"
                title="Home"
                to="/"
                as={Link}
              >
                Game
              </LinkButton>
            </li>
            <li data-testid="header-list-item" className="header-list-item">
              <LinkButton
                className="header-list-link"
                data-testid="header-list-link"
                to="/pokemons"
                title="Pokemons"
                as={Link}
              >
                List of Pokemons
              </LinkButton>
            </li>
          </ul>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
