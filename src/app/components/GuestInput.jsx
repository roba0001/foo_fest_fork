"use client";
import { useForm } from 'react-hook-form'
import { useState } from "react";
import Fieldset from "./Fieldset";
import { getInfo } from "@/lib/supabase";

export default function GuestInput({ guest })
{
    
  return (
    <Fieldset title={`Guest #${guest.id} :`}>
      <div className="ml-3 flex flex-col gap-3">
        <div className="flex flex-col">
          <label htmlFor="guestFirstName">
            <span className="text-red-500 font-bold">* </span>First name:{" "}
          </label>
          <input
            className=" max-w-96 border-2 border-orange-300 rounded-xl p-2"
            type="text"
            id="guestFirstName"
            name="guestFirstName"
            autoComplete="given-name"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="guestLastName">
            <span className="text-red-500 font-bold">* </span>Last name:{" "}
          </label>
          <input
            className=" max-w-96 border-2 border-orange-300 rounded-xl p-2"
            type="text"
            id="guestLastName"
            name="guestLastName"
            autoComplete="family-name"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="guestEmail">
            {" "}
            <span className="text-red-500 font-bold">* </span>E-mail:{" "}
          </label>
          <input
            className=" max-w-72 border-2 border-orange-300 rounded-xl p-2"
            type="email"
            id="guestEmail"
            name="guestEmail"
            autoComplete="email"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="guestPhone">Phone: </label>
          <input
            className=" max-w-56 border-2 border-orange-300 rounded-xl p-2"
            type="tel"
            id="guestPhone"
            name="guestPhone"
            autoComplete="tel"
          />
        </div>
      </div>
    </Fieldset>
  );
}
