"use client";
import { useState } from "react";
import Fieldset from "./Fieldset";

export default function GuestInput({ guest }) {
  const [title, setTitle] = useState(`Guest #${guest.id} :`);
  return (
    <Fieldset title={title}>
      <div className="ml-3 flex flex-col gap-3">
        <div className="flex flex-col">
          <label htmlFor="guestInput">Name: </label>
          <input
            className=" max-w-96 border-2 border-orange-300 rounded-xl p-2"
            type="text"
            id="guestInput"
            name="guest"
            autoComplete="name"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="guestInput">E-mail: </label>
          <input
            className=" max-w-72 border-2 border-orange-300 rounded-xl p-2"
            type="email"
            id="guestInput"
            name="guest"
            autoComplete="email"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="guestInput">Phone: </label>
          <input
            className=" max-w-56 border-2 border-orange-300 rounded-xl p-2"
            type="tel"
            id="guestInput"
            name="guest"
            autoComplete="tel"
          />
        </div>
      </div>
    </Fieldset>
  );
}
