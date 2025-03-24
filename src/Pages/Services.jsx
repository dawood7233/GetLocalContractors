import React from "react";
import { useNavigate } from "react-router-dom";
import { allServices } from "../Components/servicesData";
import { motion } from "motion/react";

const Services = ({ visibleServices, homeView = false }) => {
  const navigate = useNavigate();

  return (
    <div className="py-16">
      <h1 className={`font-bold text-4xl text-center pt-10 pb-10 ${homeView ? "hidden" : ""}`}>
        Our Services
      </h1>
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 cursor-pointer">
          {allServices.slice(0, visibleServices).map((service) => (
            <div
              key={service.id}
              className="bg-secondary-foreground text-secondary shadow-md  rounded-4xl p-6 text-center hover:scale-105 transition-transform duration-500"
              onClick={() => navigate(`/Services/${service.title}`)}
            >
              <div className="mb-4">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-20 h-20 mx-auto"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 ">{service.title}</h3>
              <p className="text-secondary mb-4">{service.description}</p>
              <button className="px-20 py-2 bg-secondary text-white rounded-lg ">
                Get Quote
              </button>
            </div>
          ))}
        </div>
        {visibleServices < allServices.length && (
          <div className="text-center mt-8">
            <button
              className="text-white"
              onClick={() => navigate("/services")}
            >
              Show All Services
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
