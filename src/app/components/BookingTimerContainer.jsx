"use client";
import BookingTimer from "@/app/components/BookingTimer";
import { useTimer } from "react-timer-hook";
import React from "react";

export default function BookingTimerContainer({ children }) {
  // sæt timeren til 5 minutter
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 300);

  // lav variablerne der skal sendes med ned til BookingTimer komponenten
  const { seconds, minutes, start, restart } = useTimer({
    //
    expiryTimestamp,
    // ændre denne til at stoppe uret og refreshe siden (??) / sende en alert når done
    onExpire: () => {
      console.warn("Timer expired");
      pause();
    },

    // ikke start timeren automatisk
    autoStart: false,
  });

  return (
    <div>
      <BookingTimer seconds={seconds} minutes={minutes} />
      {/* map through children and pass the function start as a prop to all children */}
      {React.Children.map(children, (child) => React.cloneElement(child, { start }))}
    </div>
  );
}
