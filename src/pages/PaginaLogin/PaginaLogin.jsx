import React from "react";
// import { ReactLoadingCuston } from 'componentes/Loader';
import { Container, AreaBg, AreaForm } from "./styles";

import PaginaFormulario from "./PaginaFormulario";

const PaginaLogin = () => {
  return (
    <Container>
      <AreaBg />
      <AreaForm>
        <PaginaFormulario />
      </AreaForm>
    </Container>
  );
};

export default PaginaLogin;
