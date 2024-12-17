"use client";
import useStore from "@/app/store/state";
import Button from "./Button";

export default function CountButtons() {
  const { increaseCount, resetCount, decreaseCount } = useStore();
  return (
    <section className="flex gap-2">
      <button
        type="button"
        className="px-8 py-2 w-fit h-fit bg-buttonBackgroundColor text-white h-40 w-30 rounded-full text-xl transition-bg duration-150 ease-in hover:bg-buttonHoverBackgroundColor"
        onClick={() => increaseCount()}
      >
        + one
      </button>
      <button
        type="button"
        className="px-8 py-2 w-fit h-fit bg-buttonBackgroundColor text-white h-40 w-30 rounded-full text-xl transition-bg duration-150 ease-in hover:bg-buttonHoverBackgroundColor"
        onClick={() => decreaseCount()}
      >
        - one
      </button>
      <button
        type="button"
        className="px-8 py-2 w-fit h-fit bg-buttonBackgroundColor text-white h-40 w-30 rounded-full text-xl transition-bg duration-150 ease-in hover:bg-buttonHoverBackgroundColor"
        onClick={() => resetCount()}
      >
        Reset
      </button>
    </section>
  );
}
