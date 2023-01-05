import { useEffect, useState } from "react"
import { Link ,  useLocation } from "react-router-dom";
import axios from "axios";
const User= () =>{
    const  [ user , setUser] = useState({});
    const id = useLocation().pathname.split("/")[2];

//     useEffect(()=>{
//         const controller = new AbortController();
//         // abortController is used to abort the use effect it work with clean up function
//         const signal = controller.signal;
//         fetch(`http://jsonplaceholder.typicode.com/users/${id}`,{signal})
//         .then((res)=> res.json())
//         .then((data)=>{
//             setUser(data)
//         }).catch(err=>{
//             if(err.name === "AbortError"){
//                 console.log("canceled!");
//             }else{
    
//             }
//         })
//  return ()=>{
//     console.log("cancelled!");
//     controller.abort();
//  }
//     },[id]);

// using axios ----------------------

useEffect(()=>{
    const cancelToken = axios.CancelToken.source();
    axios.get(`http://jsonplaceholder.typicode.com/users/${id}`,{cancelToken:cancelToken.token})
    .then((res)=>{
        setUser(res.data)
    }).catch(err=>{
        if(axios.isCancel(err)){
            console.log("canceled!");
        }else{

        }
    })
return ()=>{
cancelToken.cancel()
}
},[id]);

    return(
        <div>
            <p> Name : {user.name}</p>
            <p> userName : {user.username}</p>
            <p> Email : {user.email}</p>
            <Link to="/users/1"> fetch user 1 </Link>
            <Link to="/users/2"> fetch user 2 </Link>
            <Link to="/users/3"> fetch user 3 </Link>
        </div>
    )
} 

export default User;
