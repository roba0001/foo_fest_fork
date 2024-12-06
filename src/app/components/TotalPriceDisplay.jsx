export default function TotalPriceDisplay({ totalPrice }) 
{
    return (
        <div>
            <h4 className="flex justify-between px-4 rounded-full bg-white w-full">
                {/* Passing in the totalPrice as a prop */}
                <span>Total price: </span> <span>{totalPrice}</span> DKK
            </h4>
            <small className="block mt-2 text-center">
                A single fee of DKK 99 is added to the total
            </small>
        </div>
    )
}