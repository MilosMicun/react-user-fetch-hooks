import {useState,useEffect} from "react";

export function useFetchPost(){
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const[error,setError] = useState(null);

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

                if(!response.ok){
                    throw new Error("Request failed")
                }
                const result = await response.json() 
                setData(result);
            }catch(err){
                setError(err.message)
            }finally{
                setLoading(false)
            }
        }
        fetchData();
    },[])
    return {data,loading,error};
}