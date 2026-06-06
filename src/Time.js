import React, {useEffect, useState} from "react";
function Time(){
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());

        },1000);

        return () => clearInterval(timer);
    }, []);



  return(
    <div>
       <p> Current time: {currentTime}</p>
    </div>
  )
}   

export default Time;
