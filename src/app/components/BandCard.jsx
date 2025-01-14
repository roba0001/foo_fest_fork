import Image from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

function BandCard({ band, hoveredBand, setHoveredBand, getScheduleForBand, mapDayToName, isCancelled })
{
  const randomId = uuidv4();

  return (
    <div
      key={band.slug}
      className="relative group"
      onMouseEnter={() => setHoveredBand(band.name)}
      onMouseLeave={() => setHoveredBand(null)}
    >
      {/* The image container */}
      <div className={`relative w-full h-80 ${isCancelled ? 'blur-sm' : ''}`}>
        {band.logo && band.logo.includes("https") ? (
          <Link className="mb-3" href={`/artists/${band.slug}`}>
            <Image
              src={band.logo}
              alt={`${band.name} playing at a festival`}
              width={320}
              height={280}
              className="w-full h-80 object-cover transition-transform transform group-hover:scale-105 flex flex-col md:fieldset-width lg:fieldset-width bg-white custom-border p-1"
            />
          </Link>
        ) : (
          <Link className="mb-3" href={`/artists/${band.slug}`}>
            <Image
              src={`https://polarized-chrome-trouser.glitch.me/logos/${band.logo && band.logo.includes(".") ? band.logo : `${band.logo}.png`
                }`}
              alt={`${band.name} playing at a festival`}
              width={320}
              height={280}
              className="w-full h-80 object-cover transition-transform transform group-hover:scale-105 flex flex-col md:fieldset-width lg:fieldset-width bg-white custom-border p-1"
            />
          </Link>
        )}

        {/* "CANCELLED" text centered on the card */}
        {isCancelled && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white text-3xl font-bold">
            CANCELLED
          </div>
        )}
      </div>

      {/* Band Name */}
      <h4 className="absolute bottom-2 right-2 vip-ticket-counter-background-color rounded-[20px] bg-white custom-border p-1 ">
        {band.name}
      </h4>

      {/* Hovered band schedule */}
      {hoveredBand === band.name && (
        <div className="absolute bottom-16 right-2 bg-white custom-border p-1">
          {getScheduleForBand(band.name).length > 0
            ? getScheduleForBand(band.name).map((event) => (
              <div key={randomId}>
                <p>Scene: {event.scene}</p>
                <p>
                  {mapDayToName(event.day)}: {event.start} - {event.end}
                </p>
              </div>
            ))
            : null}
        </div>
      )}
    </div>
  );
}

export default BandCard;
