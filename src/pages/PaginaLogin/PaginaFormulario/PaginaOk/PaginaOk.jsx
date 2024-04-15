/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import {
  Container,
  AreaTitle,
  TitleForm,
  SubTitleForm,
  AreaTitleText,
  Sucessfully,
} from "./styles";
import AreaLogo from "../../components/AreaLogo";

export const PaginaFormulario = () => {
  return (
    <Container>
      <AreaLogo />
      <AreaTitle>
        <AreaTitleText>
          <TitleForm>Congrats</TitleForm>
          <SubTitleForm>
            You'll be automatically verified for all future orders.
            <br />
            Your orders will be dispatched without delay.
          </SubTitleForm>
        </AreaTitleText>
      </AreaTitle>
      <Sucessfully>
        You've been
        <br />
        successfully
        <br />
        verified!
      </Sucessfully>
    </Container>
  );
};

export default PaginaFormulario;
