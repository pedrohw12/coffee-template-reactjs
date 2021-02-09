import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  background-color: #fff;
  border-radius: 10px;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const Number = styled.h1`
  color: #fbd5b5;
  font-weight: bold;
  font-size: 60px;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  color: #2d3342;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const Description = styled.p`
  color: #2d3342;
  line-height: 25px;
  margin-top: 5px;
  width: 80%;
  font-size: 13px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;
