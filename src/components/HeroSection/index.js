import React, { useState } from "react";
import Video from "../../assets/videos/video1.mp4";
import { SButton } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up for a new account today and receive $250 in credit towards
          your next payment.
        </HeroP>
      </HeroContent>
      <HeroBtnWrapper>
        <SButton
          to="signin"
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary="true"
          dark="true"
          // style={{ marginTop: "15rem" }}
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          Get started {hover ? <ArrowForward /> : <ArrowRight />}
        </SButton>
      </HeroBtnWrapper>
    </HeroContainer>
  );
};

export default HeroSection;
