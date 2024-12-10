export default function Fieldset({ children, title }) {
  return (
    <fieldset className="flex flex-col self-center bg-white border-2 border-orange-300 w-5/12 p-7 rounded-3xl shadow-xl">
      <legend className="sr-only">{title}</legend>
      <h5 className="mb-3">{title}</h5>

      {children}
    </fieldset>
  );
}
