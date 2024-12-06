'use client'
import { useState, useEffect } from 'react'
import Section from './Section.jsx'
import Header from './Header.jsx'
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci"

export default function GuestPassPriceCalculator()
{
    const regularTicketPrice = 799
    const vipTicketPrice = 1299

    const [regularPriceCounter, setRegularPriceCounter] = useState(0)
    const [vipPriceCounter, setVipPriceCounter] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const updateTotalPrice = () =>
    {
        const calculatedPrice = (regularTicketPrice * regularPriceCounter) + (vipTicketPrice * vipPriceCounter) + 99
        setTotalPrice(calculatedPrice)
    }

    useEffect(() =>
    {
        updateTotalPrice()
    }, [regularPriceCounter, vipPriceCounter])

    return (
        <Section>

            <div className="flex justify-center items-center mx-auto max-w-[60%] h-[400px] gap-4 bg-gray-400">
                <div className="flex flex-col">
                    <div className="flex gap-4 mb-8">
                        <article className="regular w-[300px] h-[200px] bg-gray-200 rounded-md">
                            <Header>
                                <h4 className="flex justify-around py-4 whitespace-nowrap">
                                    Regular pass:<span>{regularTicketPrice}</span>
                                </h4>
                            </Header>
                            <div className="mx-auto px-4 py-2 flex justify-between items-center my-4 w-[60%] bg-white rounded-md counter-guest-counter">
                                <button
                                    className="increment-btn"
                                    onClick={() =>
                                        regularPriceCounter < 6
                                            ? setRegularPriceCounter(regularPriceCounter + 1)
                                            : null
                                    }
                                >
                                    <CiCirclePlus size={30} />
                                </button>
                                <span className="guest-counter">{regularPriceCounter}</span>
                                <button
                                    onClick={() =>
                                        regularPriceCounter > 1
                                            ? setRegularPriceCounter(regularPriceCounter - 1)
                                            : null
                                    }
                                >
                                    <CiCircleMinus size={30} />
                                </button>
                            </div>
                        </article>
                        <article className="vip w-[300px] h-[200px] bg-amber-400 rounded-md">
                            <Header>
                                <h4 className="flex justify-around py-4 whitespace-nowrap">
                                    VIP pass:<span>{vipTicketPrice}</span>
                                </h4>
                            </Header>
                            <div className="mx-auto px-4 py-2 flex justify-between items-center my-4 w-[60%] bg-white rounded-md counter-guest-counter">
                                <button
                                    className="increment-btn"
                                    onClick={() =>
                                        vipPriceCounter < 6
                                            ? setVipPriceCounter(vipPriceCounter + 1)
                                            : null
                                    }
                                >
                                    <CiCirclePlus size={30} />
                                </button>
                                <span className="guest-counter">{vipPriceCounter}</span>
                                <button
                                    onClick={() =>
                                        vipPriceCounter > 1
                                            ? setVipPriceCounter(vipPriceCounter - 1)
                                            : null
                                    }
                                >
                                    <CiCircleMinus size={30} />
                                </button>
                            </div>
                        </article>
                    </div>

                    <h4 className="flex justify-between px-4 rounded-full bg-white w-full">
                        <span>Total price:</span> <span>{totalPrice} DKK</span>
                    </h4>

                    <small className="block mt-2 text-center">
                        A single fee of DKK 99 is added to the total
                    </small>
                </div>
            </div>
        </Section>
    )
}
