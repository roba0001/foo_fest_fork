"use client";
import putReservation from "@/lib/actions";
import AreaInput from "./AreaInput";
import GuestPassPriceCalculator from "./GuestPassPriceCalculator";
import Count from "./Count";
import useStore from "../store/state";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FlowAreaAndAmount() {
  const { count } = useStore();

  async function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const [area, availableSpots] = formData.get("area").split(":");

    const reservationData = {
      area,
      availableSpots: parseInt(availableSpots, 10),
    };

    const alert = () => {
      toast.warning(
        `There are only ${reservationData.availableSpots} spots left in this area, try a different one!`,
        { position: "top-left" }
      );
    };

    if (count <= reservationData.availableSpots) {
      console.log("there are spots available");
    } else {
      alert();
    }

    await putReservation(event, reservationData);
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
      <button type="button" onClick={alert}>
        Toast me!
      </button>
      <ToastContainer />
    </>
  );
}
