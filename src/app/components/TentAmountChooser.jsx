'use client'

import { useState, useEffect } from 'react'
import { tentCombinations } from './GuestPassPriceCalculator'

export default function ChooseTentAmount({ numberOfTickets, onTentPriceChange }) {
    const [selectedTent, setSelectedTent] = useState('')
    const [isDisabled, setIsDisabled] = useState(false)

  
    // Handle the tent selection
    const handleTentCombinationSelect = (event) => {
        const selectedOption = event.target.value
        setSelectedTent(selectedOption)
        setIsDisabled(true)

        const selectedTentCombination = tentCombinations.find(
            (tent) => tent.optionText === selectedOption
        )

        if (selectedTentCombination) {
            const tentPrice = selectedTentCombination.price()
            onTentPriceChange(tentPrice)
        } else {
            onTentPriceChange(0)
        }
    }

    /*
        Here, the useEffect hook is being used to let the tent combination select dropdown correspond to the change of ticket amount.

    */
    useEffect(() =>
    {
        // Reset dropdown when ticket count changes
        setSelectedTent('')
        setIsDisabled(false)

        // Subtract price of current selection by letting the parent component know of the change
        onTentPriceChange(0)
    }, [numberOfTickets, onTentPriceChange])


    // Filter the available tent combinations
    const availableTentCombinations = tentCombinations.filter((tentCombination) => {
        const totalPeople =
            tentCombination.twoPersonTentAmount * 2 +
            tentCombination.threePersonTentAmount * 3
        return totalPeople === numberOfTickets
    })


    return (
        <div>
            <select
                value={selectedTent}
                onChange={handleTentCombinationSelect}
                className="min-w-[300px] w-fit bg-transparent border-2 border-orange-300 p-2 rounded-md cursor-pointer"
                disabled={isDisabled}
            >
                <option value=""  className="cursor-pointer" disabled>
                    Select tent amount
                </option>
                {availableTentCombinations.length > 0 ? (
                    availableTentCombinations.map((tentCombination, index) => (
                        <option
                            key={index}
                            value={tentCombination.optionText}
                            data-two_person_tent={tentCombination.twoPersonTentAmount}
                            data-three_person_tent={tentCombination.threePersonTentAmount}
                        >
                            {tentCombination.optionText}
                        </option>
                    ))
                ) : (
                    <option disabled>No available tent combinations</option>
                )}
            </select>
        </div>
    )
}
