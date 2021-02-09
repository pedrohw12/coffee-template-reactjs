import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  margin-bottom: 200px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  color: #818786;
  margin-left: 0px;
  margin-bottom: 50px;
  font-weight: bold;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const Divisor = styled.div`
  display: none;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const Line = styled.div`
  height: 2px;
  width: 32%;
  background-color: #fbd5b5;
`;

export const CircleDiv = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 2px solid #409182;
`;

export const CardsArea = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 40px;
  grid-row-gap: 50px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 0px;
  }

  @media (min-width: 1024px) {
    grid-column-gap: 40px;
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
  max-width: 200px;
  margin-left: 0px;
  margin-top: 50px;
  align-self: center;

  &:hover {
    opacity: 0.9;
  }

  @media (min-width: 768px) {
    align-self: flex-start;
  }

  @media (min-width: 1124px) {
    align-self: flex-start;
  }
`;
