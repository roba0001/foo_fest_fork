import FormButton from "./FormButton";
// import sendData from "@/lib/actions";

export default function Form({ children, onSubmit }) {
  return (
    <form onSubmit={onSubmit} action="/" className="flex flex-col gap-5">
      {children}
      <FormButton buttonText={"Submit form"} />
    </form>
  );
}
