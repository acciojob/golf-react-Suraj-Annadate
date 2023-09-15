import React, { useEffect, useState } from "react";

const Ball = ({btnclicked,setBtnclicked})=>{

    let [position,setPosition] = useState(0);
    
function move (e) {
    console.log("hello")
    
  if(e.keyCode===39)
  {
    console.log(e);
    console.log("hi")
    setPosition(position+5)
  }


}
    return (<>
    {btnclicked && <div className="ball" style={{right:`${position}px`}} tabIndex="0" onKeyDown={move}>
    </div>}
    </>)
}

export default Ball;