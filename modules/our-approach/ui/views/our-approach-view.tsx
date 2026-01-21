import { HEADERS } from "../../constants";
import CardMap from "../components/card-map";
import CardStack from "../components/cards-stacking";
import ContactCard from "../components/contact";
import Features from "../components/features";
import FooterVideo from "../components/footer-video";
import GradientImage from "../components/gradient";
import Headers from "../components/headers";
import ExperienceImage from "../components/image";

export const OurApproachView = () => {
  return (
    <>
      <Headers {...HEADERS.WhatToExpect} />
      <div className="flex items-center justify-center">
        <div className="w-1/2 flex items-center justify-center">
          <video
            className="inset-0 w-3/4 object-cover"
            src="/IllustrationHorizontal.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
        </div>
        <div className="w-1/2">
          <Features />
        </div>
      </div>
      <Headers {...HEADERS.DoneRightPlaybook} />
      <div className="flex relative">
        <div className="w-1/2">
          <CardStack />
        </div>
        <div className="flex w-1/2 justify-center sticky">
          <video
            className="inset-0 w-1/2 object-cover h-1/4"
            src="/scroll-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
        </div>
      </div>
      <Headers {...HEADERS.YourExperience} />
      <ExperienceImage />
      <GradientImage />
      <Headers {...HEADERS.SeamlessExecution} />
      <CardMap />
      <ContactCard />
      <FooterVideo />
    </>
  );
};
