"use client";
import { useState, useEffect } from "react";
import BandsListe from "@/app/components/BandsListe";

export default function GenreFilter() {
  const [bands, setBands] = useState([]);
  const [filteredBands, setFilteredBands] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("Alle");

  useEffect(() => {
    fetch("http://localhost:8080/bands")
      .then((res) => res.json())
      .then((data) => {
        setBands(data || []);
        setFilteredBands(data || []);
      })
      .catch((err) => console.error("Error fetching bands:", err));
  }, []);

  const handleFilterChange = (genre) => {
    setSelectedGenre(genre);
    const filtered =
      genre === "Alle" ? bands : bands.filter((band) => band.genre === genre);
    setFilteredBands(filtered);
  };

  const genres = ["Alle", ...new Set(bands.map((band) => band.genre))];

  return (
    <div>
      {selectedGenre === "Alle"}

      <div>
        <label>Vælg Genre:</label>
        <select
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

      {filteredBands.length > 0 ? (
        <BandsListe bands={filteredBands} />
      ) : (
        selectedGenre !== "Alle"
      )}
    </div>
  );
}
