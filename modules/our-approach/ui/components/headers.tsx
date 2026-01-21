import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

type HeadersProps = {
  icon: LucideIcon;
  content: string;
  title: string;
  title2: string;
  description: string;
  description2: string | null;
  bgClassName?: string;
  titleClassName?: string;
  contentClassName?: string;
};

export default function Headers({
  icon: Icon,
  content,
  title,
  title2,
  description,
  description2,
  bgClassName,
  titleClassName,
  contentClassName,
}: HeadersProps) {
  return (
    <div className={cn("flex flex-col items-center", bgClassName)}>
      <p className={cn("flex items-center text-xs text-white bg-purple-400/15 rounded-2xl gap-2 p-3 mt-36",contentClassName)}>
        <Icon className="text-black fill-purple-400 size-4" />
        {content}
      </p>
      <h1 className={cn("text-4xl font-bold mt-6", titleClassName)}>{title}</h1>
      <h1
        className="text-4xl font-bold bg-linear-to-r from-blue-400 via-purple-500 to-orange-400
    bg-clip-text
    text-transparent"
      >
        {title2}
      </h1>
      <p className="text-[#a997ce] tracking-[-0.042vw] text-[1.11vw] font-normal leading-[140%] mt-5">{description}</p>
      <p className="text-[#a997ce] tracking-[-0.042vw] text-[1.11vw] font-normal leading-[140%]">{description2}</p>
    </div>
  );
}
