import React from 'react';
import './App.css';
//import Calling from "./components/useEffect/Apicalling"
//import Navbar from "./components/useEffect/navbar"
// import UseMemo from './components/usememo';
//import UseState  from './components/usestate';
//import UseEffect from "./components/useEffect/useEffect"
//import Posts from "./components/useEffect/posts"
// import Effect from './components/useEffect/effect';
//import Users from "./components/useEffect/user"
import Products from './Products/products.js';
//import Reducer from "./components/useReducer/usereducer"
//import Form from "./components/useReducer/form"
// import {
//   Routes,
//   Route,

// } from "react-router-dom";
function App() {
  return (
    <div>
      <Products/>
      {/* <Routes>
      <Route path='/' element={<Calling />} />
          <Route path='/posts' element={<Posts />} />
      </Routes> */}
    </div>
  );
}
export default App;