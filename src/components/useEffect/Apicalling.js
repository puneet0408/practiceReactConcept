import React from "react";
import { useNavigate } from "react-router-dom";


 

const Home = () =>{
   
    const navigate = useNavigate();
    
    function GotoPostPage (){
        navigate("/posts")
    }

    return(
        <div>

<div onClick={GotoPostPage} >
        </div>
        its me for it 
        </div>
      
    )
 
}

export default Home;