import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// video
import { Player } from 'video-react';
import posterImg from 'assets/img/project/poster.png';

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10}>
          <h2 className={classes.title}>Product</h2>
          <Player
            poster={posterImg}
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
