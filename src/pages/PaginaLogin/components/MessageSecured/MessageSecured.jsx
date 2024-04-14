import React from "react";
import { Container } from "./styles";
import PadLock from "src/assets/images/icons/padlock.svg";
import LogoVerifymy from "src/assets/images/LogoVerifymy.svg";

export const MessageSecured = () => {
  return (
    <Container>
      <img className="PadLock" src={PadLock} height="10px" width="9px" />
      <p>Secured by</p>
      <img src={LogoVerifymy} width="76px" height="18px" />
    </Container>
  );
};

export default MessageSecured;
