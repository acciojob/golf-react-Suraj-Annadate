import React, {useState } from "react";
import '../styles/App.css';
import Ball from "./Ball";



const App = ()=>{

    let [btnclicked,setBtnclicked] = useState(false);
    
    return (<div className="playground">
         {(!btnclicked) && <button className="start" onClick={()=>{setBtnclicked(true)}}>Start</button>}
         <Ball btnclicked={btnclicked} setBtnclicked={setBtnclicked} />
    </div>)
}

export default App;