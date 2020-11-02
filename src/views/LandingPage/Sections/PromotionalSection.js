import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Instagram from "@material-ui/icons/Instagram";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import poster from "assets/img/project/promotional/poster.png";
import post1 from "assets/img/project/promotional/post1.png";
import post2 from "assets/img/project/promotional/post2.png";
import instastory from "assets/img/project/promotional/instastory.png";

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
                tabButton: "Posters",
                tabIcon: Camera,
                tabContent: (
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                      <img
                        alt="..."
                        src={post1}
                        className={navImageClasses}
                      />
                      <img
                        alt="..."
                        src={post2}
                        className={navImageClasses}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <img
                        alt="..."
                        src={poster}
                        className={navImageClasses}
                      />
                    </GridItem>
                  </GridContainer>
                )
              },
              {
                tabButton: "Instagram",
                tabIcon: Instagram,
                tabContent: (
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={6}>
                      <img
                        alt="..."
                        src={instastory}
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
