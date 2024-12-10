import Fieldset from './Fieldset.jsx'

export default function TotalPriceDisplay({ totalPrice })
{
    return (
        <>
            <div className="mx-auto w-full text-center custom-border">
                <h4 className="flex justify-between gap-4 rounded-full bg-white px-4 py-2 whitespace-nowrap">
                    <span>Total price:</span> <span>{totalPrice} DKK</span>
                </h4>
            </div>
            <small className="block mt-2 text-center">
                A single fee of DKK 99 is added to the total
            </small>
        </>
    );
}
