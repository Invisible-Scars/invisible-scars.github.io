import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import storyboard1 from "assets/img/project/makingof/storyboard-1.jpg";
import storyboard2 from "assets/img/project/makingof/storyboard-2.jpg";
import storyboard3 from "assets/img/project/makingof/storyboard-3.jpg";
import storyboard4 from "assets/img/project/makingof/storyboard-4.jpg";
import storyboard5 from "assets/img/project/makingof/storyboard-5.jpg";
import heartbeat28 from "assets/img/project/makingof/heartbeat-28.jpg";
import heartbeat29 from "assets/img/project/makingof/heartbeat-29.jpg";

import styles from "assets/jss/material-kit-react/views/landingPageSections/makinfOfStyle.js";

const useStyles = makeStyles(styles);

export default function MakingfOfSection() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Making Of</h2>
        </GridItem>
        <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
          <Card carousel>
            <Carousel {...settings}>
              <div>
                <img src={storyboard1} alt="Storyboard 1" className="slick-image" />
                <div className="slick-caption">
                  <h4>
                    Storyboard #1
                  </h4>
                </div>
              </div>
              <div>
                <img src={storyboard2} alt="Storyboard 2" className="slick-image" />
                <div className="slick-caption">
                  <h4>
                    Storyboard #2
                  </h4>
                </div>
              </div>
              <div>
                <img src={storyboard3} alt="Storyboard 3" className="slick-image" />
                <div className="slick-caption">
                  <h4>
                    Storyboard #3
                  </h4>
                </div>
              </div>
              <div>
                <img src={storyboard4} alt="Storyboard 4" className="slick-image" />
                <div className="slick-caption">
                  <h4>
                    Storyboard #4
                  </h4>
                </div>
              </div>
              <div>
                <img src={storyboard5} alt="Storyboard 5" className="slick-image" />
                <div className="slick-caption">
                  <h4>
                    Storyboard #5
                  </h4>
                </div>
              </div>
              <div>
                <img src={heartbeat28} alt="Heartbeat 1" className="slick-image" />
                <div className="slick-caption">
                  <h4>
                    Heartbeat #1
                  </h4>
                </div>
              </div>
              <div>
                <img src={heartbeat29} alt="Heartbeat 2" className="slick-image" />
                <div className="slick-caption">
                  <h4>
                    Heartbeat #2
                  </h4>
                </div>
              </div>
            </Carousel>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
