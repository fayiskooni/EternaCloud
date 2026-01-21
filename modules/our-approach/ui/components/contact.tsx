import { Button } from "@/components/ui/button";

const ContactCard = () => {
  return (
    <div className="w-full h-full rounded-b-4xl bg-[#f9f9f9]">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="relative w-16 h-16 rounded-full mb-10">
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
      absolute inset-1 rounded-full
      bg-slate-100
    "
          ></div>
        </div>
        <h2 className="text-6xl font-medium">Ready to</h2>
        <h2 className="text-6xl font-medium">design and build</h2>
        <h2 className="text-6xl font-medium bg-linear-to-r from-blue-400 via-purple-500 to-orange-400 bg-clip-text text-transparent">
          with ease?
        </h2>
        <Button
          className="
    mt-10 w-36 h-12
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
      </div>
    </div>
  );
};

export default ContactCard;
