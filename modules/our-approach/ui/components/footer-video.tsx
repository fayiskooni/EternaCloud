"use client";

import { Button } from "@/components/ui/button";
import { BUTTON_IMAGE } from "../../constants";
import GradientDivider from "./gradient-divider";
import PictureButton from "./picture-button";

export default function FooterVideo() {
  return (
    <footer className="relative h-screen w-full text-[#a997ce] text-sm overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={"/flower-video.mp4"}
        autoPlay
        muted
        playsInline
        preload="auto"
        controls={false}
      />
      <div className="flex absolute w-full h-1/2 items-center justify-center flex-col">
        <div className="flex items-center mt-24">
          <div className="relative w-5 h-5 rounded-full">
            {/* Rainbow border */}
            <div
              className="
      absolute inset-0 rounded-full
      bg-[conic-gradient(red,orange,yellow,green,cyan,blue,violet,red)]
      animate-spin
    "
            ></div>

            {/* Inner circle to make it border only */}
            <div
              className="
      absolute inset-0.5 rounded-full
      bg-[#130e1e]
    "
            ></div>
          </div>
          <h3 className="text-white text-3xl mr-10 ml-2">EternaCloud</h3>
          <Button
            className="
    w-36 h-12
    bg-linear-to-r from-blue-500 via-purple-500 to-purple-600
    hover:from-[#f79fff] hover:via-[#ffb36b] hover:to-[#fe881b]

    bg-size-[200%_200%]
    bg-left hover:bg-right

    transition-[background-position,colors]
    duration-900
    hover:duration-1200
    ease-out

    rounded-lg text-white font-medium
  "
          >
            Contact
          </Button>
          <Button
            className="
    w-36 h-12 ml-2
    bg-linear-to-r from-blue-500 via-purple-500 to-purple-600
    hover:from-[#f79fff] hover:via-[#ffb36b] hover:to-[#fe881b]

    bg-size-[200%_200%]
    bg-left hover:bg-right

    transition-[background-position,colors]
    duration-900
    hover:duration-1200
    ease-out

    rounded-lg text-white font-medium
  "
          >
            Join our team
          </Button>
        </div>
        <GradientDivider />
        <div>
          <h1
        className="text-5xl font-bold bg-linear-to-r from-blue-400 via-purple-500 to-orange-400
    bg-clip-text
    text-transparent mt-10"
      >
Nothing is impossible
      </h1>
        </div>
      </div>

      <div className="flex absolute w-full h-full items-center justify-center mt-20">
        {BUTTON_IMAGE.map((button) => {
          return (
            <PictureButton key={button.title} image={button.image} title="" />
          );
        })}
      </div>
       <div className="absolute bottom-5 flex justify-center w-full">
          <div className="flex justify-between gap-2">
            <div className="flex gap-4">
              <div>Security</div>
              <div>Privacy</div>
              <div>Terms</div>
            </div>

            <div className="text-center max-w-xl">
              When every point is understood and clear, a seamless experience
              must appear.
            </div>

            <div>© EternaCloud 2025</div>
          </div>
        </div>
    </footer>
  );
}
