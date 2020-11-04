import { title } from "assets/jss/material-kit-react.js";

const resourceStyle = {
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
  downloads: {
    textAlign: "center"
  },
  button: {
    padding: "10px",
    margin: "10px",
    width: "150px",
    height: "80px",
    textAlign: "center",
    '&:hover': {
      color: "#d1c6b4"
    },
    '&:focus': {
      color: "#d1c6b4"
    },
    '&:active': {
      color: "#d1c6b4"
    },
  },
};

export default resourceStyle;
