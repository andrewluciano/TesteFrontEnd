import { styled } from "src/stitches.config";

export const Container = styled("div", {
  position: "relative",
  display: "flex",
  height: "50px",
  flexDirection: "row",
  alignItems: "center",
  fontSize: "2rem",
  marginBottom: "55px",

  svg: {
    display: "block",
    width: "160px",
    height: "26px",
    "@lg2": {
      display: "none",
    },
  },

  "@lg2": {
    position: "absolute",
    right: "20px",
  },
});
