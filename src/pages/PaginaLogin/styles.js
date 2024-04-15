import { styled } from "../../stitches.config";

import BgLogin from "../../assets/images/bgPage.svg";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "row",
  fontSize: "2rem",
  height: "100vh",
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
  height: "100%",
  backgroundColor: "$white",
  boxSizing: "border-box",
  padding: "50px 89px 0px 89px",
  "@lg2": {
    backgroundColor: "$white",
    width: "100vw",
    // padding: "34px 25px",
    padding: "0px 0px",
  },
});
