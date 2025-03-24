import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from "./Pages/Home"
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import AutoScroll from "./Components/AutoScroll";
import ServiceDetails from "./Pages/ServiceDetails";
import UserService from "./Pages/UserService";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import CaliforniaPolicy from "./Pages/CaliforniaPolicy";

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
          <Route path="/Services/:title" element={<ServiceDetails/>}></Route>
          <Route path="/UserService" element={<UserService/>}></Route>
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}></Route>
          <Route path="/CaliforniaPolicy" element={<CaliforniaPolicy/>}></Route>
        </Routes>
        <Footer/>
    </Router>
  );
};

export default App;
