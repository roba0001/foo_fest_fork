"use client";
import putReservation from "@/lib/actions";
import AreaInput from "./AreaInput";
import GuestPassPriceCalculator from "./GuestPassPriceCalculator";
import { useStore } from "@/app/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import BookingTimer from "@/app/components/BookingTimer";
// import { useTimer } from "react-timer-hook";
import FormButton from "./FormButton";

export default function FlowAreaAndAmount({ start }) {
  // sæt timeren til 5 minutter
  // const expiryTimestamp = new Date();
  // expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 10);

  // // lav variablerne der skal sendes med ned til BookingTimer komponenten
  // const { seconds, minutes, start, restart } = useTimer({
  //   //
  //   expiryTimestamp,
  //   // ændre denne til at stoppe uret og refreshe siden (??) / sende en alert når done
  //   onExpire: () => {
  //     console.warn("Timer expired");

  //     // ny const, så den starter på 5min hver gang den restarter med 1 sekunds delay inden den restarter
  //     setTimeout(() => {
  //       const newExpiryTimestamp = new Date();
  //       newExpiryTimestamp.setSeconds(newExpiryTimestamp.getSeconds() + 10);
  //       restart(newExpiryTimestamp);
  //     }, 1000);

  //     restart(newExpiryTimestamp);
  //   },

  //   // ikke start timeren automatisk
  //   autoStart: false,
  // });

  // hent antal billetter og reservationID fra zustand store
  const { count } = useStore();
  const { reservationId, setReservationId } = useStore();

  // Funktion der kører når form bliver submitted
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
      // clear reservationID
      setReservationId(null);
    }

    // lav variabel der sendes med ned til putReservation (vores PUT reuquest)
    // sæt amount til at være værdien af count (antal billetter)
    const reservationData = { area, amount: count };

    // variabel med ny reservationId
    const newReservationId = await putReservation(reservationData);
    // set reservationId til at have værdi af det nye reservationId
    setReservationId(newReservationId);

    console.log("reservationId fra FAAA: ", reservationId);
  }

  return (
    <section>
      {/* <BookingTimer seconds={seconds} minutes={minutes} /> */}

      <form onSubmit={handleFormSubmit} className="flex flex-col gap-16 items-center">
        <AreaInput />
        <GuestPassPriceCalculator />

        <FormButton buttonText={"Reserve your spots"}></FormButton>
      </form>

      <ToastContainer />
    </section>
  );
}
