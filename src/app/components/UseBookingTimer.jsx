"use client";
import { useState, useEffect } from "react";
import { useTimer } from "react-timer-hook";

export function UseBookingTimer(expiryTimestamp, onExpireCallback = () => {}) {
  const { seconds, minutes, start, restart } = useTimer({
    expiryTimestamp,
    onExpire: onExpireCallback,
    autoStart: false,
  });

  const [currentSeconds, setCurrentSeconds] = useState(seconds);
  const [currentMinutes, setCurrentMinutes] = useState(minutes);

  useEffect(() => {
    setCurrentSeconds(seconds);
    setCurrentMinutes(minutes);
  }, [seconds, minutes]);

  function startTimer() {
    console.log("Timer: ", minutes, seconds);
    start();
  }

  function restartTimer(secondsToAdd = 300) {
    const time = new Date();
    time.setSeconds(time.getSeconds() + secondsToAdd);
    restart(time);
  }

  return {
    seconds,
    minutes,
    startTimer,
    restartTimer,
  };
}
