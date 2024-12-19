import Image from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

function BandCard({
  band,
  hoveredBand,
  setHoveredBand,
  getScheduleForBand,
  mapDayToName,
}) {
  const randomId = uuidv4();

  return (
    <div
      key={band.slug}
      className="relative group"
      onMouseEnter={() => setHoveredBand(band.name)}
      onMouseLeave={() => setHoveredBand(null)}
    >
      {band.logo && band.logo.includes("https") ? (
        <Link className="mb-3 " href={`/artists/${band.slug}`}>
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
            src={`https://polarized-chrome-trouser.glitch.me/logos/${
              band.logo && band.logo.includes(".")
                ? band.logo
                : `${band.logo}.png`
            }`}
            alt={`${band.name} playing at a festival`}
            width={320}
            height={280}
            className="w-full h-80 object-cover transition-transform transform group-hover:scale-105 flex flex-col md:fieldset-width lg:fieldset-width bg-white custom-border p-1"
          />
        </Link>
      )}

      <h4 className="absolute bottom-2 right-2 vip-ticket-counter-background-color rounded-[20px] bg-white  custom-border p-1 ">
        {band.name}
      </h4>
      {hoveredBand === band.name && (
        <div className="absolute bottom-16 right-2 bg-white custom-border p-1">
          {getScheduleForBand(band.name).length > 0
            ? getScheduleForBand(band.name).map((event) => (
                <div key={randomId}>
                  <p>Scene: {event.scene}</p>
                  {event.cancelled && <p className="text-red-500">Cancelled</p>}
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
