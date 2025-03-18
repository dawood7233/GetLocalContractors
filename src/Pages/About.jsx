import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 pt-10">
      {/* Hero Section */}
      <div className="  text-black text-center py-16 px-6">
        <h1 className="text-4xl font-bold pt-5">About Us</h1>
      </div>

      {/* Why Us Section */}
      <div className="container mx-auto px-6 lg:px-20 py-12">
        <p className="text-[#1f2020] text-lg leading-relaxed text-center">
          GetLocalContractors is an innovative way for you to connect with home
          service providers nearby. Finding the right home contractor according
          to your needs and budget can be a daunting task. We make it easy for
          home owners to connect with multiple qualified professionals in their
          area. Able to compare services and budgets and make inform decisions.
          This all can be achieved by few clicks by filling the form.
        </p>
        <div className="pl-8 pt-10">
          <h1 className="font-bold">What getlocalcontractors helps you with?</h1>
          <ul>
            <li>- To find the right Professional near you</li>
            <li>
              - It saves you time as you do not have to find different
              contractors through extensive searches.
            </li>
            <li>- Compare multi quotations and make the right decision.</li>
            <li>- Find the right professional and get the job done</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
