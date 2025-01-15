"use client";
import { useState, useEffect } from "react";
import BandsListe from "@/app/components/BandsListe";
import ArtistFilter from "./ArtistFilter.jsx";

export default function GenreOrSceneFilter()
{
  const [bands, setBands] = useState([]);
  const [filteredBands, setFilteredBands] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [scenes, setScenes] = useState([]);
  const [selectedScene, setSelectedScene] = useState("All");
  const [schedule, setSchedule] = useState({});

  useEffect(() =>
  {
    fetch("https://polarized-chrome-trouser.glitch.me/bands")
      .then((res) => res.json())
      .then((data) =>
      {
        setBands(data || []);
        setFilteredBands(data || []);
      })
      .catch((err) => console.error("Error fetching bands:", err));

    fetch("https://polarized-chrome-trouser.glitch.me/schedule")
      .then((res) => res.json())
      .then((data) =>
      {
        const sceneNames = Object.keys(data);
        setScenes(["All", ...sceneNames]);
        setSchedule(data);
      })
      .catch((err) => console.error("Error fetching schedule:", err));
  }, []);

  const handleFilterChange = (value) =>
  {
    setFilteredBands(
      bands.filter((band) =>
        band.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleGenreChange = (genre) =>
  {
    setSelectedGenre(genre);
    setSelectedScene("All");
    filterBands(genre, "All");
  };

  const handleSceneChange = (scene) =>
  {
    setSelectedScene(scene);
    setSelectedGenre("All");
    filterBands("All", scene);
  };

  const filterBands = (genre, scene) =>
  {
    if (genre !== "All" && scene === "All")
    {
      const filtered = bands.filter((band) => band.genre === genre);
      setFilteredBands(filtered);
    } else if (scene !== "All" && genre === "All")
    {
      const filtered = bands.filter((band) =>
      {
        const bandSchedule = getScheduleForBand(band.name);
        return bandSchedule.some(
          (scheduleEntry) => scheduleEntry.scene === scene
        );
      });
      setFilteredBands(filtered);
    } else if (genre === "All" && scene === "All")
    {
      setFilteredBands(bands);
    }
  };

  const getScheduleForBand = (bandName) =>
  {
    const bandSchedule = [];
    for (const scene in schedule)
    {
      for (const day in schedule[scene])
      {
        const events = schedule[scene][day].filter((event) =>
          event.act.includes(bandName)
        );
        if (events.length > 0)
        {
          events.forEach((event) =>
          {
            bandSchedule.push({
              scene,
              day,
              start: event.start,
              end: event.end,
              cancelled: event.cancelled !== undefined ? event.cancelled : false,
            });
          });
        }
      }
    }
    return bandSchedule;
  };

  const genres = ["All", ...new Set(bands.map((band) => band.genre))].sort();

  return (
    <div className="container mx-auto px-4 bg-white custom-border p-7">
      <div className="flex justify-between items-center mb-8">
        <div className="pb-3.5 flex items-center align-center justify-between w-full max-md:flex-col max-md:gap-8">
          {/* Artist Filter */}
          <ArtistFilter onFilterChange={handleFilterChange} />

          {/* Genre Filter */}
          <div className="-order-1 whitespace-nowrap">
            <label className="pb-3.5 text-heading-four mr-4">
              Select genre:
            </label>
            <select
              className="vip-ticket-counter-background-color rounded-[20px] px-4 py-2 cursor-pointer"
              value={selectedGenre}
              onChange={(e) => handleGenreChange(e.target.value)}
            >
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="pb-3.5">
        <label className="pb-3.5 text-heading-four">Select scene:</label>
        <select
          className="vip-ticket-counter-background-color rounded-[20px]"
          value={selectedScene}
          onChange={(e) => handleSceneChange(e.target.value)}
        >
          {scenes.map((scene) => (
            <option key={scene} value={scene}>
              {scene}
            </option>
          ))}
        </select>
      </div>

      {filteredBands.length > 0 ? (
        <BandsListe bands={filteredBands} getScheduleForBand={getScheduleForBand} />
      ) : null}
    </div>
  );
}
