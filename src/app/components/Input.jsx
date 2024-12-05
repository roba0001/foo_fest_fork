export default async function Input() {
  let response = await fetch("http://localhost:8080/available-spots");
  let data = await response.json();
  return (
    <div>
      <p>Input</p>
      {data.map((area) => (
        <li key={area.available}>{area.area}</li>
      ))}
    </div>
    // <label htmlFor={labelId}>
    //   <input type={inputType} id={labelId} name={inputName} value={inputValue}>
    //     {inputText}
    //   </input>
    // </label>
  );
}
