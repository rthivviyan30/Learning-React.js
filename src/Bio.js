import React from "react"
function Bio(){
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

  return(
    <div>
       <h1>
        My name is {fname} {lname} <br />
        </h1> 
        {welbtn}
    </div>
  )
}   

export default Bio
