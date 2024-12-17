import Navigation from "../components/Navigation";
import RootLayout from "../layout";
import GuestInput from "../components/GuestInput";
import FormButton from "../components/FormButton";
import GuestInputForm from "@/app/components/GuestInputForm";

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

  async function handleFormSubmit(event) {
    // ingen refresh
    event.preventDefault();
    console.log("handleFormSubmit");

    const formData = new FormData(event.target);
  }

  return (
    <>
      <Navigation navItems={navItems} />
      <GuestInputForm />
    </>
  );
}
