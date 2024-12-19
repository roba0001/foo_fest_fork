import Image from "next/image";
import Link from "next/link";

function BandCard({ band, hoveredBand, setHoveredBand, getScheduleForBand, mapDayToName }) {
  // Tjekker om et bandet er aflyst og skal være sløret
  const bandSchedule = getScheduleForBand(band.name);
  const isCancelled = bandSchedule.some((event) => event.cancelled);

  const logoSrc = band.logo
    ? band.logo.startsWith("http")
      ? band.logo // Use as is if it starts with http
      : `/${band.logo}` // Prepend / for local files
    : "/default-logo.png";

  return (
    <div
      key={band.slug}
      className={`relative group ${isCancelled ? "opacity-50" : ""}`}
      onMouseEnter={() => setHoveredBand(band.name)}
      onMouseLeave={() => setHoveredBand(null)}
    >
      <Link className="mb-3" href={`/artists/${band.slug}`}>
        <Image
          src={logoSrc}
          alt={`${band.name} playing at a festival`}
          width={320}
          height={280}
          className={`${
            isCancelled ? "blur-sm" : ""
          } w-full h-80 object-cover transition-transform transform group-hover:scale-105`}
        />
      </Link>

      <h4 className="absolute bottom-2 right-2 vip-ticket-counter-background-color rounded-[20px] p-1 z-20">
        {band.name}
      </h4>
      {hoveredBand === band.name && !isCancelled && (
        <div className="absolute bottom-14 right-2 vip-ticket-counter-background-color rounded-[20px] p-3 z-20">
          {bandSchedule.length > 0 &&
            bandSchedule.map((event) => (
              <div key={event.id}>
                <p>Scene: {event.scene}</p>
                <p>
                  {mapDayToName(event.day)}: {event.start} - {event.end}
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default BandCard;
