import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const socialData = [
  {
    title: "Github",
    icon: <Github className="w-5 h-5" />,
    link: "https://github.com/nishant0820",
  },
  {
    title: "Linkedin",
    icon: <Linkedin className="w-5 h-5" />,
    link: "https://www.linkedin.com/in/nishant-gupta-74b5a7219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    title: "Instagram",
    icon: <Instagram className="w-5 h-5" />,
    link: "https://www.instagram.com/nishantstudy?igsh=MWg1d3E2OXlrbW03OQ==",
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
