import React from "react";
function Map() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const doubled = numbers.map((numbers) => numbers * 2);
  const object = {
    name: "John Doe",
    age: 29,
    address: "123 MT Street",
  };

  return (
    <React.Fragment>
      <h1>Map Function</h1>
      <h1>{numbers + " "}</h1>
      <h1>{doubled + " "}</h1>
      <h>{Object.keys(object).map((property)=>object[property]+" ")}</h>
    </React.Fragment>
  );
}
export default Map;
