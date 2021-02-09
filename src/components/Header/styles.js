import styled from "styled-components";

export const Container = styled.header`
  background: #fff;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background: #fff;

  button.menu-icon {
    display: flex;

    @media (min-width: 768px) {
      display: none;
    }
  }

  div.mobile-menu {
    display: flex;
    flex-direction: column;
    background-color: #282e38;
    width: 100%;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    padding: 20px;

    @media (min-width: 768px) {
      display: none;
    }

    button.menu-icon {
      align-self: flex-end;
      margin-bottom: 35px;
    }

    button {
      color: #fff;
    }

    button.menu-item {
      margin-bottom: 15px;
    }
  }

  div.desktop-menu {
    display: none;

    @media (min-width: 768px) {
      display: flex;
    }
  }
`;

export const LogoImg = styled.img``;

export const Menu = styled.div``;

export const MenuButton = styled.button`
  border: 0;
  background-color: transparent;
`;

export const MenuItem = styled.button`
  color: #7d7d7d;
  text-transform: uppercase;
  border: 0px;
  background-color: transparent;
  margin-left: 30px;

  &:hover {
    opacity: 0.5;
  }
`;
