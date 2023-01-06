import { useReducer} from "react"
import { INITIAL_STATE,postReducer } from "./postReducer";

const Post = ()=>{
    const [state ,dispatch] = useReducer(postReducer,INITIAL_STATE);
    console.log(state);

    const handleFetch = ()=>{
        dispatch({type:"FETCH_START"})
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            dispatch({type:"FETCH_SUCESS", payload:data});
        })
        .catch((err)=>{
            dispatch({type:"FETCH_ERROR"});
        })
    };

    return(
        <div>
            <button onClick={handleFetch} >
            {state.loading ?"...wait": "fetch the post"}
            </button>
           <p>{state.post?.title}</p>
           <span>{state.error && "somthing went wrong "}</span>
        </div>
    )
}

export default Post;