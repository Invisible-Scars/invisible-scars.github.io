import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';

// @material-ui/icons

// core components
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import TeaserSection from "./Sections/TeaserSection.js";
import ProductSection from "./Sections/ProductSection.js";
import PitchSection from "./Sections/PitchSection.js";
import UXMappingSection from "./Sections/UXMappingSection.js";
import PromotionalSection from "./Sections/PromotionalSection.js";
import ResourceSection from "./Sections/ResourceSection.js";
import TeamSection from "./Sections/TeamSection.js";
import MakingfOfSection from "./Sections/MakingfOfSection.js";

import logo from "assets/img/project/logo.png";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5a635b",
    },
    secondary: {
      main: "#d1c6b4",
    },
    info: {
      main: "#5a635b"
    },
    type: "dark",
    background: {
      default: "#525252"
    }
  },
  typography: {
    fontFamily: [
      '"Frutiger LT Std 45 Light"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Parallax filter image={require("assets/img/project/bg-website.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={3}></GridItem>
            <GridItem xs={6} className={classes.imgWrapper}>
              <img src={logo} alt="logo" className={classes.image}/>
            </GridItem>
            <GridItem xs={3}></GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <TeaserSection/>
          <PitchSection />
          <UXMappingSection/>
          <ProductSection />
          <PromotionalSection/>
          <MakingfOfSection/>
          <ResourceSection/>
          <TeamSection />
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  );
}
