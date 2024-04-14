import React, { useState, useEffect } from "react";

import { Container, Label, Input, StyledCheckbox, ShowPass } from "./styles";

import json from "src/country";
import SelectCuston from "./select";

export const Inputs = (props) => {
  const validatePhone = (value) => {
    // return value.replace(/^(\+|00)[1-9][0-9 \-\(\)\.]{7,32}$);
  };

  const ActionCheckbox = (value) => {
    setChecked(value.target.checked);
  };
  const [checked, setChecked] = useState(false);
  const [reveal, setReveal] = useState(false);
  const ddi = [];

  const RevealPass = (e) => {
    document.getElementById("password").type === "password"
      ? (document.getElementById("password").type = "text")
      : (document.getElementById("password").type = "password");

    setReveal(!reveal);
  };

  return (
    <>
      {["text", "email", "password"].includes(props.type) && (
        <Container state={props.state}>
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
        <Container state={props.state}>
          <Label>{props.label}</Label>

          <SelectCuston json={json} />
          <Input
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            onKeyDown={validatePhone(this)}
            onKeyUp="((?:(?2-9)?\D{0,3})(?:(?2-9)?\D{0,3})\d{4})"
            {...props}
          />
        </Container>
      )}
      {["checkbox"].includes(props.type) && (
        <Container state={props.state} type={props.type}>
          <StyledCheckbox checked={checked}>
            <input
              type="checkbox"
              onChange={(e) => ActionCheckbox(e)}
              {...props}
            />
          </StyledCheckbox>
          <Label type={props.type}>{props.label}</Label>
        </Container>
      )}
    </>
  );
};

export default Inputs;
