import React, { useState } from "react";
import {
  Container,
  AreaTitle,
  TitleForm,
  SubTitleForm,
  AreaForm,
  AreaInputs,
  ButtonAreas,
  AreaTitleText,
} from "./styles";
import Inputs from "src/components/Input";
import Button from "src/components/Button";
import AreaLogo from "../components/AreaLogo";
import BackButton from "../components/BackButton";
import MessageSecured from "../components/MessageSecured";

// Modal
import PaginaOk from "./PaginaOk";

export const PaginaFormulario = () => {
  const [stateForm, setstateForm] = useState(true);
  const [formDisabled, setFormDisabled] = useState(true);

  const [fieldsValidade, setfieldsValidade] = useState([
    { name: false, email: false, mobile: false, password: false, terms: false },
  ]);
  const [ModalOk, setModalOk] = useState(false);

  // TERMS
  const TermsReturn = (e) => {
    fieldsValidade[0]["terms"] = e;
    setFormDisabled(!e);
  };

  // FORM VALIDATE
  const validateForm = (e) => {
    e.preventDefault();
    const Keys = Object.keys(fieldsValidade[0]);
    const Values = Object.values(fieldsValidade[0]);

    let field = "";

    // fieldsValidade;

    Values.filter((res, key) => {
      field = Keys[key].toString();

      if (res === false && field !== "terms") {
        document.getElementById(field).classList.add("NoValidate");
      } else if (field !== "terms") {
        document.getElementById(field).classList.remove("NoValidate");
      }
    });
    // if (fieldsValidade[0].name === false) {
    //   document.getElementById("name").classList.add("NoValidate");
    // }

    if (Values.indexOf(false) === -1) {
      setModalOk(true);
    }
  };
  const ActionValidateFieldEmail = (e) => {
    const field = e.target;

    if (field.name === "email") {
      if (
        field.value
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          ) === null
      ) {
        fieldsValidade[0].email = false;
        document.getElementById(field.name).classList.add("NoValidate");
      } else {
        fieldsValidade[0].email = true;
        document.getElementById(field.name).classList.remove("NoValidate");
      }
    }
  };
  const ActionValidateFieldPassword = (e) => {
    const field = e.target;
    if (field.name === "password") {
      if (field.value !== "") {
        fieldsValidade[0].password = true;
        document.getElementById(field.name).classList.remove("NoValidate");
      } else {
        fieldsValidade[0].password = false;
        document.getElementById(field.name).classList.add("NoValidate");
      }
    }
  };
  const ActionValidateFieldMobile = (e) => {
    const field = e.target;
    if (field.name === "mobile") {
      if (field.value !== "") {
        fieldsValidade[0].mobile = true;
        document.getElementById(field.name).classList.remove("NoValidate");
      } else {
        fieldsValidade[0].mobile = false;
        document.getElementById(field.name).classList.add("NoValidate");
      }
    }
  };
  const ActionValidateFieldName = (e) => {
    const field = e.target;

    if (field.name === "name") {
      if (field.value !== "") {
        fieldsValidade[0].name = true;
        document.getElementById(field.name).classList.remove("NoValidate");
      } else {
        fieldsValidade[0].name = false;
        document.getElementById(field.name).classList.add("NoValidate");
      }
    }
  };

  return (
    <Container>
      {!ModalOk && (
        <>
          <AreaLogo />
          <AreaTitle>
            <BackButton />
            <AreaTitleText>
              <TitleForm>Entrar Empresa Genérica</TitleForm>
              <SubTitleForm>
              Vamos começar configurando seus dados de login.
              </SubTitleForm>
            </AreaTitleText>
          </AreaTitle>
          <AreaForm onSubmit={(e) => validateForm(e)}>
            <AreaInputs>
              <Inputs
                state={stateForm}
                type="text"
                name="name"
                label="Nome Completo"
                placeholder="Digite..."
                required
                onBlur={(e) => ActionValidateFieldName(e)}
              />
              <Inputs
                state={stateForm}
                type="email"
                name="email"
                label="Email"
                onBlur={(e) => ActionValidateFieldEmail(e)}
                placeholder="Digite..."
              />
              <Inputs
                state={stateForm}
                type="mobile"
                name="mobile"
                blur={(e) => ActionValidateFieldMobile(e)}
                label="Telefone"
                placeholder="Telefone..."
                required
              />
              <Inputs
                state={stateForm}
                type="password"
                id="password"
                name="password"
                label="Senha"
                placeholder="Digite..."
                onBlur={(e) => ActionValidateFieldPassword(e)}
                required
              />
              <Inputs
                state={stateForm}
                type="checkbox"
                name="teste de envio"
                label="Confirme que você leu e concordou com nossos Termos e Politica de Privacidade."
                placeholder="Digite..."
                onClick={(e) => TermsReturn(e)}
              />
              <MessageSecured />
            </AreaInputs>

            <ButtonAreas>
              <Button value="Cadastrar" type="submit" disabled={formDisabled} />
              <Button
                value="Tenho uma conta EG? Entrar"
                type="default"
              />
            </ButtonAreas>
          </AreaForm>
        </>
      )}
      {ModalOk && <PaginaOk />}
    </Container>
  );
};

export default PaginaFormulario;
