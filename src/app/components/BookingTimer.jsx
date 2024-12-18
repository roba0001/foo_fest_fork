"use client";

export default function BookingTimer({ seconds, minutes }) {
  return (
    <div className="flex justify-end sticky top-28  px-8 py-2 w-fit h-fit bg-orange-100  h-40 w-30 rounded-full text-xl">
      <h5>
        <span>{minutes}</span>:<span>{seconds}</span>
      </h5>
    </div>
  );
}
