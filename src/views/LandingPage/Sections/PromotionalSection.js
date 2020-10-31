import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/promotionalStyle.js";

const useStyles = makeStyles(styles);

export default function PromotionalSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Promotional</h2>
          <h5 className={classes.description}>
          TODO: promotional materials (a short video teaser is mandatory)
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
