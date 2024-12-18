"use client";
import putReservation from "@/lib/actions";
import AreaInput from "./AreaInput";
import GuestPassPriceCalculator from "./GuestPassPriceCalculator";
import { useStore } from "@/app/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import FormButton from "./FormButton";

export default function FlowAreaAndAmount({ start, setIsVisible, isDisabled, setIsDisabled }) {
  // hent antal billetter og reservationId fra zustand store
  const { count, setReservationId } = useStore();

  async function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const [area, availableSpots] = formData.get("area").split(":");

    const alert = () => {
      if (availableSpots == 1) {
        toast.warning(
          `There is only ${availableSpots} available spot in ${area}, try a different area!`,
          { position: "top-left" }
        );
      } else {
        toast.warning(
          `There are only ${availableSpots} available spots in ${area}, try a different area!`,
          { position: "top-left" }
        );
      }
    };

    if (count > availableSpots) {
      alert();
    } else {
      start();
      setReservationId(null);
      setIsVisible(true);
      setIsDisabled(true);
    }

    // lav variabel der sendes med ned til putReservation (vores PUT reuquest)
    // sæt amount til antal biletter
    const reservationData = { area, amount: count };

    // send reservationData med ned og kald PUTfunktionen
    // put funktionens return (reservationId) i en variabel
    const newReservationId = await putReservation(reservationData);

    // set reservationId i zustand den returnerede reservationData's værdi
    setReservationId(newReservationId);

    console.log("reservationId sendt til PUT: ", newReservationId);
  }

  return (
    <section>
      <form
        onSubmit={handleFormSubmit}
        className={`${
          isDisabled ? "form-disabled" : ""
        }  flex flex-col gap-16 items-center mb-16 z-0`}
      >
        <AreaInput />
        <GuestPassPriceCalculator />

        <FormButton buttonText={"Reserve your spots"}></FormButton>
      </form>

      <ToastContainer />
    </section>
  );
}
