"use client";
import { useState } from "react";

export default function GuestInput() {
  return (
    <div className="  bg-blue-200 max-w-sm p-7 rounded-3xl shadow-xl">
      <h5 className="mb-3">Guest #1</h5>
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
    </div>
  );
}
