import Form from "../components/Form";
import AreaInput from "../components/AreaInput";
import RootLayout from "../layout";
import GuestInput from "../components/GuestInput";
import Fieldset from "../components/Fieldset";
import ShoppingCart from "../components/ShoppingCart";
import Navigation from "../components/Navigation";
import GuestPassPriceCalculator from "../components/GuestPassPriceCalculator";
import { FiShoppingCart } from "react-icons/fi";

export default function Book() {
  const navItems = [
    {
      linkText: "Home",
      href: "/",
    },
    {
      linkText: "Program",
      href: "/program",
    },
    {
      linkText: "Book",
      href: "/book",
    },
  ];
  let guests = [
    { name: "Ronja", id: 1 },
    { name: "Bonja", id: 2 },
  ];

  return (
    <>
      <Navigation navItems={navItems} />
      <RootLayout>
        <h1>BOOK YOUR STAY</h1>
        <Form>
          <div className="grid grid-cols-3 max-lg:grid-cols-1 grid-rows-2 mt-10 justify-start gap-10">
            <div className="flex flex-col col-span-2 row-start-1 col-start-1  gap-10">
              <AreaInput />
              {/* <GuestPassPriceCalculator /> */}

              {guests.map((guest) => (
                <GuestInput key={guest.id} guest={guest} />
              ))}
            </div>

            <div className="flex flex-col  col-start-3 md:row-start-1 lg:md:row-start-1 max-sm:col-start-1  md:sticky lg:sticky  ">
              <ShoppingCart />
            </div>
          </div>
        </Form>
      </RootLayout>
    </>
  );
}
