import React from "react";
import { motion } from "motion/react";
import Services from "./Services";

const Home = () => {
  const animate = {}

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
      <div className="relative text-secondary-foreground">
        <div className="">
      <svg xmlns="http://www.w3.org/2000/svg" width="123" height="24" viewBox="0 0 123 24" fill="none"><path d="M0 5.74514H6V17.7451H0V5.74514Z" fill="#ffb000"></path><path d="M6 8.74514H103V14.7451H6V8.74514Z" fill="#ffb000"></path><path d="M99 11.7451L110.745 0L122.49 11.7451L110.745 23.4903L99 11.7451Z" fill="#ffb000"></path></svg>
      </div>
        <motion.h1 
        drag
        dragConstraints={{left:0,right:1000,top:0,bottom:200}}
        initial={{
          x:40,
        }}
        animate={{  
          x:[0,400,400,0,0],
          y:[0,0,200,200,0],
        }}
        transition={{
          smooth:3,
          duration:3,
          
        }} 
        
        className="text-4xl font-bold">Welcome to GetLocalContractors</motion.h1>
        <p className="text-lg mt-2">Find the best contractors near you!</p>
      </div>

      {/* Right Side Image */}
      <div className="absolute md:right-0 md:bottom-0 md:top-22 top-80 right-5">
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
    <section className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate, nisi voluptas magni voluptates ab excepturi cupiditate? Ab rerum ad soluta veniam mollitia laborum eveniet. Culpa, cum sint vitae modi doloremque repellat nihil ipsam ducimus voluptatem iure dolores similique a quo recusandae praesentium officia, tempora minus? Nihil iure blanditiis veritatis recusandae consequatur eum corporis culpa accusantium repudiandae eaque, laudantium facilis aspernatur ab consequuntur iusto dignissimos adipisci nisi perferendis labore qui fuga voluptates voluptatibus ea? Nulla omnis, perspiciatis, dolorem iure at obcaecati, optio libero perferendis impedit nobis nemo delectus soluta assumenda velit quod! Totam, consequuntur? Fugit tenetur dolorum voluptate consequatur sed autem veritatis aliquid, voluptatum iusto recusandae doloremque repellendus consectetur voluptatibus molestiae hic amet aperiam odit eos totam reiciendis illum a ab. Asperiores architecto fugit itaque cupiditate facere qui cumque ut delectus tempora atque voluptatibus adipisci expedita deserunt amet modi nulla obcaecati, neque aliquid, corporis illo excepturi aliquam omnis. Assumenda impedit velit recusandae molestiae hic beatae architecto vero accusamus repellat. Est vero repellendus nam, saepe inventore, quam odit libero, porro illo eos maxime maiores nostrum sequi! Est accusamus reprehenderit reiciendis ab assumenda enim corporis blanditiis, nam maiores tempore iusto, quisquam architecto molestias odit amet doloremque repellat facilis vel earum autem recusandae minus aspernatur iste nulla? Voluptates aliquam quo voluptatibus est dolore. At totam consequatur dolorum eos libero omnis? Architecto itaque iste, ab dolore illo necessitatibus, est aut laboriosam assumenda consequatur provident sit perspiciatis maiores laborum, fuga dicta numquam quis doloremque corporis optio voluptatum molestias! Pariatur ipsa, dignissimos debitis autem quidem illum, voluptatem sit delectus ducimus fugiat sint! Provident, ipsam quod nam a eligendi, repudiandae blanditiis obcaecati eos, minus rerum hic voluptatum fugiat. Vitae qui alias voluptate ipsam? Illum necessitatibus molestias, iste sequi itaque eligendi a rerum eos eveniet, voluptas consectetur vitae, numquam ut quis libero impedit. Sint, repudiandae? Magni, aut vitae!</section>
    </div>
  );
};

export default Home;
