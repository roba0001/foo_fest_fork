"use client";
import putReservation from "@/lib/actions";
import AreaInput from "./AreaInput";
import GuestPassPriceCalculator from "./GuestPassPriceCalculator";
import Count from "./Count";
import { useStore } from "@/app/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookingTimer from "@/app/components/BookingTimer";
import { useTimer } from "react-timer-hook";

export default function FlowAreaAndAmount() {
  // sæt timeren til 5 minutter
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 300);

  // lav variablerne der skal sendes med ned til BookingTimer komponenten
  const { seconds, minutes, start } = useTimer({
    //
    expiryTimestamp,
    // ændre denne til at stoppe uret og refreshe siden (??) / sende en alert når done
    onExpire: () => console.warn("Timer expired"),
    // ikke start timeren automatisk
    autoStart: false,
  });

  // hent antal billetter fra zustand store
  const { count } = useStore();

  // Funktion der kører onSubmit på form
  async function handleFormSubmit(event) {
    // ingen refresh
    event.preventDefault();

    const formData = new FormData(event.target);

    // få areanavn og antal ledige pladser fra AreaInput's input value, og split dem ad ved : (kolon)
    const [area, availableSpots] = formData.get("area").split(":");

    // funktionen alert der kører warnings baseret på spot availability
    const alert = () => {
      if (availableSpots == 1) {
        // hvis der kun er en plads, brug ordet spot
        toast.warning(
          `There is only ${availableSpots} available spot in ${area}, try a different area!`,
          { position: "top-left" }
        );
      } else {
        // hvis der er flere, brug ordet spots

        toast.warning(
          `There are only ${availableSpots} available spots in ${area}, try a different area!`,
          { position: "top-left" }
        );
      }
    };

    // kør alert hvsi antal biletter er større end antal ledige pladser
    if (count > availableSpots) {
      alert();
    } else {
      // ellers, start timeren
      start();
    }

    // lav variabel der sendes med ned til putReservation (vores PUT reuquest)
    // sæt amount til at være værdien af count (antal billetter)
    const reservationData = { area, amount: count };

    console.log("reservationData", reservationData);
    console.log("availableSpots", availableSpots);

    await putReservation(reservationData);
  }

  return (
    <>
      <BookingTimer seconds={seconds} minutes={minutes} />

      <form onSubmit={handleFormSubmit} className="flex flex-col gap-5 justify-start">
        <AreaInput />
        <Count />
        <button className="bg-blue-200 hover:bg-blue-300 w-24 rounded-3xl p-5" type="submit">
          Submit form
        </button>
      </form>

      <ToastContainer />
    </>
  );
}
