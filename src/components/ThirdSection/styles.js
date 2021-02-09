import styled from "styled-components";

export const Container = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #282e38;
  padding-top: 90px;
  padding-bottom: 50px;
  border-radius: 10px;
  z-index: -1;
  position: relative;
  padding-left: 0px !important;
  padding-right: 0px !important;

  @media (min-width: 768px) {
    padding-bottom: 0px;
  }
`;

export const AboutMe = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: 31px;

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const Paragraph = styled.h4`
  color: #ccd3e3;
  margin-top: 50px;
  margin-bottom: 50px;
  line-height: 30px;
  width: 90%;
  text-align: center;

  @media (min-width: 768px) {
    width: 44%;
    margin-bottom: 0px;
  }
`;

export const SupportDiv = styled.div`
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 145px;
  margin-top: 260px;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const CardsArea = styled.div`
  display: grid;
  z-index: 5;
  position: relative;
  grid-row-gap: 15px;
  margin-left: 20px;
  margin-right: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 0px;
    grid-column-gap: 15px;
    position: absolute;
    bottom: 0;
    margin-left: 0px;
    margin-right: 0px;
  }

  @media (min-width: 1024px) {
    grid-column-gap: 40px;
  }
`;
