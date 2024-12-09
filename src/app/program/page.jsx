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
import Skema from "@/app/components/Skema";

export default function ProductsPage() {
  return (
    <div>
      <BandCard />
      <Skema />
    </div>
  );
}
  */

import BandCard from "../components/BandCard";

export default function Home() {
  return (
    <div>
      <h1>Bandt eller scenerne </h1>
      <BandCard />
    </div>
  );
}
