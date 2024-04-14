import { styled } from "src/stitches.config";

export const BtnButton = styled("button", {
  fontFamily: "Source Code Pro Light",
  minwidth: "auto",
  fontSize: "0.875rem",
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  height: "70px",
  borderRadius: "35px",
  padding: "28px 30px",
  cursor: "pointer",
  margin: "0px 0px",
  backgroundColor: "#fff",
  color: "#000",
  border: "1px solid #121212",
  transition: "all 0.2s ease-in-out",
  "@lg2": {
    justifyContent: "center",
  },
  variants: {
    type: {
      submit: {
        border: "0",
        backgroundColor: "$LightYellow",
        fontFamily: "Source Code Pro Extra Bold",
        "@lg2": {
          justifyContent: "center",
        },
      },
    },
    disabled: {
      true: {
        backgroundColor: "#979797",
        cursor: "not-allowed",
        pointerEvents: "none",

        "&:hover": {
          backgroundColor: "#979797",
        },

        "&:active": {
          backgroundColor: "#979797",
        },
      },
    },
  },
});
