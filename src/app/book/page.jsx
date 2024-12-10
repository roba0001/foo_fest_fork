import Form from "../components/Form";
import AreaInput from "../components/AreaInput";
import RootLayout from "../layout";
import GuestInput from "../components/GuestInput";
import Fieldset from "../components/Fieldset";
import ShoppingCart from "../components/ShoppingCart";
import Navigation from "../components/Navigation";

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

  return (
    <>
      <Navigation navItems={navItems} />
      <RootLayout>
        <h1>BOOK YOUR STAY</h1>
        <div className="grid grid-cols-2 grid-rows-2 mt-10">
          <div className="col-start-2 sticky top-10">
            <ShoppingCart />
          </div>
          <br />
          <div className="col-start-1 row-start-1">
            <Form>
              <AreaInput />
              <GuestInput />
            </Form>
          </div>
        </div>
      </RootLayout>
    </>
  );
}
