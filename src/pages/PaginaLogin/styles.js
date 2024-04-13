import { styled } from "../../stitches.config";

import BgLogin from "../../assets/images/bgPage.svg";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "row",
  border: "1px solid blue",
  fontSize: "2rem",
});

export const AreaBg = styled("div", {
  backgroundImage: `url(${BgLogin})`,
  width: "50vw",
  height: "100vh",
  backgroundSize: "cover",
  "@lg2": {
    width: "0vw",
  },
});

export const AreaForm = styled("div", {
  // backgroundImage:`url(${BgLogin})`,
  width: "50vw",
  maxWidth: "550px",
  // height: "100vh",

  boxSizing: " ",
  padding: "50px 91px",

  "@lg2": {
    backgroundColor: "$whiteSmoke",
    width: "100vw",
    padding: "34px 25px",
  },
});
