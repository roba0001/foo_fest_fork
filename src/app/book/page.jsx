import Form from "../components/Form";
import AreaInput from "../components/AreaInput";
import RootLayout from "../layout";
import GuestInput from "../components/GuestInput";
import Fieldset from "../components/Fieldset";
import ShoppingCart from "../components/ShoppingCart";
import Navigation from "../components/Navigation";
import GuestPassPriceCalculator from "../components/GuestPassPriceCalculator";

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
          <div className="grid grid-cols-3 grid-rows-2 mt-10 justify-center ">
            <div className="flex flex-col col-span-2 row-start-1 col-start-1 self-center gap-10">
              <AreaInput />
              {/* <GuestPassPriceCalculator /> */}

              {guests.map((guest) => (
                <GuestInput key={guest.id} guest={guest} />
              ))}
            </div>
            <br />

            <div className="col-start-3 row-start-1 sticky top-32">
              <ShoppingCart />
            </div>
          </div>
        </Form>
      </RootLayout>
    </>
  );
}
