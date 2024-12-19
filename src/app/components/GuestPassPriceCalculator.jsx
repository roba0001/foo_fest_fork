"use client";
import { useState, useMemo, useEffect } from "react";
import Section from "./Section";
import TicketCounter from "./TicketCounter";
import TotalPriceDisplay from "./TotalPriceDisplay";
import TentAmountChooser from "./TentAmountChooser";
import { useStore } from "@/app/store";

let twoPersonTentPrice = 299;
let threePersonTentPrice = 399;

/*
  This function is being used as a helper function to calculate the price for each tent combination
  It's being used for the "price" key in each object in the tentCombinations array
*/
function calculateTotalTentPrice(twoPersonTentAmount, threePersonTentAmount)
{
  return twoPersonTentAmount * twoPersonTentPrice + threePersonTentAmount * threePersonTentPrice;
}

/*
    This array contains all essential information regarding the tent combinations:
      1. selectedText: The text being displayed in the actual select dropdown for the given tent combination
      2. optionText: The text being displayed in the select dropdown option for the given tent combination
      3. twoPersonTentAmount: The amount of two-person tents needed
      4. threePersonTentAmount: The amount of three-person tents needed
      5. price: A function that calculates the total price for the given tent combination. It's using the twoPersonTentPrice and threePersonTentPrice variables. This function is used in the render method for the "TotalPriceDisplay" component.
*/
export const tentCombinations = [
  {
    selectText: "2 people",
    optionText: "2 people (1 two-person tent)",
    twoPersonTentAmount: 1,
    threePersonTentAmount: 0,
    price: function ()
    {
      return calculateTotalTentPrice(this.twoPersonTentAmount, this.threePersonTentAmount);
    },
  },
  {
    selectText: "3 people",
    optionText: "3 people (1 three-person tent)",
    twoPersonTentAmount: 0,
    threePersonTentAmount: 1,
    price: function ()
    {
      return calculateTotalTentPrice(this.twoPersonTentAmount, this.threePersonTentAmount);
    },
  },
  {
    selectText: "4 people",
    optionText: "4 people (2 two-person tent)",
    twoPersonTentAmount: 2,
    threePersonTentAmount: 0,
    price: function ()
    {
      return calculateTotalTentPrice(this.twoPersonTentAmount, this.threePersonTentAmount);
    },
  },
  {
    selectText: "5 people",
    optionText: "5 people (1 two-person tent + 1 three-person tent)",
    twoPersonTentAmount: 1,
    threePersonTentAmount: 1,
    price: function ()
    {
      return calculateTotalTentPrice(this.twoPersonTentAmount, this.threePersonTentAmount);
    },
  },
  {
    selectText: "6 people",
    optionText: "6 people (2 three-person tents)",
    twoPersonTentAmount: 3,
    threePersonTentAmount: 0,
    price: function ()
    {
      return calculateTotalTentPrice(this.twoPersonTentAmount, this.threePersonTentAmount);
    },
  },
  {
    selectText: "6 people",
    optionText: "6 people (3 two-person tents)",
    twoPersonTentAmount: 0,
    threePersonTentAmount: 2,
    price: function ()
    {
      return calculateTotalTentPrice(this.twoPersonTentAmount, this.threePersonTentAmount);
    },
  },
  {
    selectText: "7 people",
    optionText: "7 people (2 two-person tents + 1 three-person tent)",
    twoPersonTentAmount: 2,
    threePersonTentAmount: 1,
    price: function ()
    {
      return calculateTotalTentPrice(this.twoPersonTentAmount, this.threePersonTentAmount);
    },
  },
  {
    selectText: "8 people",
    optionText: "8 people (4 two-person tents)",
    twoPersonTentAmount: 4,
    threePersonTentAmount: 0,
    price: function ()
    {
      return calculateTotalTentPrice(this.twoPersonTentAmount, this.threePersonTentAmount);
    },
  },
  {
    selectText: "9 people",
    optionText: "9 people (3 three-person tents)",
    twoPersonTentAmount: 0,
    threePersonTentAmount: 3,
    price: function ()
    {
      return calculateTotalTentPrice(this.twoPersonTentAmount, this.threePersonTentAmount);
    },
  },
  {
    selectText: "9 people",
    optionText: "9 people (3 two-person tents + 1 three-person tent)",
    twoPersonTentAmount: 3,
    threePersonTentAmount: 1,
    price: function ()
    {
      return calculateTotalTentPrice(this.twoPersonTentAmount, this.threePersonTentAmount);
    },
  },
  {
    selectText: "10 people",
    optionText: "10 people (5 two-person tents)",
    twoPersonTentAmount: 5,
    threePersonTentAmount: 0,
    price: function ()
    {
      return calculateTotalTentPrice(this.twoPersonTentAmount, this.threePersonTentAmount);
    },
  },
  {
    selectText: "11 people",
    optionText: "11 people (1 two-person tent + 3 three-person tents)",
    twoPersonTentAmount: 1,
    threePersonTentAmount: 3,
    price: function ()
    {
      return calculateTotalTentPrice(this.twoPersonTentAmount, this.threePersonTentAmount);
    },
  },
  {
    selectText: "12 people",
    optionText: "12 people (6 two-person tents)",
    twoPersonTentAmount: 6,
    threePersonTentAmount: 0,
    price: function ()
    {
      return calculateTotalTentPrice(this.twoPersonTentAmount, this.threePersonTentAmount);
    },
  },
  {
    selectText: "12 people",
    optionText: "12 people (3 two-person tents + 2 three-person tents)",
    twoPersonTentAmount: 3,
    threePersonTentAmount: 2,
    price: function ()
    {
      return calculateTotalTentPrice(this.twoPersonTentAmount, this.threePersonTentAmount);
    },
  },
];

export default function GuestPassPriceCalculator()
{
  // Setting up the price for each ticket type
  const regularTicketPrice = 799;
  const vipTicketPrice = 1299;

  // Setting the price counters for each ticket type to 0 initially
  const [regularPriceCounter, setRegularPriceCounter] = useState(0);

  // Setting the price counters for each ticket type to 0 initially
  const [vipPriceCounter, setVipPriceCounter] = useState(0);

  // Setting the option for optional green camping to false by default (meaning it has not been selected)
  const [optionalGreenCamping, setOptionalGreenCamping] = useState(false);

  // Setting the option for optional temt put up to false by default (meaning the option for choosing a tent combination is hidden by default)
  const [toggleOptionalTentPutUp, setToggleOptionalTentPutUp] = useState(false);

  // Setting the selected tent combination to an empty string by default (since no tent combination option is selected initially)
  const [selectedTent, setSelectedTent] = useState("");

  // Setting the price for selected tent combination to 0 by default (since no tent combination option is selected initially)
  const [selectedTentPrice, setSelectedTentPrice] = useState(0); // State for tent price

  // Setting the total amount of tickets to be the result of the sum of the price of regular tickets and VIP tickets
  const totalTickets = regularPriceCounter + vipPriceCounter;

  const setCount = useStore((state) => state.setCount);

  useEffect(() =>
  {
    setCount(totalTickets);
  }, [totalTickets, setCount]);

  /*
      Calculating the total price of tickets
      If optional green camping is selected, then the price of that gets added to the total ticket price
      The reason 99 is added to the return value of the basePrice is due to the single booking fee.
  */
  const calculateTotalPrice = () =>
  {
    const basePrice =
      regularTicketPrice * regularPriceCounter +
      vipTicketPrice * vipPriceCounter +
      (optionalGreenCamping ? 249 : 0) +
      selectedTentPrice;

    return basePrice + 99;
  };

  /*
      Using the useMemo hook to only compute the value upon changing at least one of its dependencies
  */
  const totalPrice = useMemo(calculateTotalPrice, [
    regularPriceCounter,
    vipPriceCounter,
    optionalGreenCamping,
    selectedTentPrice, // Recalculate when tent price changes
  ]);

  /*
      Toggling the optional green camping to be the opposite of its previous state
  */
  const handleOptionalGreenCamping = () =>
  {
    setOptionalGreenCamping((prevState) => !prevState);
  };

  /*
      Toggling the optional tent put up to be the opposite of its previous state
  */
  const handleOptionalTentPutUp = () =>
  {
    setToggleOptionalTentPutUp((prevState) => !prevState);
  };

  /*
      Using the useEffect hook to subtract the price of the currently selected tent combination option, if the user deselects the tent put up option entirely.
  */
  useEffect(() =>
  {
    if (!toggleOptionalTentPutUp)
    {
      setSelectedTentPrice(0); // Reset tent price
      setSelectedTent(""); // Clear selected tent
    }
  }, [toggleOptionalTentPutUp]);

  /*
      Returning the entire GuestPassPriceCalculator component with all its child components
  */
  return (
    <Section>
      <div className="flex justify-center align-center items-center mx-auto w-fit px-12 py-4 h-fit gap-4 bg-white max-md:h-fit max-md:py-12">
        <div className="flex flex-col">
          <div className="flex gap-4 mb-8 max-md:flex-col">
            <TicketCounter
              ticketType="Regular"
              ticketPrice={regularTicketPrice}
              count={regularPriceCounter}
              onIncrement={() =>
                regularPriceCounter < 6 && setRegularPriceCounter(regularPriceCounter + 1)
              }
              onDecrement={() =>
                regularPriceCounter > 0 && setRegularPriceCounter(regularPriceCounter - 1)
              }
              className="border-2 border-blue-500 rounded-md"
            />
            <TicketCounter
              ticketType="VIP"
              ticketPrice={vipTicketPrice}
              count={vipPriceCounter}
              onIncrement={() => vipPriceCounter < 6 && setVipPriceCounter(vipPriceCounter + 1)}
              onDecrement={() => vipPriceCounter > 0 && setVipPriceCounter(vipPriceCounter - 1)}
            />
          </div>
          <div className="container optional-green-camping-container flex items-center gap-2 mb-2">
            <label htmlFor="optional_green_camping" className="select-none cursor-pointer">
              Optional green camping (+ 249 DKK)
            </label>
            <input
              type="checkbox"
              name="optional_green_camping"
              className="accent-orange-300 cursor-pointer -order-1"
              id="optional_green_camping"
              onChange={handleOptionalGreenCamping}
              checked={optionalGreenCamping}
            />
          </div>
          <div
            className={`container optional-tent-put-up-container select-none cursor-pointer ${totalTickets < 2 ? "hidden" : "flex gap-2"
              }`}
          >
            <label htmlFor="optional_tent_put_up" className="select-none cursor-pointer">
              Optional tent put up (2P: DKK 299 - 3P: DKK 399{" "}
              <small className="text-sm">(price is per tent)</small>)
            </label>
            <input
              type="checkbox"
              name="optional_tent_put_up"
              className="accent-orange-300 cursor-pointer -order-1"
              id="optional_tent_put_up"
              onChange={handleOptionalTentPutUp}
            />
          </div>
          <div
            className={`${totalTickets < 2 || !toggleOptionalTentPutUp ? "hidden" : "flex gap-8 my-4"
              }`}
          >
            <TentAmountChooser
              numberOfTickets={totalTickets}
              onTentPriceChange={setSelectedTentPrice} // Pass callback
            />
          </div>
          <TotalPriceDisplay totalPrice={totalPrice} />
        </div>
      </div>
    </Section>
  )
}
