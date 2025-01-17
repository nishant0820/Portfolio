"use client";

import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { projects } from "@/constants";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WorkPage = () => {
  return (
    <Container className="py-5 md:py-10 mb-14 md:mb-0">
      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent>
          {projects?.map((project) => (
            <CarouselItem key={project?.id}>
              <Card className="bg-bodyColor border-lightSky/20 text-white group">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
                    <div className="w-full  md:w-1/2 order-2 md:order-1 mb-8 md:mb-0">
                      <div className="space-y-3 ms:space-y-6 mt-4 md:mt-0">
                        <h2 className="text-4xl md:text-8xl text-outline font-extrabold text-transparent leading-none group-hover:text-outline-hover hoverEffect">
                          {project?.id}
                        </h2>
                        <h3 className="text-xl md:text-2xl font-bold leading-none text-white">
                          {project?.category} project
                        </h3>
                        <p className="text-white/60 text-sm md:text-base">
                          {project?.description}
                        </p>
                        <ul className="flex flex-wrap md:flex-nowrap gap-2 md:gap-4 items-center">
                          {project?.stack?.map((item, index) => (
                            <li
                              key={index}
                              className="text-xs md:text-base text-lightSky"
                            >
                              {item}
                              {index !== project?.stack?.length - 1 && ","}
                            </li>
                          ))}
                        </ul>
                        <Separator className="bg-gray-700" />
                        <div className="flex items-center gap-4">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Link href={project?.liveUrl} target="blank">
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="bg-lightSky/5 text-white/80 border-lightSky/20 hover:bg-lightSky/10 hover:border-lightSky hover:text-hoverColor hoverEffect"
                                  >
                                    <ArrowUpRight />{" "}
                                    <span className="sr-only">
                                      Live Project
                                    </span>
                                  </Button>
                                </Link>
                              </TooltipTrigger>
                              <TooltipContent>Live Project</TooltipContent>
                            </Tooltip>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Link href={project?.githubUrl} target="blank">
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="bg-lightSky/5 text-white/80 border-lightSky/20 hover:bg-lightSky/10 hover:border-lightSky hover:text-hoverColor hoverEffect"
                                  >
                                    <Github />{" "}
                                    <span className="sr-only">
                                      View Github Repository
                                    </span>
                                  </Button>
                                </Link>
                              </TooltipTrigger>
                              <TooltipContent>
                                View Github Repository
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 order-1 md:order-2">
                      <div className="relative h-55 bg-gray-700 rounded-lg overflow-hidden">
                        <Image
                          src={project?.image}
                          alt={project?.title}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute right-12 md:right-10 -bottom-8">
          <CarouselPrevious className="rounded-md bg-transparent border  border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect" />
          <CarouselNext className="rounded-md bg-transparent border  border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect" />
        </div>
      </Carousel>
    </Container>
  );
};

export default WorkPage;
