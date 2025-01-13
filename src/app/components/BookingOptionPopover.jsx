import { RxQuestionMarkCircled } from "react-icons/rx"
import { Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";

const BookingOptionPopover = ({popoverHeaderText, popoverContentText}) =>
{
    return (
        <Popover placement="bottom" showArrow={true} className="w-[300px]">
            <PopoverTrigger className="bg-transparent" disableRipple>
                <Button>
                    <RxQuestionMarkCircled size={20} className="cursor-pointer trasition-text duration-100 ease-in hover:text-orange-300" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="border-2 border-orange-300 py-4">
                <h6 className="text-lg mb-3">
                    {popoverHeaderText}
                </h6>
                <p className="leading-5">
                    {popoverContentText}
                </p>
            </PopoverContent>
        </Popover>

    );
}

export default BookingOptionPopover;