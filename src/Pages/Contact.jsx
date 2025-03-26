import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Title Section */}
      <h1
        className="font-bold md:text-4xl sm:text-2xl text-xl text-center pt-10 pb-20"
      >
        <span className="absolute left-[80%] sm:left-[66%] md:left-[70%] top-29">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[70px] h-[14px] sm:w-[90px] sm:h-[18px] md:w-[123px] md:h-[24px]"
            viewBox="0 0 123 24"
            fill="none"
          >
            <path d="M0 5.74514H6V17.7451H0V5.74514Z" fill="#ffb000"></path>
            <path d="M6 8.74514H103V14.7451H6V8.74514Z" fill="#ffb000"></path>
            <path
              d="M99 11.7451L110.745 0L122.49 11.7451L110.745 23.4903L99 11.7451Z"
              fill="#ffb000"
            ></path>
          </svg>
        </span>
        CONTACT US
        <span className="absolute left-[5%] sm:left-[20%] md:left-[16%]  top-29 -scale-x-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[70px] h-[14px] sm:w-[90px] sm:h-[18px] md:w-[123px] md:h-[24px]"
            viewBox="0 0 123 24"
            fill="none"
          >
            <path d="M0 5.74514H6V17.7451H0V5.74514Z" fill="#ffb000"></path>
            <path d="M6 8.74514H103V14.7451H6V8.74514Z" fill="#ffb000"></path>
            <path
              d="M99 11.7451L110.745 0L122.49 11.7451L110.745 23.4903L99 11.7451Z"
              fill="#ffb000"
            ></path>
          </svg>
        </span>
      </h1>

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
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-600">Your Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-600">Subject</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter subject"
              />
            </div>
            <div>
              <label className="block text-gray-600">Message</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded "
                rows="3"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-secondary py-2 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
