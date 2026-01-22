"use client";

import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const path = usePathname();
  const items = [
    { name: "What We Do", url: "/what-we-do" },
    { name: "Our Approach", url: "/our-approach" },
    { name: "About Us", url: "/about-us" },
    { name: "Insights", url: "/insights" },
  ];

  return (
    <div className="fixed left-1/2 -translate-x-1/2 w-[90%] max-w-200 z-99  md:top-[2em]">
      <nav className="h-12.5 rounded-xl bg-slate-100 shadow-md">
        <div className="absolute inset-x-0 top-0 h-12.5 flex items-center justify-between pl-[1.1rem] z-2">
          <div className="flex items-center gap-1">
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
      bg-slate-100
    "
              ></div>
            </div>

            <p className="text-lg font-medium text-black">EternaCloud</p>
          </div>

          <div className="flex items-center gap-5 text-black text-xs md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 order-1 md:order-0 h-full">
            {items.map((item) => {
              const isActive = path === item.url;
              return (
                <Link
                  href={item.url}
                  key={item.url}
                  className={`transition-colors h-full flex items-center
            ${isActive ? "text-black  border-t-2 border-b-2 border-purple-500" : "text-gray-500 hover:text-black"}
          `}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="border-0 flex rounded-[calc(0.75rem-0.2rem)] p-1 items-center h-full font-medium cursor-pointer gap-1">
            <Button className="bg-white text-black h-full">
              <SearchIcon />
            </Button>
            <Button className="bg-linear-to-r from-blue-500 to-purple-600 text-white text-xs h-full  hover:from-blue-600 hover:to-purple-700 px-8">
              Let&apos;s talk
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
};
