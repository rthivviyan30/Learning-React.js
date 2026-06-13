import React from "react"
function Bio() {
  const fname = "Thivviyan"
  const lname = "Rajendra"
  const welbtn = React.createElement(
    "button",
    {
      className: "btn",
      onClick: () => alert(`Welcome ${fname} ${lname}`),
    },
    "Click Me"
  );
  const mystyle_01 = {
    color: "red",
    fontSize: "40px",
    fontFamily: "Times-new-roman",
    textAlign: "left"
  }
  const mystyle_02 = {
    color: "blue",
    fontSize: "30px",
    fontFamily: "typewriter",
    textAlign: "left"
  }

  return (
    <div>
      <h1 style={mystyle_01}>
        My name is {fname} <br />
      </h1>
      {welbtn}
      <p style={mystyle_02}>
        Welcome to my page
      </p>
    </div>
  )
}

export default Bio
