"use client";

import Fieldset from "./Fieldset";
import Button from "./Button";
import { useState } from "react";

export default function ShoppingCart() {
  const [title, setTitle] = useState("Shopping Cart");
  const [href, setHref] = useState("page.js");
  const [buttonText, setButtonText] = useState("Go to payment");
  const fixedBookingFee = 99;
  // disse to skal kobles til antal biletter
  const regularTotal = 40;
  const VIPTotal = 100;
  return (
    <Fieldset title={title}>
      <div className="flex justify-between">
        <p>Booking fee: </p>
        <p>{fixedBookingFee}</p>
      </div>
      <div className="flex justify-between">
        <p>Regular pass: </p>
        <p>{regularTotal}</p>
      </div>
      <div className="flex justify-between">
        <p>VIP pass: </p>
        <p>{VIPTotal}</p>
      </div>
      <div className="flex justify-between">
        <p>TOTAL: </p>
        <p>{fixedBookingFee + regularTotal + VIPTotal}</p>
      </div>
      <Button href={href} buttonText={buttonText}></Button>
    </Fieldset>
  );
}
