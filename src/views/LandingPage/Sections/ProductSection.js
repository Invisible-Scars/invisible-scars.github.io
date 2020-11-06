import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// video
import ReactPlayer from 'react-player/lazy';

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10}>
          <h2 className={classes.title}>Product</h2>
          <div className={classes.playerWrapper}>
            <ReactPlayer
              className={classes.reactPlayer}
              url='https://vimeo.com/476370606'
              width='100%'
              height='100%'
            />
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
