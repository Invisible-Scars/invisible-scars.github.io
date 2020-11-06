/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// styles
import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} md={6} className={classes.left}>
            Check this website code on { }
            <a
              href="https://github.com/Invisible-Scars/invisible-scars.github.io"
              className={aClasses}
              target="_blank"
            ><i className={classes.socials + " fab fa-github"} /> Github</a>
          </GridItem>
          <GridItem xs={12} md={6} className={classes.right}>
            2020 | Made for { }
            <a
              href="https://sites.google.com/a/gcloud.fe.up.pt/laboratorio-multimedia/"
              className={aClasses}
              target="_blank"
            >Multimedia Lab (MM/FEUP)</a>
          </GridItem>
        </GridContainer>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
