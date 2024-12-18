"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BandsList({ bands }) {
  const [schedule, setSchedule] = useState({});
  const [hoveredBand, setHoveredBand] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/schedule")
      .then((res) => res.json())
      .then((data) => setSchedule(data))
      .catch((err) => console.error("Error fetching schedule:", err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/band")
      .then((res) => res.json())
      .then((data) => setSchedule(data))
      .catch((err) => console.error("Error fetching schedule:", err));
  }, []);

  const getScheduleForBand = (bandName) => {
    const bandSchedule = [];

    for (const scene in schedule) {
      for (const day in schedule[scene]) {
        const events = schedule[scene][day].filter((event) =>
          event.act.includes(bandName)
        );

        if (events.length > 0) {
          events.forEach((event) => {
            bandSchedule.push({
              scene,
              day,
              start: event.start,
              end: event.end,
              id: event.id,
            });
          });
        }
      }
    }

    return bandSchedule;
  };

  const mapDayToName = (day) => {
    switch (day) {
      case "mon":
        return "Monday";
      case "tue":
        return "Tuesday";
      case "wed":
        return "Wednesday";
      case "thu":
        return "Thursday";
      case "fri":
        return "Friday";
      case "sat":
        return "Saturday";
      case "sun":
        return "Sunday";
      default:
        return "";
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {bands &&
          bands.length > 0 &&
          bands.map((band) => (
            <div
              key={band.slug}
              className="relative group"
              onMouseEnter={() => setHoveredBand(band.name)}
              onMouseLeave={() => setHoveredBand(null)}
            >
              {band.logo && band.logo.includes("https") ? (
                <Link className="mb-3" href={`/artists/${band.slug}`}>
                  <Image
                    src={band.logo}
                    alt={`${band.name} playing at a festival`}
                    width={320}
                    height={280}
                    className="w-full h-80 object-cover transition-transform transform group-hover:scale-105"
                  />
                </Link>
              ) : (
                <Link className="mb-3" href={`/artists/${band.slug}`}>
                  <Image
                    src={`http://localhost:8080/logos/${
                      band.logo && band.logo.includes(".")
                        ? band.logo
                        : `${band.logo}.png`
                    }`}
                    alt={`${band.name} playing at a festival`}
                    width={320}
                    height={280}
                    className="w-full h-80 object-cover transition-transform transform group-hover:scale-105"
                  />
                </Link>
              )}
              <h3 className="absolute bottom-2 right-2 text-white bg-black bg-opacity-75 px-2 py-1 text-sm transition-transform transform group-hover:translate-y-[-20px]">
                {band.name}
              </h3>
              {hoveredBand === band.name && (
                <div className="absolute bottom-2 left-0 right-0 bg-black bg-opacity-80 p-2 text-white text-sm">
                  {getScheduleForBand(band.name).length > 0
                    ? getScheduleForBand(band.name).map((event) => (
                        <div key={event.id}>
                          {" "}
                          <p>Scene: {event.scene}</p>
                          <p>
                            {mapDayToName(event.day)}: {event.start} -{" "}
                            {event.end}
                          </p>
                        </div>
                      ))
                    : null}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
