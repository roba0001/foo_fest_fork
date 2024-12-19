import RootLayout from "./layout";
import Hero from "../app/components/Hero.jsx";
import Navigation from "../app/components/Navigation.jsx";
import GuestPassPriceCalculator from "../app/components/GuestPassPriceCalculator.jsx";
import ImageSlider from "@/app/components/ImageSlider";

export default function Home() {
  const navItems = [
    {
      href: "/",
      linkText: "Home",
    },
    {
      href: "/program",
      linkText: "Program",
    },
    {
      href: "/book",
      linkText: "Book",
    },
  ];

  return (
    <RootLayout>
      <Navigation navItems={navItems} />
      <Hero></Hero>

      <ImageSlider />
    </RootLayout>
  );
}
