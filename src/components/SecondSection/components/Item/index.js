import React from "react";

// Images
import Coffee from "../../../../assets/coffee-cuted.png";

// Styles
import { Container, Title, Description } from "./styles";

const Item = ({ title, description }) => {
  return (
    <Container>
      {title === "Gran Espresso" && <img src={Coffee} alt="logo" />}
      {title === "Planalto" && <img src={Coffee} alt="logo" />}
      {title === "Piccollo" && <img src={Coffee} alt="logo" />}
      {title === "Danche" && <img src={Coffee} alt="logo" />}
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default Item;
