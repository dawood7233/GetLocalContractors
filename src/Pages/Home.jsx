import React from "react";
import Services from "./Services";
import WhyUs from "@/Components/WhyUs";

const Home = () => {

  return (
    <div>
    <div className="relative md:w-full md:h-screen h-screen flex items-center bg-black">
      {/* Hero Section */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/assets/images/hero-background.jpg')" }}
        loading="lazy"
      ></div>

      {/* Hero Content */}
      <div className="relative text-secondary-foreground ml-10">
        <div className="">
      <svg xmlns="http://www.w3.org/2000/svg" width="123" height="24" viewBox="0 0 123 24" fill="none"><path d="M0 5.74514H6V17.7451H0V5.74514Z" fill="#ffb000"></path><path d="M6 8.74514H103V14.7451H6V8.74514Z" fill="#ffb000"></path><path d="M99 11.7451L110.745 0L122.49 11.7451L110.745 23.4903L99 11.7451Z" fill="#ffb000"></path></svg>
      </div>
      <h1 className="text-4xl font-bold">Get Local Contractors</h1>
        <p className="text-lg mt-2">Find the best contractors near you!</p>
      </div>

      {/* Right Side Image */}
      <div className="absolute md:right-0 md:bottom-0 md:top-22 top-80 right-5 ">
        <img
          src="/assets/images/side-portrait.png"
          alt="Contractor working"
          className="md:w-xl md:h-118 w-sm h-60"
        />
      </div>
      
    </div>
    {/* services section */}
    <section className="bg-secondary">
    <Services visibleServices={4} homeView={true}/>
    </section>
    {/* Divider line */}
      <div className="flex items-center justify-center my-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 123 24"
          fill="none"
          className="mr-2"
        >
          <path
            d="M99 11.7451L110.745 0L122.49 11.7451L110.745 23.4903L99 11.7451Z"
            fill="#ffb000"
          />
        </svg>
        <div className="border-t border-secondary w-full max-w-md"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 123 24"
          fill="none"
          className="ml-2 -scale-x-100"
        >
          <path
            d="M99 11.7451L110.745 0L122.49 11.7451L110.745 23.4903L99 11.7451Z"
            fill="#ffb000"
          />
        </svg>
      </div>
    {/* Why Choose Us Section */}
    <section className="">
      <WhyUs />
    </section>

          {/* Divider line */}
          <div className="flex items-center justify-center my-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 123 24"
          fill="none"
          className="mr-2"
        >
          <path
            d="M99 11.7451L110.745 0L122.49 11.7451L110.745 23.4903L99 11.7451Z"
            fill="#ffb000"
          />
        </svg>
        <div className="border-t border-secondary w-full max-w-md"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 123 24"
          fill="none"
          className="ml-2 -scale-x-100"
        >
          <path
            d="M99 11.7451L110.745 0L122.49 11.7451L110.745 23.4903L99 11.7451Z"
            fill="#ffb000"
          />
        </svg>
      </div>

    <section className="">

    </section>

    </div>
  );
};

export default Home;
