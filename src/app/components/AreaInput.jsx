export default async function AreaInput() {
  let response = await fetch("http://localhost:8080/available-spots");
  let data = await response.json();
  return (
    <div className="flex flex-col  bg-blue-200 max-w-sm p-7 rounded-3xl shadow-xl">
      <h5>Choose location:</h5>
      {data.map((area) => (
        <div key={area.available} className="hover:bg-blue-300 rounded-2xl  p-3 ">
          <label className=" ml-3 flex justify-between " htmlFor={area.area}>
            {area.area}

            <input type="radio" id={area.area} name="area" value="area" />
          </label>
        </div>
      ))}
    </div>
  );
}
