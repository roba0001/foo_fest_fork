"use client";

export default function BookingTimer({ seconds, minutes }) {
  return (
    <div className="flex justify-end sticky top-20">
      <div>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
}
