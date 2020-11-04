import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Instagram from "@material-ui/icons/Instagram";
import Videocam from "@material-ui/icons/Videocam";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

// social mocks
import fbpageMockup from "assets/img/project/promotional/fbpage-mockup.png";
import instaMockup from "assets/img/project/promotional/insta-mockup.png";
import instastoryMockup from "assets/img/project/promotional/instastory-mockup.png";

// merchandise mocks
import tshirtMockup from "assets/img/project/promotional/tshirt-mockup.png";
import militarytagMockup from "assets/img/project/promotional/militarytag-mockup.png";

// advertising mocks
import posterMockup from "assets/img/project/promotional/poster-mockup.png";
import flyersMockup from "assets/img/project/promotional/flyers-mockup.png";

import styles from "assets/jss/material-kit-react/views/landingPageSections/promotionalStyle.js";

const useStyles = makeStyles(styles);

export default function PromotionalSection() {
  const classes = useStyles();
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Promotional Content</h2>
        </GridItem>
        <GridItem xs={12} sm={12} md={10} className={classes.navWrapper}>
          <NavPills
            alignCenter
            color="primary"
            tabs={[
              {
                tabButton: "Social",
                tabIcon: Instagram,
                tabContent: (
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={6} md={4}>
                      <img
                        alt="..."
                        src={instaMockup}
                        className={navImageClasses}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={5} md={3}>
                      <img
                        alt="..."
                        src={instastoryMockup}
                        className={navImageClasses}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={10} md={8}>
                      <img
                        alt="..."
                        src={fbpageMockup}
                        className={navImageClasses}
                      />
                    </GridItem>
                  </GridContainer>
                )
              },
              {
                tabButton: "Merchandise",
                tabIcon: Camera,
                tabContent: (
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={9} md={7}>
                      <img
                        alt="..."
                        src={tshirtMockup}
                        className={navImageClasses}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={9} md={7}>
                      <img
                        alt="..."
                        src={militarytagMockup}
                        className={navImageClasses}
                      />
                    </GridItem>
                  </GridContainer>
                )
              },
              {
                tabButton: "Advertising",
                tabIcon: Videocam,
                tabContent: (
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={9} md={7}>
                      <img
                        alt="..."
                        src={posterMockup}
                        className={navImageClasses}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={9} md={7}>
                      <img
                        alt="..."
                        src={flyersMockup}
                        className={navImageClasses}
                      />
                    </GridItem>
                  </GridContainer>
                )
              }
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
