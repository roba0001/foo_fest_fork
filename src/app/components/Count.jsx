"use client";
import CountButtons from "@/app/components/CountButtons";
import useStore from "@/app/store/state";

export default function Count() {
  const { count } = useStore();

  return (
    <section className="flex flex-col">
      <h1>Count: {count}</h1>
      <CountButtons />
    </section>
  );
}
