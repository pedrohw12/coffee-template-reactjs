import React, { useState } from "react";

// Icons
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

// Images
import Logo from "../../assets/logo-coffee.png";

// Styles
import {
  Container,
  Content,
  LogoImg,
  Menu,
  MenuButton,
  MenuItem,
} from "./styles";

const Header = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <Content className="container-wrap">
        <LogoImg src={Logo} alt="logo" />

        <Menu className="desktop-menu">
          <MenuItem>HOME</MenuItem>
          <MenuItem>SOBRE</MenuItem>
          <MenuItem>CONTATO</MenuItem>
        </Menu>

        {!visible && (
          <MenuButton className="menu-icon" onClick={() => setVisible(true)}>
            <MenuIcon />
          </MenuButton>
        )}

        {visible && (
          <Menu className="mobile-menu">
            <MenuButton className="menu-icon" onClick={() => setVisible(false)}>
              <CloseIcon />
            </MenuButton>
            <MenuItem className="menu-item">HOME</MenuItem>
            <MenuItem className="menu-item">SOBRE</MenuItem>
            <MenuItem className="menu-item">CONTATO</MenuItem>
          </Menu>
        )}
      </Content>
    </Container>
  );
};

export default Header;
