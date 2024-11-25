import React from "react";
import "./Page.css";


export default function Pagination({page , setPage}){

    const prev3 = Array.from(
        { length : 3 },
        (_ , index)=> page-1-index).filter((value)=> value > 0).reverse();

    const next = Array.from({length : 4} , (_,index) => page+index);  
    
    const final = [...prev3 , ...next];

    //console.log(final);
    const handleForward = ()=>{
        setPage(page+1);
    }
    
    const handleBack = ()=>{
        setPage(page-11);
    }
    return(
       <div className="page-container">
       {page>1 ? (<div onClick={handleBack} className="page-btn">{"<"}</div>):
       ""
       }
        {final.map((val,index)=>{
            return  <div key={index} onClick={()=>setPage(val)} className={val==page?"page-btn active":"page-btn"}>{val}</div>
        })}
       
        <div onClick={handleForward} className="page-btn">{">"}</div>
       </div>
    );
}