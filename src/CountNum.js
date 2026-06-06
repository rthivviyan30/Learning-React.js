import React, {useEffect, useState} from "react";
function CountNum(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        const countTimer = setInterval(() => {
            setCount( count => count + 2 );

        },1000);

        return () => clearInterval(countTimer);
    }, []);



  return(
    <div>
       <h1> Count: {count}</h1>
    </div>
  )
}   

export default CountNum;