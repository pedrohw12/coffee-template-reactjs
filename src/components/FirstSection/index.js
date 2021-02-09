import React from "react";

// Images

// Styles
import {
  Container,
  Content,
  InfoArea,
  BigTitle,
  Explanation,
  CtaButton,
} from "./styles";

const FirstSection = () => {
  return (
    <Container>
      <Content className="container-wrap">
        <InfoArea>
          <BigTitle>
            Great coffee <br />
            made simple.
          </BigTitle>
          <Explanation>
            Start your mornings with the world's best coffees. Try our expertly
            curated artisan coffees from our best roasters <br />
            delivered directly to your door, at your schedule.
          </Explanation>
          <CtaButton>Create your plan</CtaButton>
        </InfoArea>
      </Content>
    </Container>
  );
};

export default FirstSection;
