import React from "react";  
const apiCalls=()=>{
    const URL="https://jsonplaceholder.typicode.com/"
    
    const getData=async(apiCall)=> {
        const response = await fetch(apiCall);
        console.log(response);
        const data= await response.json();
        console.log(data);

    }
    getData(URL);
    return(
        <div>

        </div>
    )
}
export default apiCalls;