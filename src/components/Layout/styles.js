import { styled } from "@/stitches.config";

export const MainLayout = styled("div", {
  display: "flex",
  maxWidth: "1440px",
  height: "auto",
  color: "$nwBlue900",
  flexDirection: "row",

  margin: "0px auto",
  // padding: '$16',

  "@lg2": {
    maxWidth: "initial",
    flexDirection: "column",
  },
});

export const BlocoCentral = styled("div", {
  display: "flex",
  width: "100%",
  maxWidth: "1041px",
  borderLeft: "1px solid #E5E7EB",
  borderRight: "1px solid #E5E7EB",
  height: "100%",

  color: "$nwBlue900",
  flexDirection: "column",
  // padding: '$16',
  // backgroundColor: 'white',

  "@lg2": {
    maxWidth: "1024px",
  },
  "@md2": {
    border: "none",
  },
});
