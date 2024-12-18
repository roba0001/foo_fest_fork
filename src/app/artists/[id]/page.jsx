"use client";
import { useState, useEffect } from "react";
import HeroArtists from "@/app/components/HeroArtists.jsx";
import HeroDescription from "../../components/HeroDescription.jsx";
import Navigation from "@/app/components/Navigation.jsx";
import BackArrowButton from "@/app/components/BackArrowButton.jsx";

export default function Artist() {
  const [band, setBand] = useState(null);
  const [schedule, setSchedule] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const slug = window.location.pathname.split("/").pop();

  useEffect(() => {
    if (slug) {
      fetch(`http://localhost:8080/bands/${slug}`)
        .then((res) => res.json())
        .then((data) => {
          setBand(data);
          setLoading(false);
        })
        .catch((err) => {
          setError("Band not found");
          setLoading(false);
        });

      fetch("http://localhost:8080/schedule")
        .then((res) => res.json())
        .then((data) => setSchedule(data))
        .catch((err) => console.error("Error fetching schedule:", err));
    }
  }, [slug]);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Navigation navItems={[{ linkText: "Program", href: "/program" }]} />
      <HeroArtists>
        <HeroDescription>
          <h2>{band.name}</h2>
          <h4>{band.genre}</h4>
        </HeroDescription>
      </HeroArtists>

      <BackArrowButton href="/program" />

      <div className="container band-desc-container mx-auto flex flex-col justify-center w-[50vw]">
        <h4 className="text-orange-300">{band.name}</h4>
        <p className="band-description text-base text-justify">{band.bio}</p>

        <div className="container stage-and-members-container flex justify-between gap-4 mt-6 max-md:flex-col max-md:justify-center max-md:text-center">
          <div>
            <h5 className="text-orange-300">Performance:</h5>
            {getScheduleForBand(band.name).length > 0 ? (
              getScheduleForBand(band.name).map((event) => (
                <span key={event.id}>
                  {event.scene} - {mapDayToName(event.day)}, {event.start} -{" "}
                  {event.end}
                </span>
              ))
            ) : (
              <span>No performance scheduled</span>
            )}
          </div>

          <div className="text-right max-md:text-center">
            <h5 className="text-orange-300">Members:</h5>
            <span>
              {band.members ? band.members.join(", ") : "No members listed"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
