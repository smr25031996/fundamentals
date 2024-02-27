import React from "react";
function AlgebricEx() {
  var x = 35,
    y = 30;
  return (
    <React.Fragment>
      <h2>Evaluating Expression</h2>
      <h2>
        {x + " < " + y + " : "}
        {x < y ? "True" : "False"}
      </h2>
    </React.Fragment>
  );
}
export default AlgebricEx;
