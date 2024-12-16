"use client";
import putReservation from "@/lib/actions";
import AreaInput from "./AreaInput";
import GuestPassPriceCalculator from "./GuestPassPriceCalculator";

export default function FlowAreaAndAmount() {
  async function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const [area, availableSpots] = formData.get("area").split(":");

    // const selectedData = JSON.parse(formData.get("area"));

    const reservationData = {
      area,
      availableSpots: parseInt(availableSpots, 10),
    };

    console.log("availableSpots: ", reservationData.availableSpots);
    console.log("area: ", reservationData.area);

    await putReservation(event, reservationData);
  }

  return (
    <>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-5  justify-start">
        <AreaInput />
        {/* <fieldset>
          <legend>Choose your area:</legend>
          <div className="flex">
            <input type="radio" name="area" value="svartheim" id="svartheim" required />
            <label htmlFor="svartheim">Svartheim</label>
          </div>

          <div className="flex">
            <input type="radio" name="area" value="nilfheim" id="nilfheim" required />
            <label htmlFor="nilfheim">Nilfheim</label>
          </div>

          <div className="flex">
            <input type="radio" name="area" value="helheim" id="helheim" required />
            <label htmlFor="helheim">Helheim</label>
          </div>

          <div className="flex">
            <input type="radio" name="area" value="muspelheim" id="muspelheim" required />
            <label htmlFor="muspelheim">Muspelheim</label>
          </div>

          <div className="flex">
            <input type="radio" name="area" value="alfheim" id="alfheim" required />
            <label htmlFor="alfheim">Alfheim</label>
          </div>
        </fieldset> */}
        <button className="bg-blue-200 hover:bg-blue-300 w-24 rounded-3xl p-5" type="submit">
          Submit form
        </button>{" "}
      </form>
    </>
  );
}
