import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import uxMappingImg from "assets/img/project/UXMap.png";

import styles from "assets/jss/material-kit-react/views/landingPageSections/uxmappingStyle.js";

const useStyles = makeStyles(styles);

export default function UXMappingSection(props) {
  const classes = useStyles();
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (

    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>UX Mapping</h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12}>
            <img
              alt="..."
              src={uxMappingImg}
              className={navImageClasses}
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
