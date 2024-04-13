import { styled } from "src/stitches.config";

export const Container = styled("div", {
  position: "absolute",
  boxShadow: "0px 15px 15px rgba(0,0,0,0.25)",
  borderRadius: "100% ",
  backgroundColor: "$white",
  display: "flex",
  flexDirection: "row",
  fontSize: "2rem",
  textAlign: "left",
  height: "50px",
  width: "50px",
  alignContent: "center",
  justifyContent: "center",
  boxSizing: "border-box",
  flexWrap: "wrap",
  fontSize: "$psmall",
  right: "0px",

  "*": {
    boxSizing: "border-box",
  },
  //   "&:after,&:before": {
  //     border: "5px solid $LightYellow",
  //     boxSizing: "inherit",
  //     content: "",
  //     position: "absolute",
  //     width: "100%",
  //     height: "100%",
  //     top: "0px",
  //     left: "0px",
  //     transform: "rotate(245deg)",
  //     borderRadius: "100%",
  //     borderTop: "5px solid $LightYellow",
  //     borderLeftWidth: "5px",
  //     borderRightWidth: "5px",
  //   },
});

export const IndicatorStep = styled("div", {
  justifyContent: "space-around",
  fontFamily: "Source Code Pro News",
  strong: {
    fontSize: "$nwLG",
    fontFamily: "Source Code Pro Extra Bold",

    margin: "0px",
  },
});

export const Circle = styled("div", {
  width: "50px",
  height: "50px",
  border: " 5px solid $LightYellow",
  borderRadius: " 50px",
  position: " absolute",
  top: "0px",
  left: "0px",
  rotate: "75deg",
  clip: " rect(0px, 20px, 20px, 0px)",
});
