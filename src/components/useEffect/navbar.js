import React from "react";
import {  NavLink } from "react-router-dom";

const Home = () => {
  return (
<div className="nav" >
<NavLink to="/posts" > go to post </NavLink>
</div>
    
  )
}

export default Home;