import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from "./Pages/Home"
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import AutoScroll from "./Components/AutoScroll";

const App = () => {
  return (
    <Router>
        <AutoScroll/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Services" element={<Services/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/About" element={<About/>}></Route>
        </Routes>
        <Footer/>
    </Router>
  );
};

export default App;
