import Container from "@/components/Container";
import Title from "@/components/Title";
import { servicesData } from "@/constants";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import React from "react";

const ServicePage = () => {
  return (
    <div className="min-h-[80vh] py-5 md:py-10">
      <Container>
        <Title>Services I Provide</Title>
        <div className="grid grid-rows-1 md:grid-cols-2 gap-5 md:gap-12">
          {servicesData?.map((item) => (
            <div
              key={item?.id}
              className="flex flex-col gap-2 bg-lightSky/5 p-6 border border-lightSky/20 hover:border-lightSky/30 rounded-lg shadow-md shadow-lightSky/10 group hover:shadow-lg hoverEffect"
            >
              <div className="flex items-center justify-between">
                <p className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover hoverEffect">{item?.id}</p>
                <Link href={item?.href} target="blank">
                  <ArrowUp className="rotate-45 hover:text-hoverColor" />
                </Link>
              </div>
              <h2 className="font-semibold">{item?.title}</h2>
              <p className="text-sm md:text-base text-white/80">{item?.description}</p>
              <div className="border-b border-b-white/20 mt-2" />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ServicePage;
