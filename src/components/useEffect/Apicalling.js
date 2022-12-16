import { useNavigate } from "react-router-dom";


 

const Home = () =>{
   
    const navigate = useNavigate();
    
    function GotoPostPage (){
        navigate("/posts")
    }

    return(
        <div onClick={GotoPostPage} >
         hhhh
        </div>
    )
 
}

export default Home;