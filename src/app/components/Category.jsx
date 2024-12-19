"use client";
import { useState, useEffect } from "react";
import BandsListe from "@/app/components/BandsListe";

export default function GenreFilter() {
  const [bands, setBands] = useState([]);
  const [filteredBands, setFilteredBands] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("Alle");

  useEffect(() => {
    fetch("https://polarized-chrome-trouser.glitch.me/bands")
      .then((res) => res.json())
      .then((data) => {
        setBands(data || []);
        setFilteredBands(data || []);
      })
      .catch((err) => console.error("Error fetching bands:", err));
  }, []);

  const handleFilterChange = (genre) => {
    setSelectedGenre(genre);
    const filtered = genre === "All" ? bands : bands.filter((band) => band.genre === genre);
    setFilteredBands(filtered);
  };

  const genres = ["All", ...new Set(bands.map((band) => band.genre))];

  return (
    <div class="container mx-auto px-4  bg-white  custom-border p-7 ">
      {selectedGenre === "All"}

      <div className="p-3 pb-3.5 ">
        <label className="pb-3.5 text-heading-four">Select genre:</label>
        <select
          className="vip-ticket-counter-background-color rounded-[20px]"
          value={selectedGenre}
          onChange={(e) => handleFilterChange(e.target.value)}
        >
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      {filteredBands.length > 0 ? <BandsListe bands={filteredBands} /> : selectedGenre !== "All"}
    </div>
  );
}
