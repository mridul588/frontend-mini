import { useEffect } from "react"

export default function Post({data ,setPageNO}) {

    useEffect(()=>{
        const observer = new IntersectionObserver((param) => {
            console.log(param);
            if(param[0].isIntersecting){
                observer.unobserve(lastImage);
                setPageNO((pageNo) => pageNo+1)
            }
        },
    {
        threshold: 0.5
    }
    )

        const lastImage = document.querySelector('.img-post:last-child');
        if(!lastImage) return;

        observer.observe(lastImage);

        return () => {
            if(lastImage){
                observer.unobserve(lastImage);
            }
            observer.disconnect();
        }
    },[data])

    return(
        <div className="container">
          {data.map((item,index) => {
            return <img className="img-post" key={index} src={item.download_url} />
          })}
        </div>
    )
}