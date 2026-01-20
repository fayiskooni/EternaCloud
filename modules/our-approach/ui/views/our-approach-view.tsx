import { HEADERS } from "../../constants";
import CardStack from "../components/cards-stacking";
import Features from "../components/features";
import Headers from "../components/headers";
import RainbowOrb from "../components/rainbow";

export const OurApproachView = () => {
  return (
    <>
      <Headers {...HEADERS.WhatToExpect} />
      <div className="flex items-center justify-center">
        <div className="w-1/2 flex items-center justify-center">
          <RainbowOrb />
        </div>
        <div className="w-1/2">
          <Features />
        </div>
      </div>
      <Headers {...HEADERS.DoneRightPlaybook} />
      <CardStack />
      <Headers {...HEADERS.YourExperience} />
      <Headers {...HEADERS.SeamlessExecution} />
    </>
  );
};
