import React from "react";
import logo from "./logo.svg";
function HomePage() {
  return (
    <React.Fragment>
      <h1>React JS :</h1>
      <img src={logo} width="120" height="120"  alt="img"/>
      <p>
      React is a JavaScript library for creating User Interfaces, open sourced
        to the world by Facebook and Instagram team in 2013.
        <br />
        React’s main goal is to make development of UI components easy and
        modular. It is intended to ease the process of building
        <br /> large applications using data that changes over time.

      </p>
    </React.Fragment>
  );
}
export default HomePage;
