import { useEffect, useState } from "react";
import Post from "./Post";

export default function InfiniteScroll() {
    const [data , setData] = useState([]);
    const[pageNo , setPageNO] = useState(1);

    console.log(data);

    useEffect(()=>{
     fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=3`).then((res)=>{
        return res.json();
     }).then((arr) => setData((oldData)=>[...oldData , ...arr]));
    },[pageNo])
    
    return(
        <div>
            <Post data={data} setPageNO={setPageNO} />
        </div>
    )
}