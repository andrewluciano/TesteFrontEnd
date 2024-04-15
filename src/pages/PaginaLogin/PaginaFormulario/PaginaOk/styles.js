import { styled } from "src/stitches.config";
import IconCongrats from "src/assets/images/icons/icon-congrats.svg";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  fontSize: "2rem",
  textAlign: "left",
  maxWidth: "550px",
  width: "100%",
  height: "100vh",
  backgroundColor: "#fff",
  position: "absolute",
  top: "0px",
  padding: "50px 0px 0px 0px",
  zIndex: "9999",
  ".AreaLogo": {
    div: {
      display: "none",
    },
  },
});
export const AreaTitle = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "10px",

  "@lg2": {
    flexDirection: "row",
    justifyContent: "top",
    alignItems: "top",
    alignContent: "top",
    padding: "34px 25px 20px 25px",
  },
});
export const AreaTitleText = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "20px",

  "@lg2": {
    gap: "14px",
    width: "50%",
  },
});

export const TitleForm = styled("h2", {
  fontFamily: "Source Code Pro Extra Bold",
  fontSize: "2rem",
  fontWeight: "500",
  margin: "0px",
  padding: "0px",
  "@lg2": {
    fontSize: "1.1875rem",
  },
});

export const SubTitleForm = styled("h4", {
  fontFamily: "Source Code Pro Light",
  fontSize: "1.125rem",
  fontWeight: "Light",
  margin: "0px",
  padding: "0px",
  "@lg2": {
    fontSize: "0.875rem",
  },
});

export const Sucessfully = styled("div", {
  fontFamily: "Source Code Pro Extra Bold",
  fontSize: "1.5rem",
  backgroundColor: "$LightYellow",
  backgroundImage: `url(${IconCongrats})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "67px center",
  backgroundSize: "75px",
  boxSizing: "border-box",
  padding: "76px 67px 76px 169px",
  boxShadow: "0px 25px 25px rgba(0,0,0,0.25)",
  borderRadius: "30px",
  maxWidth: "383px",
  marginTop: "60px",
});
