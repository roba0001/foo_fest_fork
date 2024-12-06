import Form from "../components/Form";
import AreaInput from "../components/AreaInput";
import RootLayout from "../layout";
import GuestInput from "../components/GuestInput";
import Fieldset from "../components/Fieldset";
import ShoppingCart from "../components/ShoppingCart";

export default function Book() {
  return (
    <section>
      <h1>BOOK YOUR STAY</h1>

      <Form>
        {/* <ShoppingCart></ShoppingCart> */}
        <AreaInput />
        <GuestInput />
      </Form>
    </section>
  );
}
