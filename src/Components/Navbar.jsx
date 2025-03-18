import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/Services", label: "Services" },
    { path: "/About", label: "About Us" },
    { path: "/Contact", label: "Contact" },
  ];

  return (
    <header className="p-4  text-secondary fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container flex justify-between h-14 mx-auto">
        {/* Logo */}
        <div className="flex items-center p-2">
          <Link to="/" className="cursor-pointer text-lg font-bold">
            <img
              src="/assets/images/Local-Contractors-Logo.png"
              alt="Local Contractors"
              className="h-24 w-auto"
            />
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="flex justify-end p-4 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="25"
            viewBox="0 0 24 24"
            fill="white"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d={
                menuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M0 1.11111C0 0.5 0.4875 0 1.08333 0H19.5C20.0958 0 20.5833 0.5 20.5833 1.11111C20.5833 1.72222 20.0958 2.22222 19.5 2.22222H1.08333C0.4875 2.22222 0 1.72222 0 1.11111ZM19.5 17.7778H1.08333C0.4875 17.7778 0 18.2778 0 18.8889C0 19.5 0.4875 20 1.08333 20H19.5C20.0958 20 20.5833 19.5 20.5833 18.8889C20.5833 18.2778 20.0958 17.7778 19.5 17.7778ZM24.9167 8.88889H6.5C5.90417 8.88889 5.41667 9.38889 5.41667 10C5.41667 10.6111 5.90417 11.1111 6.5 11.1111H24.9167C25.5125 11.1111 26 10.6111 26 10C26 9.38889 25.5125 8.88889 24.9167 8.88889Z"
              }
            />
          </svg>
        </button>

        {/* Navigation Menu */}
        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row md:items-stretch space-y-3 md:space-y-0 md:space-x-3 absolute md:static top-16 left-0 w-full md:w-auto bg-primary md:bg-secondary md:rounded-2xl md:text-primary md:top-5 p-4 md:p-0`}
        >
          {menuItems.map((item) => (
            <li key={item.path} className="flex">
              <Link
                to={item.path}
                className="block w-full px-4 py-4 cursor-pointer font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/Services">
        <Button className="md:flex hidden text-secondary cursor-pointer">Get Our Consultation!</Button>
        </Link>
      </div>
    </header>
  );
};

export default NavBar;

