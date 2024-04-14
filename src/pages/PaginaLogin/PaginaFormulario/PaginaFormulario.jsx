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

export const PaginaFormulario = () => {
  const [stateForm, setstateForm] = useState(true);
  const [formDisabled, setFormDisabled] = useState(true);

  const fieldsValidade = [
    { name: false, email: false, mobile: false, password: false, terms: false },
  ];

  const TermsReturn = (e) => {
    console.log(e.target.checked);
    setFormDisabled(!e.target.checked);
    fieldsValidade.terms = e.target.checked;

    console.log(fieldsValidade);
  };
  const validateForm = (e) => {
    setstateForm(false);

    console.log(fieldsValidade[0]);
  };

  const ActionValidateField = (e) => {
    const field = e.target;

    console.log(field.name);
    // const isEmpty = !e.target.target.trim().length;
    // alert(isEmpty);

    if (field.name === "email") {
      field.value
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        ) === null
        ? (fieldsValidade[0][field.name] = false)
        : (fieldsValidade[0][field.name] = true);
    }
    if (field.name === "name") {
      field.value !== ""
        ? (fieldsValidade[0][field.name] = true)
        : (fieldsValidade[0][field.name] = false);
    }
    if (field.name === "password") {
      field.value !== ""
        ? (fieldsValidade[0][field.name] = true)
        : (fieldsValidade[0][field.name] = false);
    }
  };

  return (
    <Container>
      <AreaLogo />
      <AreaTitle>
        <BackButton />
        <AreaTitleText>
          <TitleForm>Join VerifyMyAge</TitleForm>
          <SubTitleForm>
            Lets start by setting up your login details.
          </SubTitleForm>
        </AreaTitleText>
      </AreaTitle>
      <AreaForm action="javascript:void(0);" onSubmit={(e) => validateForm(e)}>
        <AreaInputs>
          <Inputs
            state={stateForm}
            type="text"
            name="name"
            label="Full Name"
            placeholder="Please type in..."
            required
            onBlur={(e) => ActionValidateField(e)}
          />
          <Inputs
            state={stateForm}
            type="email"
            name="email"
            label="Email"
            onBlur={(e) => ActionValidateField(e)}
            placeholder="Please type in..."
          />
          <Inputs
            state={stateForm}
            type="mobile"
            name="mobile"
            label="Mobile"
            placeholder="Please type in..."
            required
          />
          <Inputs
            state={stateForm}
            type="password"
            id="password"
            name="password"
            label="Password"
            placeholder="Please type in..."
            onBlur={(e) => ActionValidateField(e)}
            required
          />
          <Inputs
            state={stateForm}
            type="checkbox"
            name="teste de envio"
            label="Tick this box to confirm you’ve read and agreed to our Terms and Privacy Policy."
            placeholder="Please type in..."
            onClick={(e) => TermsReturn(e)}
          />
          <MessageSecured />
        </AreaInputs>

        <ButtonAreas>
          <Button value="Save" type="submit" disabled={formDisabled} />
          <Button value="Got a VerifyMyAge account? Sign in" type="default" />
        </ButtonAreas>
      </AreaForm>
    </Container>
  );
};

export default PaginaFormulario;
