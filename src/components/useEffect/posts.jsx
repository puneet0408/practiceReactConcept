import React from "react";
import { useState, useEffect } from "react"




function Posts() {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        let isCancelled = false;
        fetch("http://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                 if (!isCancelled) {
                    alert("posts are ready, updating state!")
                    setPosts(data);
                    console.log(data);
             }

            });
        return () => {
            isCancelled = true
        };
    }, []);
    return (
        <div style={{color:"black"}} >
            {posts.map((post) => (
                <p key={post.id}>{post.title}</p>
                )
            )}
        </div>
    )
}

export default Posts;