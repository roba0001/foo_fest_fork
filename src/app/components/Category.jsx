"use client";
import { useState, useEffect } from "react";
import BandsListe from "@/app/components/BandsListe";

export default function GenreFilter() {
  const [bands, setBands] = useState([]); // Sørg for at bands starter som et tomt array
  const [filteredBands, setFilteredBands] = useState([]); // Sørg for at filteredBands starter som et tomt array
  const [selectedGenre, setSelectedGenre] = useState("Alle");

  useEffect(() => {
    fetch("http://localhost:8080/bands")
      .then((res) => res.json())
      .then((data) => {
        setBands(data || []); // Hvis data er undefined, sæt det til et tomt array
        setFilteredBands(data || []); // Hvis data er undefined, sæt det til et tomt array
      })
      .catch((err) => console.error("Error fetching bands:", err));
  }, []);

  const handleFilterChange = (genre) => {
    setSelectedGenre(genre);
    const filtered = genre === "Alle" ? bands : bands.filter((band) => band.genre === genre);
    setFilteredBands(filtered);
  };

  const genres = ["Alle", ...new Set(bands.map((band) => band.genre))];

  return (
    <div className="container mx-auto p-6">
      {selectedGenre === "Alle" && <h1 className="text-2xl font-bold mb-4">Bands på Festivalen</h1>}

      <div className="mb-6">
        <label className="text-lg font-semibold mr-4">Vælg Genre:</label>
        <select
          className="p-2 border rounded-md"
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
        selectedGenre !== "Alle" && (
          <p className="text-gray-500">Ingen bands fundet for denne genre.</p>
        )
      )}
    </div>
  );
}
