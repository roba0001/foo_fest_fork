'use client'

import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci'

export default function TicketCounter({ ticketType, ticketPrice, guestCounter, incrementTicketCounter, decrementTicketCounter }) 
{
    return (
        /*
            Here, the background color of ticket counter is being dynamically set.
            If VIP, the background color is set to amber-400, else background color is set to gray-400
        */
        <article className={`${ticketType === 'VIP' ? 'bg-amber-400' : 'bg-gray-200'} w-[300px] h-[200px] rounded-md`}>
            <header className="py-4">
                <h4 className="flex justify-around whitespace-nowrap">
                    {/* Dynamically passing the text for the ticket type and price as props */}
                    {ticketType} pass: <span>{ticketPrice}</span>
                </h4>
            </header>

            <div className="mx-auto px-4 py-2 flex justify-between items-center my-4 w-[60%] bg-white rounded-md">
                <button className="increment-btn" onClick={incrementTicketCounter}>
                    <CiCirclePlus size={30} />
                </button>
            </div>

            {/* Inserting guestCounter as a prop */}
            <span className="guest-counter">{guestCounter}</span>
        </article>
    )
}