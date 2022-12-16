import React from 'react';
import './App.css';
// import UseMemo from './components/usememo';
//import UseState  from './components/usestate';
// import UseEffect from "./components/useEffect/useEffect"
import Posts from "./components/useEffect/posts"
// import Effect from './components/useEffect/effect';
import Calling from "./components/useEffect/Apicalling"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (

  
    <BrowserRouter>
      <Calling />
      <Routes>
        <Route path="/posts" element={<Posts/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
