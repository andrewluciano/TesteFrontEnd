import { styled } from "src/stitches.config";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  fontSize: "2rem",
  textAlign: "left",
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

export const AreaForm = styled("form", {
  display: "flex",
  flexDirection: "column",
  margin: "51px 0px 0 0 ",
  boxSizing: "border-box",
  "@lg2": {
    margin: "0",
  },
});
export const AreaInputs = styled("form", {
  display: "flex",
  flexDirection: "column",
  "@lg2": {
    padding: "15px 25px 0px 25px",
  },
});

export const ButtonAreas = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  margin: "0px 0px",
  padding: "40px 0px 0px 0px",

  "@lg2": {
    backgroundColor: "#fff",
    borderTop: "1px solid #D6D7DD",
    padding: "20px 25px",
    flexDirection: "column",
  },
});
