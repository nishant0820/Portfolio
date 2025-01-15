import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const socialData = [
  {
    title: "Github",
    icon: <Github className="w-5 h-5" />,
    link: "https://www.github.com",
  },
  {
    title: "Linkedin",
    icon: <Linkedin className="w-5 h-5" />,
    link: "https://www.github.com",
  },
];

const SocialLinks = () => {
  return (
    <TooltipProvider>
      <div className="flex items-center gap-3">
        {socialData?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                href={item?.link}
                className="text-lightSky/80 border border-lightSky/30 p-2.5 rounded-full hover:bg-lightSky/10 hover:text-lightSky hoverEffect"
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent className="text-xs uppercase font-medium rounded-[6px]">{item?.title}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialLinks;
