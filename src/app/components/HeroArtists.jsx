import Section from "./Section.jsx";
import HeroDescription from "./HeroDescription.jsx";
import Image from "next/image";

export default function Hero({ bandName, genre }) {
  return (
    <Section>
      <div className="h-[700px] full-width">
        <Image
          src="/images/hero/hero_bg.jpg"
          alt="Hero background"
          layout="fill"
          className="object-cover h-full"
        />
        <div className="absolute bottom-12 right-12 text-right z-10 text-white">
          <HeroDescription>
            <h2>band.name</h2>
            <h4>band.genre</h4>
          </HeroDescription>
        </div>
      </div>
    </Section>
  );
}
