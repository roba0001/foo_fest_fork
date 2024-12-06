"use client";
import { useState } from "react";
import Fieldset from "./Fieldset";

export default function GuestInput() {
  const [title, setTitle] = useState("Guest #1");
  return (
    <Fieldset title={title}>
      <div className="ml-3 flex flex-col gap-3">
        <div className="flex flex-col">
          <label htmlFor="guestInput">Name: </label>
          <input type="text" id="guestInput" name="guest" autoComplete="name" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="guestInput">E-mail: </label>
          <input type="email" id="guestInput" name="guest" autoComplete="email" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="guestInput">Phone: </label>
          <input type="tel" id="guestInput" name="guest" autoComplete="tel" />
        </div>
      </div>
    </Fieldset>
  );
}
