import { styled } from "../../stitches.config";

import BgLogin from "../../assets/images/bgPage.svg";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "row",
  fontSize: "2rem",
  height: "100%",
  border: "1px solid red",
});

export const AreaBg = styled("div", {
  display: "flex",
  backgroundImage: `url(${BgLogin})`,
  width: "50vw",
  minHeight: "100%",
  backgroundSize: "cover",
  "@lg2": {
    width: "0vw",
  },
});

export const AreaForm = styled("div", {
  width: "50vw",
  maxWidth: "550px",
  border: "1px solid red",
  height: "100%",

  backgroundColor: "$white",
  boxSizing: " ",
  padding: "50px 91px",
  "@lg2": {
    backgroundColor: "$white",
    width: "100vw",
    // padding: "34px 25px",
    padding: "0px 0px",
  },
});
