import React from "react";
import './style.css'
function Style() {
  return (
    <React.Fragment>
      <h1 style={{color:"red"}}>Welcome to React</h1>
      <button className="button" type="submit">Submit</button>
      <h1 style={{fontFamily:"cursive", textAlign:"center"}}>Welcome</h1>
      <header style={{fontSize:"larger"}}>Black</header>
      <h1 className="highlight">Heading</h1>

    </React.Fragment>
  );
}

export default Style;
