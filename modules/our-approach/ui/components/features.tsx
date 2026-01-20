import { CheckIcon } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Scalable",
      description: "From key teams, vendors and systems to global hyperscale.",
    },
    {
      title: "Practical",
      description: "We focus where it matters most and expand via adjacencies.",
    },
    {
      title: "Adaptive",
      description: "Built to handle anything, we work with how you operate.",
    },
    {
      title: "Flexible",
      description:
        "Stay involved as much or as little as you feel comfortable.",
    },
    {
      title: "Seamless",
      description: "Smooth, cohesive, continuous service from one partner.",
    },
  ];
  return (
    <div className="mt-24">
      <div className="bg-linear-to-r from-[#251e35] to-[#0f0d14] p-5 rounded-2xl w-5/8">
        {features.map((feature) => {
          return (
            <div key={feature.title} className=" m-4">
              <div className="flex gap-2 items-center">
                <CheckIcon className="text-white size-3 p-0.5 bg-linear-to-b from-blue-500 to-purple-600 rounded-full" />
                <p className="text-sm text-white">{feature.title}</p>
              </div>
              <p className="text-xs text-pink-200/70 z-10 ml-5">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
