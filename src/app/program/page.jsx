import Category from "@/app/components/Category";
import BandsListe from "@/app/components/BandsListe";

export default function Home() {
  return (
    <div>
      <h1>Bandt og scenerne på festival</h1>
      <Category />
      <BandsListe />
    </div>
  );
}
