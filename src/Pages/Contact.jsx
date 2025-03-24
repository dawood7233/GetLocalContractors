import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    
    <div className="container mx-auto px-4 py-12 mt-10">
      {/* Title Section */}
      <div className="bg-black">
      <div className="relative w-full h-48 flex items-center justify-center text-3xl font-bold bg-cover bg-center" 
           style={ { backgroundImage: "url('/assets/images/hero-background.jpg')" } }>
        Contact Us
      </div>
      </div>
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mt-4">
        <span className="text-primary">Home</span> / Contact Us
      </div>

      {/* Contact Section */}
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <FaPhone className="text-primary text-xl" />
            <span className="text-lg">+1 234 567 890</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-primary text-xl" />
            <span className="text-lg">info@getlocalcontractors.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-primary text-xl" />
            <span className="text-lg">123 Main Street, USA</span>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-600">Your Name</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter your name" />
            </div>
            <div>
              <label className="block text-gray-600">Your Email</label>
              <input type="email" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter your email" />
            </div>
            <div>
              <label className="block text-gray-600">Subject</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter subject" />
            </div>
            <div>
              <label className="block text-gray-600">Message</label>
              <textarea className="w-full p-2 border border-gray-300 rounded " rows="3" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" className="w-full bg-primary text-secondary py-2 rounded">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
