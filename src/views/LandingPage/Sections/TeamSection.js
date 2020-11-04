import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/project/members/daniel.jpeg";
import teamDaniel from "assets/img/project/members/daniel.jpeg";
import teamCelio from "assets/img/project/members/celio.jpg";
import teamMadalena from "assets/img/project/members/madalena.jpeg";
import teamToscano from "assets/img/project/members/toscano.jpeg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Our team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Augusto Carlos Avides Moreira Pinto Osório
                <br />
                <small className={classes.smallTitle}>MMTIJD</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  TODO
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.twitter.com"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.instagram.com"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.facebook.com"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Beatriz Almeida Miranda
                <br />
                <small className={classes.smallTitle}>MMTIJD</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  TODO
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.twitter.com"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.instagram.com"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.facebook.com"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={teamCelio} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Célio Ighour de Castro Rodrigues
                <br />
                <small className={classes.smallTitle}>MMTIJD</small>
              </h4>
              <CardBody>
                <p className={classes.description}>                  
                Listening to stories and traveling is the best 
                thing you can do. Graduated in law and informatics, 
                with a taste for reading, writing and nature. 
                Contributed mostly to this website.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://gitlab.com/users/ighour/groups"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-gitlab"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://github.com/ighour"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-github"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.instagram.com/celioighour/"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={teamDaniel} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Daniel de Sousa Ribeiro
                <br />
                <small className={classes.smallTitle}>MIEEC-AUT</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  TODO
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.twitter.com"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.instagram.com"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.facebook.com"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={teamToscano} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              João Joaquim Neves Toscano
                <br />
                <small className={classes.smallTitle}>MMMIDS</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Musician and Producer with interest in Science 
                and Technologies in general. With Bachelor’s in 
                Electronic Music and Musical Production, I’m 
                finding the best way to connect this areas and 
                being creative.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.twitter.com"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.instagram.com"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.facebook.com"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={teamMadalena} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Madalena Antunes de Sousa
                <br />
                <small className={classes.smallTitle}>MMTIJD</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Cross Media Designer with a particular interest 
                in human-computer interaction, motion graphics, 
                digital games, data visualization, web design an 
                any technology within these areas. Looking to fuse 
                technology, design and create new things. Bachelor's 
                in Design and Multimedia.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://github.com/MadalenaSousa"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-github"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.behance.net/madalena-sousa"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-behance"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.linkedin.com/in/madalena-sousa"
                  target="_blank"
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
