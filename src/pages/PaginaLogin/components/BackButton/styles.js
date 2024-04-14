import { styled } from "src/stitches.config";
import arrowLeft from "src/assets/images/icons/arrow-left.svg";

export const Container = styled("a", {
  position: "relative",
  width: "44px",
  height: "44px",
  borderRadius: "100%",
  backgroundColor: "$grey",
  backgroundImage: `url(${arrowLeft})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  textIndent: "-9000px",
  marginBottom: "20px",
  "@lg2": {
    top: "-3px",
    width: "24px",
    height: "24px",
    backgroundSize: "7.5px",
  },
});
