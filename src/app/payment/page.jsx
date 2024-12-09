"use client";

import { useState } from "react";
import Fieldset from "../components/Fieldset";
import Form from "../components/Form";
import Button from "../components/Button";
import FormButton from "../components/FormButton";

export default function Payment() {
  const [title, setTitle] = useState("Payment info");
  const [href, setHref] = useState("#");
  const [buttonText, setButtonText] = useState("Submit");
  //   const [onSubmit, setOnSubmit] = useState();

  function submitForm(event) {
    event.preventDefault();
    console.log("form submitted");
  }

  return (
    <Form submitForm={submitForm}>
      <Fieldset title={title}>
        <div className="flex flex-col gap-3 md:gap-5">
          <div className="flex flex-col">
            <label htmlFor="cardNumber">Card number:</label>
            <input
              id="cardNumber"
              type="text"
              name="cardInformation"
              autoComplete="cc-number"
              className="w-56 bg-slate-200 rounded-xl pl-2"
            ></input>
          </div>

          <div className="flex flex-col">
            <label htmlFor="cardExpirationMM cardExpirationYY">Expiration date:</label>
            <div className="flex bg-slate-200 rounded-xl w-fit">
              <input
                id="cardExpirationMM"
                type="text"
                name="cardInformation"
                autoComplete="cc-exp"
                placeholder="MM "
                maxLength={2}
                className="w-8 mr-2 ml-2 bg-slate-200 text-center"
              ></input>
              <span> / </span>
              <input
                id="cardExpirationYY"
                type="text"
                name="cardInformation"
                autoComplete="cc-exp"
                placeholder=" YY"
                maxLength={2}
                className="w-8  ml-2 mr-2 bg-slate-200 text-center"
              ></input>
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="cardCVC">Security number (CVC)</label>
            <input
              id="cardCVC"
              type="text"
              name="cardInformation"
              max={3}
              className="w-14 bg-slate-200 rounded-xl pl-2 pr-2 text-center"
            ></input>
          </div>

          <div className="flex gap-2 items-start">
            <input
              id="termsCheckbox"
              type="checkbox"
              name="cardInformation"
              className="bg-slate-200 rounded-xl pl-2 pr-2 text-center mt-1"
              required
            ></input>
            <span className="text-red-500 font-bold">* </span>
            <label htmlFor="termsCheckbox">
              I have read and agree to the website terms and conditions{" "}
            </label>
          </div>

          <div className="self-center ">
            <FormButton href={href} buttonText={buttonText}></FormButton>
          </div>
        </div>
      </Fieldset>
    </Form>
  );
}
