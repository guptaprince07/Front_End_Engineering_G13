//import { useState } from "react";

// const data = [
//   { name: "Alok", city: "Noida", email: "alok123@gmail.com" },
//   { name: "Suresh", city: "Delhi", email: "suresh123@gmail.com" },
// ];

// function ArrayData() {
//   const [mydata, setMydata] = useState(data);

//   function showData() {
//     setMydata(data);
//   }

//   function clearData() {
//     setMydata([]);
//   }

//   return (
//     <div>
//       <h2>Data coming from an array</h2>
//       {mydata.map((element) => (
//         <h3 key={element.email}>
//           Name: {element.name}, City: {element.city}, Email: {element.email}
//         </h3>
//       ))}
//       <button onClick={showData}>Show Data</button>
//       <button onClick={clearData}>Clear Data</button>
//     </div>
//   );
// }
import { useState } from "react";

const obj = [
  { id: 0, name: "Alok", city: "Noida", email: "alok123@gmail.com" },
  { id: 1, name: "Suresh", city: "Delhi", email: "suresh123@gmail.com" },
  { id: 2, name: "Swati", city: "Lucknow", email: "swati123@gmail.com" },
];

function Arrays() {
  const [data, setData] = useState(obj);

  function removeElement(id) {
    const filterData = data.filter((element) => element.id !== id);
    setData(filterData);
  }

  function showAllData() {
    setData(obj);
  }

  return (
    <div>
      {data.map((element) => {
        return (
          <h3 key={element.id}>
            Name: {element.name}, City: {element.city}, Email: {element.email}{" "}
            <button onClick={() => removeElement(element.id)}>Delete</button>
          </h3>
        );
      })}

      <button onClick={showAllData}>Show All Data</button>
    </div>
  );
}

export default Arrays;