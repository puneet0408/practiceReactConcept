import React, { useState } from 'react';
import { useMemo } from 'react';

function UseMemo (){
    const [text , setText] = useState("");
    const [number , setNumber] = useState("");

    const expensiveFunction = (n) =>{
        console.log("function-redering");
        let total = 0;
        for (let i =1; i<n;i++){
            total = total + i;
        }
        return total;
    };

    const sum = useMemo(()=> expensiveFunction(number),[number])

    console.log("component-rendering!");
return(
    <div>
    <input 
    onChange={(e)=>setText(e.target.value)} 
    placeholder="enter number"/>
     <input 
    onChange={(e)=>setNumber(e.target.value)} 
    value={number}
    type="number"
    />
    <span> Total:{sum} </span>
    {text}
    </div>
)
}

export default UseMemo;