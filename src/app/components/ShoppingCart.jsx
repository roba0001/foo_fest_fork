"use client";

import Fieldset from "./Fieldset";
import Button from "./Button";
import { useState } from "react";

export default function ShoppingCart() {
  const [title, setTitle] = useState("Shopping Cart");
  const [href, setHref] = useState("/payment");
  const [buttonText, setButtonText] = useState("Go to payment");
  const fixedBookingFee = 99;
  const greenCampingFee = 299;
  // disse to skal kobles til antal biletter
  const regularTotal = 40;
  const vipTotal = 100;
  return (
    <Fieldset title={title}>
      <div className="flex flex-col justify-between min-h-64">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <p>Booking fee: </p>
            <p>{fixedBookingFee},-</p>
          </div>
          <div className="flex justify-between">
            <p>Regular pass: </p>
            <p>{regularTotal},-</p>
          </div>
          <div className="flex justify-between">
            <p>VIP pass: </p>
            <p>{vipTotal},-</p>
          </div>
        </div>

        <div>
          <div className="flex justify-between bg-blue-100 rounded-2xl p-3 mb-4">
            <p>TOTAL: </p>
            <p className="font-bold">{fixedBookingFee + regularTotal + vipTotal},-</p>
          </div>
          <Button href={href} buttonText={buttonText}></Button>
        </div>
      </div>
    </Fieldset>
  );
}
