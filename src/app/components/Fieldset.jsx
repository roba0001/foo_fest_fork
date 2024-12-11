export default function Fieldset({ children, title }) {
  return (
    <fieldset className="flex flex-col  bg-white w-3/5 custom-border p-7 ">
      <legend className="sr-only">{title}</legend>
      <h5 className="mb-3">{title}</h5>

      {children}
    </fieldset>
  );
}
