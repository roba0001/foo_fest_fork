"use client";

// -------- FOOFEST API ----------
// PUT request
const glitchHeadersList = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Prefer: "return=representation",
};

export default async function putReservation(reservationData) {
  const response = await fetch("http://localhost:8080/reserve-spot", {
    method: "PUT",
    headers: glitchHeadersList,
    body: JSON.stringify(reservationData),
  });

  const responseData = await response.json();
  const reservationId = responseData.id;
  return reservationId;
}

// POST request med reservationId
export async function postReservation(reservationData) {
  console.log("postReservation funktion kører");
  const response = await fetch("http://localhost:8080/fullfill-reservation", {
    method: "POST",
    headers: glitchHeadersList,
    body: JSON.stringify(reservationData),
  });

  const data = await response.json();
  console.log("response from POST request", data);
  return data;
}
