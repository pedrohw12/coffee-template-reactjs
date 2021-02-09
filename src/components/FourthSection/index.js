import React from "react";

// Images

// Components
import Item from "./components/Item";

// Styles
import {
  Content,
  Wrapper,
  Title,
  Divisor,
  Line,
  CircleDiv,
  CardsArea,
  CtaButton,
} from "./styles";

const ThirdSection = () => {
  const itens = [
    {
      title: `Pick your`,
      subtitle: "coffee",
      number: "01",
      description:
        "Select from our envolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
    },
    {
      title: "Choose the",
      subtitle: "frequency",
      number: "02",
      description:
        "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
    },
    {
      title: "Receive and",
      subtitle: "enjoy!",
      number: "03",
      description:
        "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
    },
  ];
  return (
    <Content className="container-wrap">
      <Wrapper>
        <Title>How it works</Title>
        <Divisor>
          <CircleDiv></CircleDiv>
          <Line></Line>
          <CircleDiv></CircleDiv>
          <Line></Line>
          <CircleDiv></CircleDiv>
        </Divisor>
        <CardsArea>
          {itens.map((item, key) => {
            return (
              <Item
                key={key}
                title={item.title}
                subtitle={item.subtitle}
                number={item.number}
                description={item.description}
              />
            );
          })}
        </CardsArea>
        <CtaButton>Create your plan</CtaButton>
      </Wrapper>
    </Content>
  );
};

export default ThirdSection;
