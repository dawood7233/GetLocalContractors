import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className=" bg-black text-secondary p-10">
        <nav>
          <Link to="/" className="">
            <img
              className="h-14 lg:h-16 pl-3"
              src="/assets/images/Local-Contractors-Logo.png"
              alt="Logo"
            />
          </Link>
        </nav>
        <nav>
          <h6 className="">Legal</h6>
          <Link className="" to="/">
            Terms of use
          </Link>
          <Link className="" to="/">
            Privacy policy
          </Link>
          <Link className="" to="/">
            California Privacy Notice
          </Link>
        </nav>
        <nav>
          <h6 className="">Company</h6>
          <Link className="" to="/About">
            About us
          </Link>
          <Link className="" to="/Contact">
            Contact
          </Link>
        </nav>
      </footer>
      <section className="bg-primary-foreground text-secondary p-2 text-center">
          <p>
            Copyright © {new Date().getFullYear()} - All rights reserved by
            GetLocalContractors Pvt Ltd
          </p>
        
      </section>
    </div>
  );
};

export default Footer;
