import React from "react";
import { BtnButton } from "./styles";

import { ReactComponent as Padlock } from "src/assets/images/icons/padlock.svg";
export const Button = (props) => {
  return (
    <>
      {["submit"].includes(props.type) && (
        <BtnButton type={props.type} name={props.name} {...props}>
          <Padlock width={"9px"} />
          {props.value}
        </BtnButton>
      )}
      {["default"].includes(props.type) && (
        <BtnButton type={props.type} name={props.name}>
          {props.value}
        </BtnButton>
      )}
    </>
  );
};

export default Button;
