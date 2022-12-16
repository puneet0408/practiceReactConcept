
import React, { useState, useEffect } from "react";

function Effect (){

    const [number , setnumber] = useState(0);

    useEffect(()=>{
        console.log("effect")
      const interval =   setInterval(()=>{
            setnumber(prev => prev + 1)
        },1000)
   return()=>{
    clearInterval(interval);
   }
    },[])
    // now this use effect only update the number in every second and store it in different memory space but this is not effecient 
    // that's why we use cleanup function to free memory from prev effect and create new effect 
    return (
        <div>{number}</div>
    )
}

export default  Effect;