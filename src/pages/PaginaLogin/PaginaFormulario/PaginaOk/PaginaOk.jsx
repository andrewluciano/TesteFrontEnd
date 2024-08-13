/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import {
  Container,
  AreaTitle,
  TitleForm,
  SubTitleForm,
  AreaTitleText,
  Sucessfully,
  MessageDisclaimer,
  AreaLogo,
} from "./styles";

import MessageSecured from "../../components/MessageSecured";
// import { ReactComponent as ImagemLogo } from "src/assets/images/logo.svg";

export const PaginaFormulario = () => {
  return (
    <Container>
      <AreaLogo />
      <AreaTitle>
        <AreaTitleText>
          <TitleForm>Parabéns</TitleForm>
          <SubTitleForm>
            
Você será verificado automaticamente para todos os pedidos futuros.
          </SubTitleForm>
        </AreaTitleText>
      </AreaTitle>
      <Sucessfully>
        Cadastrado com
        <br />
        Sucesso        
      </Sucessfully>
      <MessageDisclaimer>
        You'll be automatically verified for all future orders. Your orders will
        be dispatched without delay.
      </MessageDisclaimer>
      <MessageSecured />
    </Container>
  );
};

export default PaginaFormulario;
