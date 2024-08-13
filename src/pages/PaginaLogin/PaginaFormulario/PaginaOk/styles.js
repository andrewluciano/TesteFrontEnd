import { styled } from "src/stitches.config";
import IconCongrats from "src/assets/images/icons/icon-congrats.svg";
import ImagemLogo from "src/assets/images/logo.svg";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  fontSize: "2rem",
  textAlign: "left",
  maxWidth: "550px",
  width: "100%",
  height: "90%",
  backgroundColor: "#fff",
  boxSizin: "border-box",
  padding: "0px 0px 0px 0px",

  ".AreaLogo": {
    div: {
      display: "none",
    },
  },
  ".AreaPageOk": {
    "@lg2": {
      width: "90%",
      minWidth: "325px",
    },
  },
  "@lg2": {
    border: "1px solid blue",
    width: "100vw",
    height: "100vh",
    alignItems: "center",
    backgroundColor: "$whiteSmoke",
    // padding: "50px 25px 0px 25px",
    boxSizing: "border-box",
    svg: {
      display: "flex",
      position: "relative",

      left: "0px",
      zIndex: "9999999999",
    },
  },
});

export const AreaLogo = styled("div", {
  position: "relative",
  display: "flex",
  height: "25px",
  flexDirection: "row",
  alignItems: "center",
  fontSize: "2rem",
  marginBottom: "55px",

  width: "99%",
  backgroundImage: `url(${ImagemLogo})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "left center",
  backgroundSize: "135px 25px",

  "@lg2": {
    width: "auto",
    width: "90%",
    minWidth: "325px",
    marginBottom: "53px",
    margin: "20px 0px 53px 0",
  },
});

export const AreaTitle = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  maxWidth: "450px",

  "@lg2": {
    flexDirection: "row",
    justifyContent: "top",
    alignItems: "top",
    alignContent: "top",
    padding: "34px 25px 20px 25px",
    display: "none",
    minWidth: "325px",
    width: "383px",
  },
});
export const AreaTitleText = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  "@lg2": {
    gap: "14px",
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
    display: "none",
  },
});

export const SubTitleForm = styled("h4", {
  fontFamily: "Source Code Pro Light",
  fontSize: "1.125rem",
  fontWeight: "Light",
  margin: "0px",
  padding: "0px",

  "@lg2": {
    fontFamily: "Source Code Pro Regular",
    lineHeight: "0.9375rem",
    fontSize: "0.875rem",
    textAlign: "center",
    padding: "0 80px",
  },
});

export const Sucessfully = styled("div", {
  display: "flex",
  fontFamily: "Source Code Pro Extra Bold",
  fontSize: "1.2rem",
  backgroundColor: "$LightYellow",
  backgroundImage: `url(${IconCongrats})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "67px center",
  backgroundSize: "75px",
  boxSizing: "border-box",
  padding: "56px 67px 56px 159px",
  boxShadow: "0px 25px 25px rgba(0,0,0,0.25)",
  zIndex: "99",
  borderRadius: "30px",
  minWidth: "325px",
  width: "383px",
  maxWidth: "383px",
  // width: "90%",
  marginTop: "60px",
  "@lg2": {
    alignItems: "center",
    margin: "0px",
    justifyContent: "center",
    backgroundPosition: "center 40px",
    backgroundSize: "50px",
    padding: "135px 67px 76px 67px",
    textAlign: "center",
    fontSize: "1rem",
    height: "193px",
    minWidth: "325px",
    boxShadow: "0px 5px 15px rgba(0,0,0,0.25)",

    width: "90%",
    maxWidth: "initial",
  },
});

export const MessageDisclaimer = styled("div", {
  display: "none",
  boxSizing: "border-box",

  "@lg2": {
    position: "relative",
    display: "flex",
    alignItems: "center",
    fontFamily: "Source Code Pro Regular",
    lineHeight: "0.9375rem",
    fontSize: "0.875rem",
    textAlign: "center",
    padding: "0 80px",
    borderRadius: "0 0 30px 30px",

    height: "158px",

    zIndex: "9",
    marginBottom: "19px",
    top: "-30px",
    boxSizing: "border-box",
    padding: "70px 20px 40px 20px",
    backgroundColor: "#fff",
    boxShadow: "0px 1px 3px rgba(0,0,0,0.1)",
    "@lg2": {
      width: "90%",
      minWidth: "325px",
    },
  },
});
