import Category from "@/app/components/Category";
import BandsListe from "@/app/components/BandsListe";
import Navigation from "@/app/components/Navigation";

export default function Home() {
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
    <div>
      <Navigation navItems={navItems} />
      <h1>Bandt og scenerne på festival</h1>
      <Category />
      <BandsListe />
    </div>
  );
}
