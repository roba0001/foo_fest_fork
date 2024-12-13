'use client';
import { useState, useMemo } from 'react';
import Section from './Section';
import TicketCounter from './TicketCounter';
import TotalPriceDisplay from './TotalPriceDisplay';

export default function GuestPassPriceCalculator()
{
  const regularTicketPrice = 799;
  const vipTicketPrice = 1299;

  const [regularPriceCounter, setRegularPriceCounter] = useState(0);
  const [vipPriceCounter, setVipPriceCounter] = useState(0);
  const [optionalGreenCamping, setOptionalGreenCamping] = useState(false);

  const calculateTotalPrice = () =>
  {
    const basePrice =
      regularTicketPrice * regularPriceCounter +
      vipTicketPrice * vipPriceCounter +
      99;

    return optionalGreenCamping ? basePrice + 249 : basePrice; // Fix logic here
  };

  // Dynamically calculate total price based on state
  const totalPrice = useMemo(calculateTotalPrice, [
    regularPriceCounter,
    vipPriceCounter,
    optionalGreenCamping,
  ]);

  const handleOptionalGreenCamping = () =>
  {
    setOptionalGreenCamping((prevState) => !prevState);
  };

  return (
    <Section>
      <div className="flex justify-center align-center items-center mx-auto w-fit px-12 h-[400px] gap-4 bg-white max-md:h-fit max-md:py-12">
        <div className="flex flex-col">
          <div className="flex gap-4 mb-8 max-md:flex-col">
            <TicketCounter
              ticketType="Regular"
              ticketPrice={regularTicketPrice}
              count={regularPriceCounter}
              onIncrement={() =>
                regularPriceCounter < 6 &&
                setRegularPriceCounter(regularPriceCounter + 1)
              }
              onDecrement={() =>
                regularPriceCounter > 0 &&
                setRegularPriceCounter(regularPriceCounter - 1)
              }
              className="border-2 border-blue-500 rounded-md"
            />
            <TicketCounter
              ticketType="VIP"
              ticketPrice={vipTicketPrice}
              count={vipPriceCounter}
              onIncrement={() =>
                vipPriceCounter < 6 &&
                setVipPriceCounter(vipPriceCounter + 1)
              }
              onDecrement={() =>
                vipPriceCounter > 0 &&
                setVipPriceCounter(vipPriceCounter - 1)
              }
            />
          </div>
          <div className="container optional-green-camping-container flex items-center gap-2 mb-2">
            <label
              htmlFor="optional_green_camping"
              className="select-none cursor-pointer"
            >
              Optional green camping (+ 249 DKK)
            </label>
            <input
              type="checkbox"
              name="optional_green_camping"
              className="accent-orange-300 cursor-pointer -order-1"
              id="optional_green_camping"
              onChange={handleOptionalGreenCamping}
              checked={optionalGreenCamping} // Reflect current state
            />
          </div>

          <div className={`container optional-tent-put-up-container select-none cursor-pointer ${regularPriceCounter + vipPriceCounter < 2
              ? 'hidden'
              : 'flex gap-2'
            } ${regularPriceCounter >= 2 || vipPriceCounter >= 2
              ? 'flex'
              : ''
            }`}>
            <label
              htmlFor="optional_tent_put_up"
              className="select-none cursor-pointer"
            >
              Optional tent put up (2P: DKK 299 - 3P: DKK 399 <small className="text-sm">(price is per tent)</small>)
            </label>
            <input
              type="checkbox"
              name="optional_tent_put_up"
              className="accent-orange-300 cursor-pointer -order-1"
              id="optional_tent_put_up"

            // onChange={handleOptionalTentPutUp}
            // checked={optionalTentPutUp}
            />
          </div>
          <TotalPriceDisplay totalPrice={totalPrice} />
        </div>
      </div>
    </Section>
  );
}
