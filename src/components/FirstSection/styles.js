import styled from "styled-components";
import CoffeeBackground from "../../assets/pexels.jpg";

export const Container = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

export const Content = styled.div`
  display: flex;
  padding-bottom: 100px;
  padding-top: 100px;
  border-radius: 10px;
  background-image: url(${CoffeeBackground});
  background-repeat: no-repeat;
  background-position: left;
  /* background-size: 100%; */
  background-color: #000;
  background-size: cover;

   @media (min-width: 768px) {
    padding-left: 80px;
  }

  svg {
    color: #000;
    opacity: 0.5;
  }
`;

export const InfoArea = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    margin-left: 50px;
  }
`;

export const BigTitle = styled.h1`
  color: #fff;
  font-size: 37px;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 50px;
  }
`;

export const Explanation = styled.div`
  color: #c9c9c9;
  line-height: 30px;
  margin-top: 20px;
  margin-bottom: 70px;

  @media (min-width: 768px) {
    width: 51%;
  }
`;

export const CtaButton = styled.button`
  border: 0;
  background-color: #409182;
  color: #fff;
  border-radius: 6px;
  line-height: 50px;
  padding: 0px 20px;
  font-weight: bold;

  &:hover {
    opacity: 0.9;
  }
`;
