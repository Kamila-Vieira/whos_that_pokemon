import {
  HeaderContainer,
  Container,
  Logo,
  Nav,
  List,
  ListItem,
  HeaderContent,
  ListItemLink,
} from "./styles";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer data-testid="app-header">
      <Container>
        <HeaderContent>
          <Logo data-testid="header-logo">Who's that Pokemon?</Logo>
          <Nav data-testid="header-nav">
            <List data-testid="header-list">
              <ListItem data-testid="header-list-item">
                <ListItemLink
                  data-testid="header-list-link"
                  title="Home"
                  to="/"
                  as={Link}
                >
                  Descubra o pokemon
                </ListItemLink>
              </ListItem>
              <ListItem data-testid="header-list-item">
                <ListItemLink
                  data-testid="header-list-link"
                  to="/pokemons"
                  title="Pokemons"
                  as={Link}
                >
                  Listagem de Pokemons
                </ListItemLink>
              </ListItem>
            </List>
          </Nav>
        </HeaderContent>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
