import React from "react";

// Components
import Item from "./components/Item";

// Styles
import { Container, Content, CardsArea } from "./styles";

const SecondSection = () => {
  const itens = [
    {
      title: "Gran Espresso",
      description:
        "Light and flavorful blend with cocoa and black pepper for an intense experience.",
    },
    {
      title: "Planalto",
      description:
        "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.",
    },
    {
      title: "Piccollo",
      description:
        "Mild and smooth blend featuring notes of toasted almond and dried cherry.",
    },
    {
      title: "Danche",
      description:
        "Ethiopian hand-harversted blend densely packed with vibrant fruit notes.",
    },
  ];

  return (
    <Container className="container-wrap">
      <Content>
        <h1>Our Collection</h1>
        <CardsArea>
          {itens.map((item, key) => (
            <Item key={key} title={item.title} description={item.description} />
          ))}
        </CardsArea>
      </Content>
    </Container>
  );
};

export default SecondSection;
