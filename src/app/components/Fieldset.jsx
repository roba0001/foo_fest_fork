export default function Fieldset({ title }) {
  return (
    <fieldset className="flex flex-col  bg-blue-200 max-w-sm p-7 rounded-3xl shadow-xl">
      <legend>
        <h5>{title}</h5>
      </legend>
    </fieldset>
  );
}
