export default function Fieldset({ children, title }) {
  return (
    <fieldset className="flex flex-col self-center bg-white w-5/12 custom-border p-7">
      <legend className="sr-only">{title}</legend>
      <h5 className="mb-3">{title}</h5>

      {children}
    </fieldset>
  );
}
