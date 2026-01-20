import { LucideIcon } from "lucide-react";

type HeadersProps = {
  icon: LucideIcon;
  content: string;
  title: string;
  title2: string;
  description: string;
  description2: string | null;
};

export default function Headers({
  icon: Icon,
  content,
  title,
  title2,
  description,
  description2,
}: HeadersProps) {
  return (
    <div className="flex flex-col items-center">
      <p className="flex items-center text-xs text-white bg-purple-400/15 rounded-2xl gap-2 p-3 mt-36">
        <Icon className="text-black fill-purple-400 size-4" />
        {content}
      </p>
      <h1 className="text-white text-4xl font-bold mt-6">{title}</h1>
      <h1
        className="text-4xl font-bold bg-linear-to-r from-blue-400 via-purple-500 to-orange-400
    bg-clip-text
    text-transparent"
      >
        {title2}
      </h1>
      <p className="text-pink-200/70 text-xs mt-5">{description}</p>
      <p className="text-pink-200/70 text-xs">{description2}</p>
    </div>
  );
}
