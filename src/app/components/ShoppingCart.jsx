"use client";

import Fieldset from "./Fieldset";
import Button from "./Button";
import { useState } from "react";

export default function ShoppingCart() {
  const [title, setTitle] = useState("Shopping Cart");
  const regularTotal = 24;
  const VIPTotal = 100;
  return (
    <Fieldset title={title}>
      <div>
        <p>Regular pass: </p>
        <p>{regularTotal}</p>
      </div>
      <div>
        <p>VIP pass: </p>
        <p>{VIPTotal}</p>
      </div>
      <button>Go to payment</button>
    </Fieldset>
  );
}
