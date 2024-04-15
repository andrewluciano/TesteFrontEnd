import { styled } from "src/stitches.config";
import iconChecked from "src/assets/images/icons/icon-checked.svg";
import IcoShowPass from "src/assets/images/icons/ShowPass.svg";
// import * as Checkbox from '@radix-ui/react-checkbox';
export const AreaCustonSelect = styled("div", {
  position: "relative",
  top: "-3px",
  display: "flex",
  verticalAlign: "center",
  justifyContent: "center",
  zIndex: "9999",
  fontFamily: "Source Code Pro News",
  fontSize: "0.8rem",
  height: "20px",

  ".CountryMobile__input-container": {
    outline: "none",
    "&:focus-visible": {
      outline: "none",
      border: "none",
    },
    "*:focus-visible": {
      outline: "none",
      border: "none",
    },
    "*": {
      outline: "none",
      border: "none",
    },
    input: {
      "&:focus-visible": {
        outline: "none",
        border: "none",
      },
      "*:focus-visible": {
        outline: "none",
        border: "none",
      },

      outline: "none",
      border: "none",
    },
  },
  img: {
    borderRadius: "100%",
    width: "20px",
    height: "20px",
    // padding: "5px",
    boxSizing: "border-box",
    // height: "20px",
    marginRight: "5px",
  },
  ".CountryMobile__menu": {
    width: "100px",
    fontSize: "0.6rem",
  },
  ".CountryMobile__control": {
    position: "relative",
    top: "-1px",
    padding: "0px",
    minHeight: "20px",
    border: "0",
    borderRadius: "0",
    margin: "0px 10px 0px 0px",
    boxShadow: "0 0 0 transparent",
    "@lg2": {
      backgroundColor: "transparent",
    },
    "&:hover": {
      borderColor: "transparent",
      border: "none",
    },
  },

  ".CountryMobile__value-container": {
    padding: "0px",
    border: "0",
    width: "50px",
    fontSize: "1rem",
  },
  ".CountryMobile__indicator": {
    padding: "0px",
    border: "0",
    svg: {
      fill: "000",
      color: "#000",
    },
  },
  ".CountryMobile__menu": {
    padding: "0px",
    border: "0",
  },
  ".CountryMobile__indicator-separator": {
    display: "none",
  },
});
export const Container = styled("div", {
  position: "relative",
  boxSizing: "border-box",
  display: "flex",
  padding: "17px 20px",
  borderRadius: "50px",
  border: "1px solid #777777",
  height: "50px",
  margin: "10.5px 0",
  "&.NoValidate": {
    color: "$Warning",
    borderColor: "$Warning",
  },
  variants: {
    state: {
      true: {},
      false: {
        color: "$Warning",
        borderColor: "$Warning",
      },
    },
    type: {
      checkbox: {
        border: "0",
        alignItems: "center",
        display: "flex",
        gap: "16px",
        borderRadius: "0",
        padding: "0",
        margin: "24px 0px 13px 0px",
        height: "auto",
        padding: "0px",
      },
    },
  },
});
export const Label = styled("label", {
  position: "absolute",
  left: "19px",
  top: "-12px",
  fontSize: "0.75rem",
  fontFamily: "Source Code Pro Extra Bold",
  backgroundColor: "#fff",
  padding: "4px 5px",
  height: "16px",

  boxSizing: "border-box",
  "@lg2": {
    backgroundColor: "$whiteSmoke",
  },
  variants: {
    type: {
      checkbox: {
        fontFamily: "Source Code Pro News",
        zIndex: "0",
        height: "auto",
        position: "relative",
        top: "initial",
        left: "initial",
        padding: "0",
      },
    },
  },
});

export const Input = styled("input", {
  fontFamily: "Source Code Pro Light",
  fontSize: "1rem",
  color: "#000",
  border: "0",
  width: "100%",
  outlineStyle: "none",
  backgroundColor: "transparent",
  "&:placeholder": {
    color: "#ACA99F",
  },
});

export const StyledCheckbox = styled("a", {
  position: "relative",
  display: "block",
  minWidth: "24px",
  height: "24px",
  zIndex: "9",
  borderRadius: "4px",
  border: "1px solid #777777",
  backgroundColor: "#fff",
  color: "#000",
  boxSizing: "border-box",
  outlineStyle: "none",

  variants: {
    checked: {
      true: {
        backgroundColor: "$LightYellow",
        border: "1px solid $LightYellow",
        backgroundImage: `url(${iconChecked})`,
        backgroundSize: "15px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
    },
  },
  "&:focus": {
    outline: "none",
    boxShadow: "inset 0 0 0 1px dodgerblue, 0 0 0 1px dodgerblue",
  },
  input: {
    position: "absolute",
    top: "-3px",
    left: "-4px",
    opacity: "0",
    cursor: "pointer",
    height: "100%",
    width: "100%",
  },
});

export const ShowPass = styled("a", {
  position: "relative",
  top: "-0px",
  width: "22px",
  height: "15px",
  backgroundImage: `url(${IcoShowPass})`,
  backgroundSize: "22px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  variants: {
    reveal: {
      true: {
        opacity: "1",
      },
      false: {
        opacity: "0.25",
      },
    },
  },
});

// Conteudo de Select
