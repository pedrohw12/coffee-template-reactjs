import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  margin-top: 165px;
  margin-bottom: 100px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    color: #215ede;

    &.quote {
      margin-right: 20px;
    }
  }

  h1 {
    color: #aaa;
    font-size: 43px;
    margin-bottom: 30px;

    @media (min-width: 768px) {
      font-size: 50px;
    }
  }
`;

export const CardsArea = styled.div`
  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1024px) {
    /* grid-column-gap: 5px; */
  }
`;
