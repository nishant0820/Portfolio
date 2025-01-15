import Container from "@/components/Container";
import Photo from "@/components/Photo";
import SocialLinks from "@/components/SocialLinks";
import Statistics from "@/components/Statistics";
import { Download } from "lucide-react";

export default function Home() {
  return (
    <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="flex flex-col items-center md:items-start gap-5 md:gap-7 text-center md:text-start">
        <div>
          <h3 className="font-semibold text-white/70 tracking-wider mb-1">
            Software Developer
          </h3>
          <h2 className="text-3xl md:text-5xl mb-2">Hello I&apos;m</h2>
          <h1 className="text-lightSky text-5xl md:text-6xl tracking-normal">
            Nishant Gupta
          </h1>
        </div>
        <p className="w-auto md:max-w-[500px] text-white/50 font-thin leading-6">
          As a Software Developer, I design and build innovative Softwares,
          solve complex problems and ensure systems are scalable and
          user-friendly. From creating web apps to optimize backend systems, I
          bridge the gap between technology and user needs.
        </p>
        <a download href={'/resume.pdf'} className="bg-transparent rounded-full border border-lightSky/50 flex items-center px-6 py-2.5 gap-2 text-sm text-lightSky hover:bg-hoverColor hover:text-black">
          Download CV <Download className="w-4 h-4" />
        </a>
        <SocialLinks />
        <Statistics />
      </div>
      <Photo />
    </Container>
  );
}
