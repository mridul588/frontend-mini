import React from "react";
import { useState } from "react";
import "./Tabs.css";
export default function Tab({tabData}){

    const[idx , setIdx] = useState(0);
    return(
        <div className="mn">
            <div className="btn">
             {tabData.map((data , index)=>  <button onClick={()=>{setIdx(index)}}>{data.label}</button>)}
            </div>
            <div className="cnt">
              {tabData[idx].content}
            </div>
        </div>
    )
}