import React, {useState} from "react";
import "./App.css";
import App from "./App";
import { reset } from "ansi-colors";
// import App from "./App";



// console.log(useState(1))


const BottomRow = () => {
  const [quarter, changeQuarter] = useState(1);
  // console.log(useState)
  
  let start = 1
  if (quarter === 5){
    changeQuarter('OT')
  } if (quarter === "OT1") {
    changeQuarter(start)
  }

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">3</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
      </div>
      <div className='changeQuarterState'>
        <button onClick={() => changeQuarter(quarter + 1)}></button>
      </div>
    </div>
  );
};

export default BottomRow;
