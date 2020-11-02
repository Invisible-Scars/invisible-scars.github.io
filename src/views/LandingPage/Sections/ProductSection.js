import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Product</h2>
          <h5 className={classes.description}>
          TODO: the product. Final video. Other related things. Apply colors to theme. Add final report pdf. Add teaser video. Edit team info. Adjust web name, icon. Set PWA.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
