"use client";
import { useState, useEffect } from "react";

//
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
        return "Mandag";
      case "tue":
        return "Tirsdag";
      case "wed":
        return "Onsdag";
      case "thu":
        return "Torsdag";
      case "fri":
        return "Fredag";
      case "sat":
        return "Lørdag";
      case "sun":
        return "Søndag";
      default:
        return "";
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bands && bands.length > 0 ? (
          bands.map((band) => (
            <div
              key={band.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg p-6 cursor-pointer transition-transform transform hover:scale-105"
              onMouseEnter={() => setHoveredBand(band.name)}
              onMouseLeave={() => setHoveredBand(null)}
            >
              <h2>{band.name}</h2>

              {hoveredBand === band.name && (
                <div>
                  {getScheduleForBand(band.name).length > 0 ? (
                    getScheduleForBand(band.name).map((event, index) => (
                      <div key={index}>
                        <p>Scene: {event.scene}</p>
                        <p>
                          {mapDayToName(event.day)}: {event.start} - {event.end}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p>Ingen spilleplan </p>
                  )}
                </div>
              )}
            </div>
          ))
        ) : (
          <p>Ingen bands</p>
        )}
      </div>
    </div>
  );
}
