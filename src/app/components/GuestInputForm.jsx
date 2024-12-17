"use client";
import { postReservation } from "@/lib/actions";
import { useStore } from "@/app/store";
import FormButton from "./FormButton";
import GuestInput from "./GuestInput";
import { postInfo } from "@/lib/supabase";
import { useState } from "react";

export default function GuestInputForm() {
  // hent antal billetter fra zustand store
  const { count, reservationId } = useStore();

  //   Victor udskifter dette med det rigtige array af gæster
  let guests = [
    { name: "Ronja", id: 1 },
    { name: "Bonja", id: 2 },
  ];

  // Funktion der kører når form bliver submitted
  async function handleFormSubmit(event) {
    // ingen refresh
    event.preventDefault();

    //---- SUPABASE POST request ----
    const formData = new FormData(event.target);
    const guestsData = guests.map((guest) => ({
      guestFirstName: formData.get(`guestFirstName_${guest.id}`),
      guestLastName: formData.get(`guestLastName_${guest.id}`),
      guestEmail: formData.get(`guestEmail_${guest.id}`),
      guestPhone: formData.get(`guestPhone_${guest.id}`),
    }));

    // looper igennem guestsData og for hver guest sender den en POST request med postInfo(guestData) til supabase.
    for (const guestData of guestsData) {
      await postInfo(guestData);
      console.log("FORMDATA SENT TO SUPABASE");
    }

    // ---------

    // -----API POST request------
    console.log("reservationId fra GIF:  ", reservationId);
    const reservationData = { id: reservationId };
    console.log("dette sender vi til postReservation", reservationData);

    try {
      const response = await postReservation(reservationData);
      console.log("Response from postReservation:", response);
    } catch (error) {
      console.error("Error in postReservation:", error);
    }

    // ---------------------------

    // console.log("reservationId from GuestInputForm: ", reservationId);
  }

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-5 items-center">
      {guests.map((guest) => (
        <GuestInput key={guest.id} guest={guest} />
      ))}
      <FormButton buttonText={"Confirm reservation"}></FormButton>
    </form>
  );
}
