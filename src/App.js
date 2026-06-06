import React from "react";
import bio from "./Bio";

const Welcome = (props) => {
  return <div>{props.children}</div>
}
const element = React.createElement(
  "button",
  {
    className: "btn",
    onClick: () => alert("Clicked"),
  },
  "Click Me"
);
function App() {
  return(
    <Welcome>
      <bio />
      {element}
    </Welcome>
    
  );

}

export default App;
