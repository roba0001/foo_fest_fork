'use client';
import { useState, useMemo } from 'react';
import Section from './Section';
import TicketCounter from './TicketCounter';
import TotalPriceDisplay from './TotalPriceDisplay';

export default function GuestPassPriceCalculator() {
  const regularTicketPrice = 799;
  const vipTicketPrice = 1299;

  const [regularPriceCounter, setRegularPriceCounter] = useState(0);
  const [vipPriceCounter, setVipPriceCounter] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useMemo(() => {
    const calculatedPrice =
      regularTicketPrice * regularPriceCounter +
      vipTicketPrice * vipPriceCounter +
      99;
    setTotalPrice(calculatedPrice);
  }, [regularPriceCounter, vipPriceCounter]);

  return (
    <Section>
      <div className="flex justify-center align-center items-center mx-auto w-fit px-12 h-[400px] gap-4 bg-gray-400 max-md:h-fit max-md:py-12">
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
          <TotalPriceDisplay totalPrice={totalPrice} />
        </div>
      </div>
    </Section>
  );
}
