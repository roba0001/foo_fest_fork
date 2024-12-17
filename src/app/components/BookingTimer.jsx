"use client";

export default function BookingTimer({ seconds, minutes, restart }) {
  return (
    <div>
      <div style={{ fontSize: "100px" }}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
}
