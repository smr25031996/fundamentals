import React from "react";
import "./App.css";

function App() {
  let count = 5;
  let person = {
    firstName: "John",
    lastName: "Doe",
  };

  return (
    <React.Fragment>
      <h1>Hello World</h1>
      <h1>{count}</h1>
      <h2>{count * count}</h2>
      <h2>{person.firstName}</h2>
      <h2>{person.lastName}</h2>
    </React.Fragment>
  );
}

export default App;
