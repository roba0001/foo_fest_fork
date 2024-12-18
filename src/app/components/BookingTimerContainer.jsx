"use client";
import BookingTimer from "@/app/components/BookingTimer";
import { useTimer } from "react-timer-hook";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";

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
    <div className="col-span-2 flex flex-col gap-16 ">
      <div className="flex justify-between z-10  sticky top-20 ">
        <BookingTimer seconds={seconds} minutes={minutes} />
        <div className="col-start-2   xl:hide lg:hide">
          <a href="#shoppingCart">
            <FiShoppingCart className="h-10 w-10 transition-text duration-150 ease-in hover:text-orange-300" />
          </a>
        </div>
      </div>
      {/* mapper igennem alle children og sender timerens start funktion med */}
      {React.Children.map(children, (child) => React.cloneElement(child, { start }))}
    </div>
  );
}
