import { useState,useEffect } from "react";

export function useFetchUser(){
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
                if(!response.ok){
                    throw new Error("Request Failed")
                }
                const result = await response.json();
                setData(result);
            }catch(err){
                setError(err.message)
            }finally{
                setLoading(false)
            }
        };
        fetchData();
    },[])
    return {data,loading,error};
};