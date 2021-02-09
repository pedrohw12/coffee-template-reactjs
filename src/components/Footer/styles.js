import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
`;

export const Content = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #282e38;
  padding: 40px 150px !important;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  span {
    color: #fff;
    font-family: sans-serif;
  }
`;

export const SocialMediaArea = styled.div`
  display: flex;
  margin-top: 50px;
  margin-bottom: 0px;

  @media (min-width: 768px) {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  a {
    margin-right: 15px;
  }

  a:last-child {
    margin-right: 0px;
  }

  img {
    background-color: #fff;
    width: 40px;
    height: 40px;
    margin-right: 3px;
  }
`;
