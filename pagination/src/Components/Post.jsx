import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import axios from 'axios';


export default function Page() {

    const [data , setData] = useState([]);
    const[page, setPage] = useState(1);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=5`);
                setData(res.data); 
               // console.log(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    },[page])
    return(
        <div className="container" style={{ height: "430px", width: "550px"}}>
        <div className="post-container" style={{ height: "430px", width: "290px", display:"flex", gap:"15px" }}>
            {data.map((item, index) => (
                <img className="image" key={index} src={item.download_url} alt={`Image ${index}`} style={{ maxWidth: "100%", maxHeight: "100%",borderRadius: "5%"}} />
            ))}
        </div>
        <Pagination page={page} setPage={setPage} />
    </div>
    
    );
}