import { title } from "assets/jss/material-kit-react.js";

const productStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  playerWrapper: {
    position: "relative",
    paddingTop: "56.25%" /* Player ratio: 100 / (1280 / 720) */
  },
  reactPlayer: {
    position: "absolute",
    top: "0",
    left: "0"
  }
};

export default productStyle;
