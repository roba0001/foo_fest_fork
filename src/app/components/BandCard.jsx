import Image from "next/image";
import Link from "next/link";

function BandCard({ band, hoveredBand, setHoveredBand, getScheduleForBand, mapDayToName })
{
  // Tjekker om et bandet er aflyst og skal være sløret
  const bandSchedule = getScheduleForBand(band.name);
  const isCancelled = bandSchedule.some((event) => event.cancelled);

  return (
    <div
      key={band.slug}
      className={`relative group ${isCancelled ? "opacity-50" : ""}`}
      onMouseEnter={() => setHoveredBand(band.name)}
      onMouseLeave={() => setHoveredBand(null)}
    >


      {band.logo && band.logo.includes("https") ? (
        isCancelled ? (
          <Image
            src={band.logo}
            alt={`${band.name} playing at a festival`}
            width={320}
            height={280}
            className="w-full h-80 object-cover "
          />
        ) : (
          <Link className="mb-3" href={`/artists/${band.slug}`}>
            <Image
              src={band.logo}
              alt={`${band.name} playing at a festival`}
              width={320}
              height={280}
              className="w-full h-80 object-cover transition-transform transform group-hover:scale-105"
            />
          </Link>
        )
      ) : isCancelled ? (

        <Image
          src={`http://localhost:8080/logos/${band.logo && band.logo.includes(".") ? band.logo : `${band.logo}.png`
            }`}
          alt={`${band.name} playing at a festival`}
          width={320}
          height={280}
          className="w-full h-80 object-cover"
        // gør billlederne sløret blur-sm"
        />
      ) : (
        <Image
          src={`http://localhost:8080/logos/${band.logo && band.logo.includes(".") ? band.logo : `${band.logo}.png`
            }`}
          alt={`${band.name} playing at a festival`}
          width={320}
          height={280}
          className="w-full h-80 object-cover transition-transform transform group-hover:scale-105 filter blur-sm"
        />
      )}

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
