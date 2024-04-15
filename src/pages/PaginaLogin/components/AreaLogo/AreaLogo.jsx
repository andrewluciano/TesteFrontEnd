import React from "react";
import { Container } from "./styles";

import { ReactComponent as ImagemLogo } from "src/assets/images/logo.svg";
import Steps from "../Steps";

export const AreaLogo = () => {
  return (
    <Container className="AreaLogo">
      <ImagemLogo width={"135px"} />
      <Steps nSteps={5} steps={5} />
    </Container>
  );
};

export default AreaLogo;
