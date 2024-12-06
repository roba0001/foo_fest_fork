"use client";

import Fieldset from "./Fieldset";
import { useState } from "react";

export default function ShoppingCart() {
  const [title, setTitle] = useState("Shopping Cart");
  return <Fieldset title={title}></Fieldset>;
}
