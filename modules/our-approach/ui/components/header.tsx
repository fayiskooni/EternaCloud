import { Heart } from "lucide-react";

const Header = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="flex items-center text-xs text-white bg-purple-400/15 rounded-2xl gap-2 p-3 mt-36">
        <Heart className="text-purple-400 fill-purple-400 size-3" />
        What To Expect
      </p>
      <h1 className="text-white text-4xl font-bold mt-6">We nest in and around</h1>
      <h1 className="text-4xl font-bold text-white">your unique conditions.</h1>
      <p className="text-pink-200/70 text-xs mt-5">
        Our service centers on you. We&apos;re an everyday partner who takes
        real action with genuine care.
      </p>
    </div>
  );
};

export default Header;
