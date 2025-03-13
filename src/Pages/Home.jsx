import React from "react";

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
        <h1 className="text-4xl font-bold">Welcome to GetLocalContractors</h1>
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
