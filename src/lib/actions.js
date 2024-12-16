"use client";
import { postInfo } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

// export async function sendData(formData) {
//   console.log("form indsendt");
//   const data = {
//     area: formData.get("area"),
//     guestFirstName: formData.get("guestFirstName"),
//     guestLastName: formData.get("guestLastName"),
//     guestEmail: formData.get("guestEmail"),
//     guestPhone: formData.get("guestPhone"),
//   };
//   await postInfo(data);

//   revalidatePath("/");
// }

// FooFest API
// put reserve spot
const glitchHeadersList = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Prefer: "return=representation",
};

export default async function putReservation(reservationData) {
  console.log("putReservation called: ", JSON.stringify(reservationData));
  // event.preventDefault();
  const response = await fetch("http://localhost:8080/reserve-spot", {
    method: "PUT",
    headers: glitchHeadersList,
    body: JSON.stringify(reservationData),
  });

  const reservationId = await response.json();
  console.log(reservationId);
  return reservationId;
}

// ----------- post id her ------------
