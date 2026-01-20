import { LucideIcon } from "lucide-react";

type HeadersProps = {
  icon: LucideIcon;
  content: string;
  text1: string;
  text2: string;
};

export default function Cards({
  icon: Icon,
  content,
  text1,
  text2,
}: HeadersProps) {
  return (
    <div className="w-3/8 bg-linear-to-r from-[#251e35] to-[#0f0d14] p-12 rounded-2xl ml-44 mt-20 shadow">
      <div className="flex items-center bg-[#0f0d14] p-2 rounded-2xl w-3/10">
        <Icon className="size-4 text-purple-400" />
        <p className="text-xs text-white pl-2">{content}</p>
      </div>
      <div className="pt-10">
        <h1 className="text-2xl font-bold text-white">
          {text1}
          <span className="text-pink-200/70"> {text2}</span>
        </h1>
      </div>
    </div>
  );
}
