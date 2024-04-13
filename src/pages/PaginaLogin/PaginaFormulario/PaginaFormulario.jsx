import React, { useState } from "react";
import {
  Container,
  AreaTitle,
  TitleForm,
  SubTitleForm,
  AreaForm,
  ButtonAreas,
  AreaTitleText,
} from "./styles";
import Inputs from "src/components/Input";
import Button from "src/components/Button";
import AreaLogo from "../components/AreaLogo";
import BackButton from "../components/BackButton";

export const PaginaFormulario = () => {
  const [stateForm, setstateForm] = useState(true);
  const [formDisabled, setFormDisabled] = useState(true);

  const fieldsValidade = {
    name: false,
    email: false,
    mobile: false,
    password: false,
    terms: false,
  };

  const TermsReturn = (e) => {
    console.log(e.target.checked);
    setFormDisabled(!e.target.checked);
    fieldsValidade.terms = e.target.checked;

    console.log(fieldsValidade);
  };
  const validateForm = (e) => {
    console.log(e.target[0]);
    console.log(fieldsValidade);
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
      <AreaForm action="#" onSubmit={(e) => validateForm(e)}>
        <Inputs
          state={stateForm}
          type="text"
          name="teste de envio"
          label="Full Name"
          placeholder="Please type in..."
          required
        />
        <Inputs
          state={stateForm}
          type="email"
          name="teste de envio"
          label="Email"
          placeholder="Please type in..."
        />
        <Inputs
          state={stateForm}
          type="mobile"
          name="teste de envio"
          label="Mobile"
          placeholder="Please type in..."
          required
        />
        <Inputs
          state={stateForm}
          type="password"
          id="password"
          name="teste de envio"
          label="Password"
          placeholder="Please type in..."
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
        <ButtonAreas>
          <Button value="Save" type="submit" disabled={formDisabled} />
          <Button value="Got a VerifyMyAge account? Sign in" type="default" />
        </ButtonAreas>
      </AreaForm>
    </Container>
  );
};

export default PaginaFormulario;
