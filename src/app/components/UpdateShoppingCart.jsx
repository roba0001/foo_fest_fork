'use client'

import { useState, useMemo } from 'react'
import GuestPassPriceCalculator from './GuestPassPriceCalculator.jsx'
import ShoppingCart from './ShoppingCart.jsx'

export default function UpdateShoppingCart() 
{
    const regularTicketPrice = 799;
    const vipTicketPrice = 1299;

    const [regularPriceCounter, setRegularPriceCounter] = useState(0);
    const [vipPriceCounter, setVipPriceCounter] = useState(0);
    const [optionalGreenCamping, setOptionalGreenCamping] = useState(false);

    const calculateTotalPrice = useMemo(() => {
        const basePrice =
          regularTicketPrice * regularPriceCounter +
          vipTicketPrice * vipPriceCounter +
          99;
    
        return optionalGreenCamping ? basePrice + 249 : basePrice;
      }, [regularPriceCounter, vipPriceCounter, optionalGreenCamping]);

    return (
        <div>
            <GuestPassPriceCalculator
                regularPriceCounter={regularPriceCounter}
                vipPriceCounter={vipPriceCounter}
                setRegularPriceCounter={setRegularPriceCounter}
                setVipPriceCounter={setVipPriceCounter}
                optionalGreenCamping={optionalGreenCamping}
                setOptionalGreenCamping={setOptionalGreenCamping}
                totalPrice={calculateTotalPrice}
            />

            <ShoppingCart
                regularTotal={regularTicketPrice * regularPriceCounter}
                vipTotal={vipTicketPrice * vipPriceCounter}
                fixedBookingFee={99}
                optionalGreenCampingFee={optionalGreenCamping ? 249 : 0}
                totalPrice={calculateTotalPrice}
            />
        </div>
    )
}