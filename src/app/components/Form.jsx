import FormButton from "./FormButton";
// import sendData from "@/lib/actions";

export default function Form({ children }) {
  return (
    <form action="/" className="flex flex-col gap-5">
      {children}
      <FormButton buttonText={"Submit form"} />
    </form>
  );
}
