import React from "react";

// Styles
import { Container, Number, Title, Description } from "./styles";

const Item = ({ title, subtitle, description, number }) => {
  return (
    <Container>
      <Number>{number}</Number>
      <Title>
        {title}
        <br />
        {subtitle}
      </Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default Item;
