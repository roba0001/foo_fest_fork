export default function Fieldset({ children, title }) {
  return (
    <fieldset className="flex flex-col  bg-white border-2 border-orange-300 max-w-sm p-7 rounded-3xl shadow-xl">
      <legend className="sr-only">{title}</legend>
      <h5 className="mb-3">{title}</h5>

      {children}
    </fieldset>
  );
}
