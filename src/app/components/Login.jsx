"use client";
import { useState } from "react";
import FormButton from "./FormButton";
import Form from "./Form";

import { Popover } from "@nextui-org/popover";
import { PopoverTrigger } from "@nextui-org/popover";
import { PopoverContent } from "@nextui-org/popover";
import { CgProfile } from "react-icons/cg";

export default function Login() {
  const style = { color: "orange", height: "2.5em", width: "2.5em", cursor: "pointer" };

  const submitForm = async (event) => {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(event.target);

    await fetch("/login", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <>
      <div className="flex justify-end">
        <Popover placement="bottom-end" backdrop="opaque">
          <PopoverTrigger>
            <CgProfile style={style} />
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <Form submitForm={submitForm}>
                <fieldset className="flex flex-col bg-white custom-border p-7 gap-4">
                  <legend className="sr-only">Login</legend>
                  <h5 className="text-center mb-4">Login to your account</h5>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="username">
                      {" "}
                      <span className="text-red-500 font-bold">* </span>Username:
                    </label>
                    <input
                      id="username"
                      type="text"
                      className="bg-slate-200 p-2 custom-border"
                      name="username"
                      autoComplete="username"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="password">
                      {" "}
                      <span className="text-red-500 font-bold">* </span>Password:
                    </label>
                    <input
                      id="password"
                      type="password"
                      className="bg-slate-200 p-2 custom-border"
                      name="password"
                      autoComplete="current-password"
                      required
                    />
                  </div>
                  <div className="flex justify-center my-2 ">
                    <FormButton buttonText={"Login"} href={"#"} />
                  </div>
                  <p>
                    Don't have an account yet? Make one{" "}
                    <a href="#">
                      <span className="underline">here</span>
                    </a>
                  </p>
                </fieldset>
              </Form>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
