import RootLayout from "../layout";
import ShoppingCart from "../components/ShoppingCart";
import Navigation from "../components/Navigation";

import BookingTimerContainer from "../components/BookingTimerContainer";
import UseStateFlowWrapper from "@/app/components/UseStateFlowWrapper";

export default function Book() {
  // set state for om GuestInputForm er visible eller ej
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
  a;
  return (
    <>
      <Navigation navItems={navItems} />
      <h1>BOOK YOUR STAY</h1>
      <section className="grid grid-cols-1 lg:grid-cols-3 ">
        <BookingTimerContainer>
          <UseStateFlowWrapper />
        </BookingTimerContainer>

        <div
          id="shoppingCart"
          className="flex  flex-col  pt-5 justify-self-center sm:justify-self-center  col-start-1  xl:col-start-3 lg:col-start-3 max-lg:sticky  "
        >
          <ShoppingCart />
        </div>
      </section>
    </>
  );
}

{
  /* <form className="flex flex-col gap-5  justify-start">
          <div className="grid grid-cols-3 max-lg:grid-cols-1 grid-rows-2 mt-10 justify-start gap-10 mx-6">
            <div className="col-start-2 row-start-1 sticky top-20  md:hide lg:hide">
              <a href="#shoppingCart">
                <FiShoppingCart style={style} />
              </a>
            </div>
            <div className="flex flex-col md:col-span-2 lg:col-span-2 row-start-1 col-start-1  gap-10 justify-self-center"></div>
          </div>
        </form> */
}
