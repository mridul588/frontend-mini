import React, { useState,useRef } from "react";

const Drag = ({initialState}) => {
    console.log(initialState);
    const [data , setData] = useState(initialState);
    const dragItem = useRef();
    const dragContainer = useRef();

    const handleDragStart = (e,item , container) =>{
        dragItem.current = item;
        dragContainer.current = container;
        e.target.style.opacity = "0.5";
    }

    const handleDragEnd = (e)=>{
        e.target.style.opacity = "1";
    }

    const handleDrop = (e,targetContainer) => {
        const item = dragItem.current;
        const sourceContainer = dragContainer.current;
        setData((prev)=>{
            const newData = {...prev};
            newData[sourceContainer] = newData[sourceContainer].filter((i)=>i!==item);
            newData[targetContainer] = [...newData[targetContainer],item];
            return newData;
        })
    }

    const handleDragOver = (e) => {
        e.preventDefault();
    }
 return (
 <div style={{display: "flex" , justifyContent:"space-around"}}>
    {Object.keys(data).map((container,index) => {
        return <div key={index}
        onDrop={(e)=>handleDrop(e,container)}
        onDragOver={(e)=>handleDragOver(e)}
        style={{background: "grey",
        padding: "1rem",
        width: 250,
        minHeight: 300,
        }}
        >
       <h2>{container}</h2>
        {data[container].map((item , idx) => {
            return <div key={idx}
            onDragStart={(e) => handleDragStart(e,item,container)}
            onDragEnd={handleDragEnd}
            draggable
              style={{
                    userSelect: "none",
                    padding: 16,
                    margin: "0 0 8px 0",
                    backgroundColor: "black",
                    cursor: "move",
                  }}
            >{item}</div>;
        })}
        </div>
    })}
 </div>
 )

}

export default Drag;