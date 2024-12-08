/*import { isRedirectError } from "next/dist/client/components/redirect";
import RootLayout from "../layout";
import BandCard from "@/app/components/BandCard";

export default function Program() {
  return (
    <RootLayout>
      <>
        <BandCard />
        <div>Program</div>
      </>
    </RootLayout>
  );
}
  */

/*
import BandCard from "@/app/components/BandCard";

export default function ProductsPage() {
  return (
    <div>
      <BandCard />
    </div>
  );
}
*/

import Ny from "@/app/components/Ny"; // Hvis stien er korrekt

export default function HomePage() {
  return (
    <div>
      <Ny /> {/* Brug af Ny komponenten */}
    </div>
  );
}
