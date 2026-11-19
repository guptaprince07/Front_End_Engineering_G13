import { useState } from "react";

const data = [
  { name: "Alok", city: "Noida", email: "alok123@gmail.com" },
  { name: "Suresh", city: "Delhi", email: "suresh123@gmail.com" },
];

function ArrayData() {
  const [mydata, setMydata] = useState(data);

  function showData() {
    setMydata(data);
  }

  function clearData() {
    setMydata([]);
  }

  return (
    <div>
      <h2>Data coming from an array</h2>
      {mydata.map((element) => (
        <h3 key={element.email}>
          Name: {element.name}, City: {element.city}, Email: {element.email}
        </h3>
      ))}
      <button onClick={showData}>Show Data</button>
      <button onClick={clearData}>Clear Data</button>
    </div>
  );
}

export default ArrayData;