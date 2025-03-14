import React from "react";
import { motion } from "motion/react";

const Home = () => {
  return (
    <div className="relative md:w-full md:h-screen h-screen flex items-center  bg-gray-800">
      {/* Hero Section */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/assets/images/hero-background.jpg')" }}
      ></div>

      {/* Hero Content */}
      <div className="relative text-white">
        <motion.h1 
        drag
        dragConstraints={{left:0,right:1000,top:0,bottom:200}}
        initial={{
          x:40,
        }}
        animate={{
          
          x:[0,400,400,0,0],
          y:[0,0,200,200,0],
          
          
        }}
        transition={{
          smooth:3,
          duration:3,
          
        }} 
        className="text-4xl font-bold">Welcome to GetLocalContractors</motion.h1>
        <p className="text-lg mt-2">Find the best contractors near you!</p>
      </div>

      {/* Right Side Image */}
      <div className="absolute md:right-0 md:bottom-0 md:top-22 top-80 right-5">
        <img
          src="/assets/images/side-portrait.png"
          alt="Contractor working"
          className="md:w-xl md:h-118 w-sm h-60"
        />
      </div>
    </div>
  );
};

export default Home;
