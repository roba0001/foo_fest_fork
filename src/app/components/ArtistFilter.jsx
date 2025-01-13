"use client";
import { useState } from "react";

export default function ArtistFilter({ onFilterChange })
{
    const [filterValue, setFilterValue] = useState("");

    const handleFilterChange = (e) =>
    {
        const value = e.target.value;
        setFilterValue(value);  // Update the local state of ArtistFilter
        onFilterChange(value);  // Notify the parent component (BandsList)
    }

    return (
        <input
            type="text"
            className="border-3 border-orange-300 rounded-md mb-4 py-1 text-xl indent-2 focus:ring-0 focus:outline-none"
            autoFocus
            placeholder="Search for artists"
            value={filterValue}
            onChange={handleFilterChange}
        />
    );
}
