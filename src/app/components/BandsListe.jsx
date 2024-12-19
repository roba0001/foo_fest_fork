"use client";
import { useState, useEffect } from "react";
import BandCard from "@/app/components/BandCard";

export default function BandsList({ bands }) {
  const [schedule, setSchedule] = useState({});
  const [hoveredBand, setHoveredBand] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/schedule")
      .then((res) => res.json())
      .then((data) => setSchedule(data))
      .catch((err) => console.error("Error fetching schedule:", err));
  }, []);

  const getScheduleForBand = (bandName) => {
    const bandSchedule = [];

    for (const scene in schedule) {
      for (const day in schedule[scene]) {
        const events = schedule[scene][day].filter((event) => event.act.includes(bandName));

        if (events.length > 0) {
          events.forEach((event) => {
            bandSchedule.push({
              scene,
              day,
              start: event.start,
              end: event.end,
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
    <div className="container mx-auto ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {bands &&
          bands.length > 0 &&
          bands.map((band) => (
            <BandCard
              key={band.slug}
              band={band}
              schedule={schedule}
              hoveredBand={hoveredBand}
              setHoveredBand={setHoveredBand}
              getScheduleForBand={getScheduleForBand}
              mapDayToName={mapDayToName}
            />
          ))}
      </div>
    </div>
  );
}
