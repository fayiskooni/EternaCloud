"use client";
import Image from "next/image";

export default function GradientImage() {
  return (
    <div className="relative w-full h-[600px] overflow-hidden mt-10">
      <Image
        src="/gradient.png"
        alt="Footer background"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
