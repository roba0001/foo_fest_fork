'use client';
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci';

export default function TicketCounter({
  ticketType,
  ticketPrice,
  count,
  onIncrement,
  onDecrement,
}) {
  return (
    <article
      className={`${
        ticketType === 'VIP' ? 'vip-ticket-counter-background-color' : 'bg-white'
      } w-[300px] h-[200px] rounded-md`}
    >
      <header className="py-4">
        <h4 className="flex justify-around whitespace-nowrap">
          {ticketType} pass: <span>{ticketPrice}</span>
        </h4>
      </header>
      <div className="mx-auto px-4 py-2 flex justify-between items-center my-4 w-[60%] bg-white rounded-md">
        <button
          className="increment-btn"
          onClick={onIncrement}
        >
          <CiCirclePlus size={30} />
        </button>
        <span className="guest-counter">{count}</span>
        <button
          onClick={onDecrement}
        >
          <CiCircleMinus size={30} />
        </button>
      </div>
    </article>
  );
}
