"use client";

import Form from "../components/Form";
import AreaInput from "../components/AreaInput";
import RootLayout from "../layout";
import GuestInput from "../components/GuestInput";
import GuestAmount from "../components/GuestAmount";
import Fieldset from "../components/Fieldset";
import { useState } from "react";

export default function Book() {
  const [title, setTitle] = useState("Test");
  return (
    <section>
      <h1>BOOK YOUR STAY</h1>

      <Form>
        <Fieldset title={title} />
        {/* <AreaInput />
        <GuestAmount />
        <GuestInput /> */}
      </Form>
    </section>
  );
}
