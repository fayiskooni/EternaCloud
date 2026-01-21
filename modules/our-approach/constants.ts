import { BadgeCheck, Circle, Heart, Rocket, Sparkles } from "lucide-react";

export const HEADERS = {
  WhatToExpect: {
    icon: Heart,
    content: "What To Expect",
    title: "We nest in and around",
    title2: "your unique conditions.",
    description:
      "Our service centers on you. We're an everyday partner who takes real action with genuine care.",
    description2: "",
    titleClassName: "text-white",
  },
  DoneRightPlaybook: {
    icon: BadgeCheck,
    content: "Done Right Playbook",
    title: "We form and orchestrate",
    title2: "your unifying framework.",
    description:
      "No more static specs or siloed information. Dedicated specialists qualify all nuances into one",
    description2:
      "cohesive whole. Every element is always dynamic, stays connected and lives in action.",
    titleClassName: "text-white",
  },
  YourExperience: {
    icon: Sparkles,
    content: "Your Experience",
    title: "You steadily gain",
    title2: "impactful momentum.",
    description:
      "No more gaps or missing context. All information expands on what came before.",
    description2:
      "Every action and decision builds on the last. Progress doesn't feel like pressure.",
    titleClassName: "text-white",
  },
  SeamlessExecution: {
    icon: Rocket,
    content: "Seamless Execution",
    title: "Your teams get to enjoy",
    title2: "sustained focus and creativity.",
    description:
      "Expectations unify by default. Accountability is a byproduct. EternaCloud keeps track of all the",
    description2:
      "little things, so you don't have to. Bring data center operations together like never before.",
    titleClassName: "text-black",
    bgClassName: "bg-[#f9f9f9]",
    contentClassName: "bg-white text-black font-bold",
  },
};

export const CARD_CONTENT = [
  {
    icon: Circle,
    content: "We Understand",
    text1: "You keep moving, we ride sidecar.",
    text2:
      "We engage directly with the real work to onboard and enable key groups, gaining context and learning requirements.",
  },
  {
    icon: Circle,
    content: "We Construct",
    text1: "We build, you confirm.",
    text2:
      "We baseline your conditions and criteria into dynamic layers of truth, bridging each nuance with relational dependencies and facts.",
  },
  {
    icon: Circle,
    content: "We Sunrise",
    text1: "You ride sidecar, we drive.",
    text2:
      "Together we iterate and refine completeness as framework elements become whole, activating products, vendors and more.",
  },
  {
    icon: Circle,
    content: "We Action",
    text1: "Your requests, decisions and changes set the course.",
    text2:
      "We own the process that gets you where you're going with ease, perfecting every detail along the way.",
  },
];

export const SEAMLESS_EXECUTION = [
  {
    title: "Design",
    content: "Details you specify once carry forward everywhere. We make sure they don’t get bypassed.",
    image: "/left.png",
  },
  {
    title: "Engineering",
    content: "Your builds have clarity built-in. We curate what’s needed, what’s changed and why it matters.",
    image: "/centre.png",
  },
  {
    title: "Construction",
    content: "Materials you need on site get validated and tracked on multiple levels. Nothing shows up half-right.",
    image: "/right.png",
  },
];
