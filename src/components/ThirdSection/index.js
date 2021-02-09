import React from "react";

// Images
// import Teste from "../../assets/teste.png";

// Components
import Item from "./components/Item";

// Styles
import {
  Container,
  Content,
  AboutMe,
  Paragraph,
  SupportDiv,
  CardsArea,
} from "./styles";

const ThirdSection = () => {
  const itens = [
    {
      title: "Best quality",
      description:
        "Discover an endless variety of the world's best artisan coffee from each of our roasters.",
    },
    {
      title: "Exclusive benefits",
      description:
        "Special offers and swag when you subscribe, including 30% off your first shipment.",
    },
    {
      title: "Free shipping",
      description:
        "We cover the cost and coffee is delivered fast. Peak freshness guaranteed.",
    },
  ];
  return (
    <Container>
      <Content className="container-wrap">
        <AboutMe>Why choose us?</AboutMe>

        <Paragraph>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </Paragraph>
        <CardsArea>
          {itens.map((item, key) => (
            <Item key={key} title={item.title} description={item.description} />
          ))}
        </CardsArea>
        <SupportDiv></SupportDiv>
      </Content>
    </Container>
  );
};

export default ThirdSection;
