import putReservation from "@/lib/actions";

export default function Form({ children }) {
  return (
    <form action={putReservation} className="flex flex-col gap-5  justify-start">
      {children}
      <button className="bg-blue-200" type="submit">
        Submit form
      </button>
    </form>
  );
}
