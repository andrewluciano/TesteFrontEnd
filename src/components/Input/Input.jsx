import React, { useState, useEffect } from "react";

import { Container, Label, Input, StyledCheckbox, ShowPass } from "./styles";
import InputMask from "react-input-mask";

import json from "src/country";
import SelectCuston from "./select";

import maskList from "src/helpers/format/maskMobile/maskList";

export const Inputs = (props) => {
  const validatePhone = (value) => {
    console.log(props);
    console.log(value.target.value);
    props.blur(value);
  };

  const ActionCheckbox = (value) => {
    setChecked(value.target.checked);
    props.onClick(value.target.checked);
  };
  const [checked, setChecked] = useState(false);
  const [reveal, setReveal] = useState(false);

  const RevealPass = (e) => {
    document.getElementById("password").type === "password"
      ? (document.getElementById("password").type = "text")
      : (document.getElementById("password").type = "password");

    setReveal(!reveal);
  };

  const [CoutrySelected, setCoutrySelected] = useState("+44");
  const [MaskSelectedCountry, setMaskSelectedCountry] =
    useState("99 9999 9999");
  const modifyCountryMobile = (e) => {
    setCoutrySelected(e.label);
    const Ele = maskList.filter((res) => res.code === e.label);
    setMaskSelectedCountry(Ele[0].mask);
  };

  return (
    <>
      {["text", "email", "password"].includes(props.type) && (
        <Container state={props.state} id={props.name} className={props.name}>
          <Label>{props.label}</Label>

          <Input
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            id={props.id}
            required
            {...props}
          />

          {["password"].includes(props.type) && (
            <ShowPass reveal={reveal} onClick={(e) => RevealPass(e)} />
          )}
        </Container>
      )}

      {["mobile"].includes(props.type) && (
        <Container state={props.state} id={props.name} className={props.name}>
          <Label>{props.label}</Label>
          <SelectCuston json={json} change={(e) => modifyCountryMobile(e)} />

          <InputMask
            mask={MaskSelectedCountry}
            value={props.value}
            onChange={props.onChange}
            onBlur={(e) => validatePhone(e)}
          >
            {(inputProps) => (
              <Input
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                style={{ paddingTop: "5px" }}
                {...props}
              />
            )}
          </InputMask>
        </Container>
      )}
      {["checkbox"].includes(props.type) && (
        <Container
          state={props.state}
          type={props.type}
          id={props.name}
          className={props.name}
        >
          <StyledCheckbox checked={checked}>
            <input
              type="checkbox"
              onChange={(e) => ActionCheckbox(e)}
              {...props}
            />
          </StyledCheckbox>
          <Label type={props.type}>
            Tick this box to confirm you’ve read and agreed to our{" "}
            <a href="">Terms</a> and <a href="">Privacy Policy</a>.
          </Label>
        </Container>
      )}
    </>
  );
};

export default Inputs;
