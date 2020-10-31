import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import InfoIcon from '@material-ui/icons/Info';
import ChatIcon from "@material-ui/icons/Chat";
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import FilterIcon from '@material-ui/icons/Filter';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/pitchStyle.js";

const useStyles = makeStyles(styles);

export default function PitchSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Pitch</h2>
          <h5 className={classes.description}>
          We want to try to put students, friends and family of the 
          person who has the disorder and any other person looking to 
          understand what it is like to have PTSD, as close as possible 
          to the reality of having this trauma to help them understand 
          the behaviors of someone with this condition, to create 
          awareness and to make people contribute consciously and 
          positively to this problem.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="What"
              description="
              A digital immersive experience in a room with video and sound.
              The users heart rate will be measured to analyse, visually, it’s fluctuations as the experience advances.
              A stimuli simulating the story of a soldier that comes home with a post traumatic stress disorder.
              "
              icon={EmojiObjectsIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Why"
              description="
              Conscious donations to associations that support PTSD.
              Bring awareness to mental disorders, especially in school projects
              Understand behaviours of the patient and understand how to help.
              "
              icon={ContactSupportIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Who"
              description="
              People who want to know more about post-war trauma
              Students 
              Family and friends of those with the trauma
              "
              icon={EmojiEmotionsIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="How (Product)"
              description="
              Our key partners would be High Schools and Universities, Associations related to mental disorders, Journals, Tv channels and Municipal Councils. Our costs would pass by the electronic components, tools and construction materials. As far as revenue streams go, it is a non-profit campaign, meaning that all financial aid will be obtained through donations.
              "
              icon={InfoIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="How (Interface)"
              description="
              We intend to create a single user simulation/experience of the disorder by placing the user in an immersive environment (an installation in the dark with no stimuli other than our video and sound) and having him/her follow a linear story about a soldier that comes from war with PTSD. We’ll also have a heart rate measurer and respective video visualization.
              "
              icon={FilterIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="How (Communication)"
              description="
              We will have a website, social media accounts and some physical publicity (flyers and posters).
              "
              icon={ChatIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
