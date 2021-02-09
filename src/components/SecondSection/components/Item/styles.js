import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  padding-bottom: 100px;
  max-width: 300px;

  img {
    filter: drop-shadow(0px 5px 3px #000);
  }
`;

export const Title = styled.h3`
  color: #2d3342;
  margin-top: 10px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  color: #555;
  text-align: center;
  line-height: 25px;
  margin-top: 5px;
`;
