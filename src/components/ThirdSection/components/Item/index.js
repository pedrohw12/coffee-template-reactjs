import React from "react";

// Images
import Grao from "../../../../assets/grao.png";
import Presente from "../../../../assets/presente.png";
import Caminhao from "../../../../assets/caminhao.png";

// Styles
import { Container, Title, Description } from "./styles";

const Item = ({ title, description }) => {
  return (
    <Container>
      {title === "Best quality" && <img src={Grao} alt="logo" />}
      {title === "Exclusive benefits" && <img src={Presente} alt="logo" />}
      {title === "Free shipping" && <img src={Caminhao} alt="logo" />}
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default Item;
