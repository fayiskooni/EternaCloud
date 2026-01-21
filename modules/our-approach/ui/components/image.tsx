"use client";
import Image from "next/image";

export default function ExperienceImage() {
  return (
    <div className="relative w-full h-[500px] overflow-hidden mt-10">
      <Image
        src="/image.png"
        alt="Footer background"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
