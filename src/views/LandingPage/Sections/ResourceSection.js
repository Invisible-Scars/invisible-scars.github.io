import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/resourceStyle.js";

const useStyles = makeStyles(styles);

export default function ResourceSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Resource</h2>
          <h5 className={classes.description}>
          TODO: project report and other downloadable content
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
