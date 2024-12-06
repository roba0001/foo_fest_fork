"use client";

import { useState, useEffect } from "react";
import Fieldset from "./Fieldset";

export default function AreaInput() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("Choose Location:");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8080/available-spots");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <Fieldset title={title}>
      {data.map((area) => (
        <div key={area.available} className="hover:bg-orange-100 rounded-2xl p-3">
          <label className="ml-3 flex justify-between" htmlFor={area.area}>
            {area.area}
            <input type="radio" id={area.area} name="area" value={area.area} />
          </label>
        </div>
      ))}
    </Fieldset>
  );
}
