import { useEffect, useState } from "react"
import { Link ,  useLocation } from "react-router-dom";

const user= () =>{
    const  [ user , setUser] = useState({});
    const id = useLocation().pathname.split("/")[2];

    useEffect(()=>{
        fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=> res.json())
        .then((data)=>{
            setUser(data)
        })
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