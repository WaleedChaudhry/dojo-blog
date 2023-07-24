import { useEffect,useState } from "react";
const useFetch =(url)=>{
    const[data,setdata]= useState(null);
    const[ispending,setispending]= useState(true);
    const[error,seterror]=useState(null);

    useEffect(()=>{
        const abortcon=new AbortController();
        setTimeout(()=>{
            fetch(url,{signal: abortcon.signal})
            .then(res=>{
                if(!res.ok){
                    throw Error("Could not load");
                }
            
                return res.json();
             })
             .then(data=>{
                setdata(data);
                setispending(false);
                seterror(null);
             })
             .catch(err=>{
                if(err.name ==='AbortError'){
                    console.log("Fetch Aborted");
                }
                else
                {
                    setispending(false);
                    seterror(err.message);
                }
                
             })
        },1000);
        return ()=> abortcon.abort();
   },[url]);
   return{data,ispending,error}
}
export default useFetch;