import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { allServices } from "./servicesData";
import { Link } from "react-router-dom";

const ServicesCarousel = () => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: ["100%", "-100%"], 
        transition: { repeat: Infinity, ease: "linear", duration: 15 },
      });
    } else {
      controls.stop(); 
    }
  }, [isHovered, controls]);

  return (
    <div className="overflow-hidden relative w-full bg-secondary py-6">
      <motion.div
        className="flex whitespace-nowrap"
        animate={controls}
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} 
      >
        {[...allServices, ...allServices].map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="flex-shrink-0 px-4"
          >
            <Link
              to={`/services/${service.title}`}
              className="block px-6 py-3 bg-primary text-secondary rounded-lg shadow-md hover:bg-secondary hover:text-primary transition-all"
            >
              {service.title}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesCarousel;
