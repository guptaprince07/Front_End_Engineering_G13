// import Navbar from "./components/Navbar"
// import Result from "./components/Result"
// import './app.css'
// //import image1 from './assets/images/image1.jpg'
// //import Welcome from "./components/Welcome"
// //import Add from "./components/Add"

// function App() {
//   return (
//     <>
//     {/* <Navbar>
//      </Navbar>  */}
//      {/* <img src="/public/images/image1.jpg" alt='image1'/> */}
//      {/* <Welcome></Welcome> */}
//      {/* <Add></Add> */}
//      <Result></Result>
//     </>
//   )
// }
// export default App

//import {BrowserRouter, Router ,Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import React from 'react'

function App() {
  return (
    <div>
      <Home/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App
