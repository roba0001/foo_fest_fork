import { isRedirectError } from "next/dist/client/components/redirect";
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
