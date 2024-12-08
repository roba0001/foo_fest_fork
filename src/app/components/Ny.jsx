import { useEffect, useState } from "react";

export default function Ny() {
  const [bands, setBands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hent data fra din API
    fetch("http://localhost:8080/bands")
      .then((response) => response.json())
      .then((data) => {
        setBands(data); // Gem data i state
        setLoading(false); // Opdater loading status
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []); // Tom array sikrer, at effekten kun kører én gang ved komponentens første render

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Bands</h1>
      <ul>
        {bands.map((band) => (
          <li key={band.id}>
            <h2>{band.name}</h2>
            {/* Antager band har et logo-URL */}
            <img
              src={`http://localhost:8080/${band.logo}`}
              alt={`${band.name} logo`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
