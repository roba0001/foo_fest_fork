"use client";
import CountButtons from "@/app/components/CountButtons";
import useStore from "@/app/store/state";
import Fieldset from "./Fieldset";

export default function Count() {
  const { count } = useStore();

  return (
    <Fieldset title={"Choose amount: "}>
      <h5>{count === 1 ? `${count} ticket` : `${count} tickets`} </h5>
      <CountButtons />
    </Fieldset>
  );
}
