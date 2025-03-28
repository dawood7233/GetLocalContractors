import React from "react";
import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <div className="bg-primary text-secondary p-20 ">
      <span className="">
        <span className="text-2xl font-bold ">
        Get Our Services
        </span>
        <input className="mx-10 border-b-1" type="text" placeholder=""/>
        <Link to="/services">
          <button className="mt-4 bg-accent text-secondary px-6 py-2 rounded-md cursor-pointer font-semibold">
            Get Services
          </button>
          </Link>
      </span>
    </div>
  );
};

export default Newsletter;
