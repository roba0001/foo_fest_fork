export default function TotalPriceDisplay({ totalPrice })
{
    return (
        <div className="mx-auto w-full text-center">
            <h4 className="flex justify-between gap-4 rounded-full bg-white px-4 py-2 whitespace-nowrap">
                <span>Total price:</span> <span>{totalPrice} DKK</span>
            </h4>
            <small className="block mt-2">
                A single fee of DKK 99 is added to the total
            </small>
        </div>
    );
}
