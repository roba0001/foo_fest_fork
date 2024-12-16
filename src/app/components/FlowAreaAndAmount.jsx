"use client";
import putReservation from "@/lib/actions";
import AreaInput from "./AreaInput";
import GuestPassPriceCalculator from "./GuestPassPriceCalculator";
import Count from "./Count";
import useStore from "../store/state";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sayHello } from "@/lib/actions";

export default function FlowAreaAndAmount() {
  // hent antal biletter fra zustand store
  const { count } = useStore();

  //   funktionen der kører når onSubmit på form
  async function handleFormSubmit(event) {
    // ingen refresh
    event.preventDefault();

    const formData = new FormData(event.target);

    // få areanavn og antal ledige pladser fra AreaInput komponentens value, og split dem ad ved : (kolon)
    const [area, availableSpots] = formData.get("area").split(":");

    // funktionen for alert
    const alert = () => {
      if (availableSpots == 1) {
        // hvis der kun er en plads brug ordet spot
        toast.warning(
          `There is only ${availableSpots} available spot in ${area}, try a different area!`,
          {
            position: "top-left",
          }
        );
      } else {
        toast.warning(
          // ellers hvis der er mere end 1, brug ordet spots
          `There are only ${availableSpots} available spots in ${area}, try a different area!`,
          {
            position: "top-left",
          }
        );
      }
    };

    // kør funktionen alert hvis antal biletter er større end antal ledige pladser
    if (count > availableSpots) {
      alert();
    }

    // lav er variabel der sendes med ned til putReservation (PUT request).
    // Sæt amount til at have værdi af count(antal biletter)
    const reservationData = {
      area,
      amount: count,
    };

    console.log("reservationData", reservationData);
    console.log("availableSpots", availableSpots);

    await putReservation(reservationData);
  }

  return (
    <>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-5  justify-start">
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
