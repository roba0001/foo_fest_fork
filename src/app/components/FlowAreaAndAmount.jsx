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
  const { count } = useStore();

  async function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const [area, amount] = formData.get("area").split(":");

    const reservationData = {
      area,
      amount: parseInt(amount, 10),
    };

    console.log(reservationData);

    const alert = () => {
      toast.warning(
        `There are only ${reservationData.amount} available spots in ${reservationData.area}, try a different area!`,
        { position: "top-left" }
      );
    };

    if (count <= reservationData.amount) {
      console.log("there are spots available");
    } else {
      alert();
    }

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
