"use client";
import { useState } from "react";
import Fieldset from "./Fieldset";

export default function GuestInput({ guest }) {
  return (
    <Fieldset title={`Guest #${guest.id} :`}>
      <div className="ml-3 flex flex-col gap-3">
        <div className="flex flex-col">
          <label htmlFor="guestInput">
            {" "}
            <span className="text-red-500 font-bold">* </span>Name:{" "}
          </label>
          <input
            className=" max-w-96 border-2 border-orange-300 rounded-xl p-2"
            type="text"
            id="guestInput"
            name="guest"
            autoComplete="name"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="guestInput">
            {" "}
            <span className="text-red-500 font-bold">* </span>E-mail:{" "}
          </label>
          <input
            className=" max-w-72 border-2 border-orange-300 rounded-xl p-2"
            type="email"
            id="guestInput"
            name="guest"
            autoComplete="email"
            required
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
