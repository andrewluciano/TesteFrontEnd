import React, { useState } from "react";
import { Container, Circle, IndicatorStep } from "./styles";

export const Steps = ({ steps, nSteps }) => {
  const [StepsPosition, setStepsPosition] = useState(true);
  return (
    <Container>
      <Circle />
      <IndicatorStep>
        <strong>{steps}</strong>/{nSteps}
      </IndicatorStep>
    </Container>
  );
};

export default Steps;
