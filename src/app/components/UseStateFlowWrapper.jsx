"use client";

import { useState } from "react";
import FlowAreaAndAmount from "./FlowAreaAndAmount";
import GuestInputForm from "./GuestInputForm";

export default function ClientWrapper({ start }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div>
      <FlowAreaAndAmount
        isDisabled={isDisabled}
        setIsDisabled={setIsDisabled}
        start={start}
        setIsVisible={setIsVisible}
      />
      <GuestInputForm isVisible={isVisible} />
    </div>
  );
}
