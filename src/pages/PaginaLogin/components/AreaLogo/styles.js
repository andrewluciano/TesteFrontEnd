import { styled } from "src/stitches.config";

export const Container = styled("div", {
  position: "relative",
  display: "flex",
  height: "50px",
  flexDirection: "row",
  alignItems: "center",
  fontSize: "2rem",
  marginBottom: "59px",
  svg: {
    display: "block",
    width: "135px",
    height: "25px",
    "@lg2": {
      display: "none",
    },
  },

  "@lg2": {
    position: "absolute",
    right: "20px",
  },
});
