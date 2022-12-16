import React, { useState, useEffect } from "react";


function UseEffect (){

    const [number , setNumber] = useState(0);
    const[name, setName] = useState("");
    const [state , setstate] = useState({
        name :"",
        selected : false,
    });

    // useEffect(()=>{
    //     console.log("useEffect runs!");
    //     document.title=`you click ${number} times`;
    // },[number])
    // console.log("component rendering");

    useEffect(()=>{
        console.log("the state has change and useEffect Works");
    },[state.name,state.selected]) // it only run when we update the name and selected through this dependency 

    

    const handleadd = () =>{
        setstate(prev =>({...prev, name}))
    }

    const handleSelect = () =>{
        setstate(prev =>({...prev, selected:true}))
    }
    return(
        <div>
            {/* <p> {name} you click this button {number} times</p>
            <button onClick={()=>setNumber((prev)=>prev + 1)}> increase </button> */}

             <input onChange={(e)=> setName(e.target.value)}/>

              <button onClick={handleadd} >
                Add Name
              </button>
              <button onClick={handleSelect} >
                select
              </button>

            {`{
                name : ${state.name},
                selected : ${state.selected.toString()}
            }`}
        </div>
    )
} 

export default UseEffect;
