"use client";
import CountButtons from "@/app/components/CountButtons";
import useStore from "@/app/store/state";
import Fieldset from "./Fieldset";

export default function Count() {
  const { count } = useStore();

  return (
    <Fieldset title={"How many tickets?"}>
      <h5>{count}</h5>
      <CountButtons />
    </Fieldset>
  );
}
