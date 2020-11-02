import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

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

import logo from "assets/img/project/logo.png";

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();

  return (
    <div>
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
          <ProductSection />
          <PitchSection />
          <UXMappingSection/>
          <PromotionalSection/>
          <ResourceSection/>
          <TeamSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
