"use client";
import putReservation from "@/lib/actions";
import AreaInput from "./AreaInput";
import GuestPassPriceCalculator from "./GuestPassPriceCalculator";
import TicketCounter from "./TicketCounter";
import Count from "./Count";
import useStore from "../store/state";

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

    if (count <= reservationData.availableSpots) {
      console.log("there are spots available");
    } else {
      console.log("there are no spots available");
    }

    console.log(`There are ${reservationData.availableSpots} left in area ${reservationData.area}`);
    console.log("count is at: ", count);

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
    </>
  );
}
