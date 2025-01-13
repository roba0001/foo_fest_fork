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
      <h2 className="container mx-auto px-4">
        Program of the band playen in festival
      </h2>
      <Category />
      <BandsListe />
    </div>
  );
}
