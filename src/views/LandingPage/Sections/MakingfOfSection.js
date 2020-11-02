import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

// import st001 from "assets/img/project/storyboard/001.png";
// import st002 from "assets/img/project/storyboard/002.png";
// import st003 from "assets/img/project/storyboard/003.jpg";
// import st004 from "assets/img/project/storyboard/004.jpg";
// import st005 from "assets/img/project/storyboard/005.jpg";
// import st006 from "assets/img/project/storyboard/006.jpg";

import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";

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
                <img src={image1} alt="First slide" className="slick-image" />
                <div className="slick-caption">
                  <h4>
                    <LocationOn className="slick-icons" />
                    Yellowstone National Park, United States
                  </h4>
                </div>
              </div>
              <div>
                <img
                  src={image2}
                  alt="Second slide"
                  className="slick-image"
                />
                <div className="slick-caption">
                  <h4>
                    <LocationOn className="slick-icons" />
                    Somewhere Beyond, United States
                  </h4>
                </div>
              </div>
              <div>
                <img src={image3} alt="Third slide" className="slick-image" />
                <div className="slick-caption">
                  <h4>
                    <LocationOn className="slick-icons" />
                    Yellowstone National Park, United States
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
