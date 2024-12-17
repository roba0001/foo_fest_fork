"use client";

import GuestInput from "../components/GuestInput";
import FormButton from "../components/FormButton";

export default function GuestInputForm() {
  let guests = [
    { name: "Ronja", id: 1 },
    { name: "Bonja", id: 2 },
    { name: "Sonja", id: 3 },
  ];

  async function handleFormSubmit(event) {
    // ingen refresh
    event.preventDefault();
    console.log("handleFormSubmit");

    const formData = new FormData(event.target);
  }

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-5 items-center">
      <div className="flex flex-col gap-4">
        {guests.map((guest) => (
          <GuestInput key={guest.id} guest={guest} />
        ))}
      </div>
      <FormButton buttonText={"Complete reservation"} />
    </form>
  );
}
