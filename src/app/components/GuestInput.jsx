"use client";
import { useState } from "react";
import Fieldset from "./Fieldset";
import { getInfo } from "@/lib/supabase";

export default async function GuestInput() {
  const [title, setTitle] = useState("Guest #1");
  const allGuestInformation = await getInfo();
  return (
    <div>
      <Fieldset title={title}>
        <div className="ml-3 flex flex-col gap-3">
          <div className="flex flex-col">
            <label htmlFor="name">Name: </label>
            <input
              className="border-2 border-orange-300 rounded-xl p-2"
              type="text"
              id="name"
              name="guest"
              autoComplete="name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email">E-mail: </label>
            <input
              className="border-2 border-orange-300 rounded-xl p-2"
              type="email"
              id="email"
              name="guest"
              autoComplete="email"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="tel">Phone: </label>
            <input
              className="border-2 border-orange-300 rounded-xl p-2"
              type="tel"
              id="tel"
              name="guest"
              autoComplete="tel"
            />
          </div>
        </div>
      </Fieldset>

      <ul>
        {allGuestInformation.map((guestInformation) => (
          <li key={guestInformation.id}>
            {guestInformation.name} - {guestInformation.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
