import React from 'react';

const WhyUs = () => {
  return (
    <div>
      {/* Title Section */}
      <h1 className="font-bold md:text-4xl sm:text-2xl text-xl text-center pb-10">
        WHY CHOOSE US
      </h1>

      {/* Image with overlay */}
      <div className="relative w-full pt-10">
        <img
          src="/assets/images/hero-background.jpg"
          alt="Why Choose Us"
          className="w-full h-auto object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-primary bg-opacity-80 text-secondary p-6 md:w-1/2 w-full text-right">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Your Trusted Contractor</h2>
          <p className="mb-4">
            We connect you with verified professionals who deliver quality service at competitive prices.
          </p>
          <button className="bg-accent text-secondary px-6 py-2 rounded-md">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
