import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { Button } from "@/components/ui/button";
import { allServices } from "../Components/servicesData";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); 

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/About", label: "About Us" },
    { path: "/Contact", label: "Contact" },
  ];

  return (
    <header className="p-4 text-secondary fixed top-0 left-0 w-full z-50">
      <div className="container flex justify-between h-14 mx-auto">
        {/* Logo */}
        <div className="flex items-center p-2">
          <Link to="/" className="cursor-pointer text-lg font-bold">
            <img
              src="/assets/images/Logo.png"
              alt="Local Contractors"
              className="h-24 w-auto"
            />
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="flex justify-end p-4 md:hidden pl-42"
          onClick={() => setMenuOpen(!menuOpen)}
        >
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

          {/* Services Dropdown using ShadCN */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-primary bg-secondary cursor-pointer text-lg" onClick={() => navigate("/Services")}>
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-secondary text-primary">
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-2  w-[400px]">

                    {allServices.map((service) => (
                      <li
                        key={service.title}
                        onClick={() => {
                          navigate(`/Services/${service.title}`);
                          setMenuOpen(false);
                        }}
                        className="cursor-pointer  p-2 rounded-md text-sm font-medium"
                      >
                        {service.title}
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </ul>

        <Link to="/Services">
          <Button className="md:flex hidden text-secondary cursor-pointer">
            Get Our Consultation!
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
