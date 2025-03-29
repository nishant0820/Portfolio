import Container from "@/components/Container";
import Title from "@/components/Title";
import { certificationsData } from "@/constants";
import { Calendar } from "lucide-react";
import Image from "next/image";
import React from "react";

const CertificationsPage = () => {
  return (
    <div className="min-h-[80vh] py-5 md:py-10">
      <Container>
        <Title>Certifications I Have</Title>
        <div className="grid grid-rows-1 md:grid-cols-2 gap-5 md:gap-12">
          {certificationsData?.map((cert) => (
            <div
              key={cert?.id}
              className="flex flex-col gap-3 bg-lightSky/5 p-6 border border-lightSky/20 hover:border-lightSky/30 rounded-lg shadow-md shadow-lightSky/10 group hover:shadow-lg hoverEffect relative"
            >
              <div className="flex items-center justify-between">
                <p className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover hoverEffect">
                  {cert?.id}
                </p>
              </div>
              <h2 className="font-semibold">{cert?.title}</h2>
              <p className="text-sm md:text-base text-white/80">{cert?.issuer}</p>
              {cert?.image && (
                <div className="mt-2 relative w-full">
                <Image
                  src={cert?.image}
                  alt={cert?.title}
                  layout="intrinsic"
                  width={600}
                  height={0}
                  className="rounded-lg shadow-md border border-white/10"
                />
              </div>
              )}
              <div className="absolute top-6 right-6 flex items-center gap-2 text-white/50">
                <Calendar size={24} />
                <span className="text-lg">{cert?.date}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CertificationsPage;
