import { styled } from "src/stitches.config";

export const Container = styled("div", {
  display: "none",
  "@lg2": {
    width: "100%",
    display: "flex",
    borderTop: "1px solid #b9b9b9",
    padding: "13px 0px",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    flexWrap: "wrap",
    // fontSize: "$psmall",
    color: "#B9B9B9",
    fontFamily: "Source Code Pro News",
    fontSize: "0.635625rem",
    margin: "0px auto 12px auto",
    gap: "7px",

    p: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxSizing: "border-box",
      display: "flex",
      padding: "0 0 0 0",

      margin: "0px",
    },
    img: {
      position: "relative",
      display: "flex",
      margin: "0px",
      filter: "grayscale(100%)",
      "&.PadLock": {
        top: "-1px",
        opacity: "0.3",
        widht: "10px",
        height: "11px",
      },
    },
  },
});
