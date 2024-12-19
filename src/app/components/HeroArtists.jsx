import Section from "./Section.jsx";
import HeroDescription from "./HeroDescription.jsx";
import Image from "next/image";
import BandCard from "@/app/components/BandCard";

export default function Hero({ genre }) {
  return (
    <Section>
      <div className="h-[700px] full-width">
        {band.logo && band.logo.includes("https") ? (
          <Image
            src={band.logo}
            alt={`${band.name} playing at a festival`}
            layout="fill"
            className="object-cover h-full"
          />
        ) : (
          <Image
            src={`http://localhost:8080/logos/${
              band.logo && band.logo.includes(".")
                ? band.logo
                : `${band.logo}.png`
            }`}
            alt={`${band.name} playing at a festival`}
            layout="fill"
            className="object-cover h-full"
          />
        )}

        <div className="absolute bottom-12 right-12 text-right z-10 text-white">
          <HeroDescription>
            <h2>{band.name}</h2>
            <h4>{band.genre}</h4>
          </HeroDescription>
        </div>
      </div>
    </Section>
  );
}
