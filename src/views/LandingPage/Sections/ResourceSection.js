import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from '@material-ui/core/Button';

import styles from "assets/jss/material-kit-react/views/landingPageSections/resourceStyle.js";

// files
import PitchSlides from "assets/files/pitch-slides.pdf";
import PitchReport from "assets/files/pitch-report.pdf";
import ProjectReport from "assets/files/project-report.pdf";
import BMC from "assets/files/bmc.pdf";
import Storyboard from "assets/files/storyboard.pdf";

const useStyles = makeStyles(styles);

export default function ResourceSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Resources</h2>
        </GridItem>
        <GridItem xs={12} sm={12} md={8} className={classes.downloads}>
          <Button
            variant="contained"
            className={classes.button}
            color="primary"
            href={ProjectReport}
            target="_blank"
            >
            Project Report
          </Button>
          <Button
            variant="outlined"
            className={classes.button}
            color="primary"
            href={BMC}
            target="_blank"
            >
            BMC
          </Button>
          <Button
            variant="outlined"
            className={classes.button}
            color="primary"
            href={Storyboard}
            target="_blank"
            >
            Storyboard
          </Button>
          <Button
            variant="outlined"
            className={classes.button}
            color="primary"
            href={PitchSlides}
            target="_blank"
            >
            Pitch Slides
          </Button>
          <Button
            variant="outlined"
            className={classes.button}
            color="primary"
            href={PitchReport}
            target="_blank"
            >
            Pitch Report
          </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}
