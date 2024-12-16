"use client";
import useStore from "@/app/store/state";

export default function CountButtons() {
  const { increaseCount, resetCount, decreaseCount } = useStore();
  return (
    <section>
      <button className="bg-green-400" onClick={() => increaseCount()}>
        + one
      </button>
      <button className="bg-red-400" onClick={() => decreaseCount()}>
        - one
      </button>
      <button className="bg-blue-400" onClick={() => resetCount()}>
        Reset
      </button>
    </section>
  );
}
