import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { Assets } from "../../assets/asset.js";
import { Meteors } from "@/components/ui/meteors.jsx";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button.jsx";

const About = () => {
  return (
    <div id="about" className="w-full flex flex-col lg:flex-row items-stretch">
      {/* Left side (Top for Mobile & Tablet, Left for Desktop) */}
      <div className="w-full lg:w-3/5 bg-[#F8F0E5] flex justify-center">
        <div className="w-full mt-10 lg:mt-20 flex py-10 px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ x: "10vw" }}
            animate={{ x: 0 }}
            transition={{ type: "tween", duration: 2, ease: "easeOut" }}
            className="w-full relative flex flex-col overflow-hidden gap-10 md:gap-14 lg:gap-20"
          >
            <div className="flex flex-col gap-5 md:gap-8">
              <h1 className="font-Poppins text-[#4C3D3D] text-4xl md:text-6xl lg:text-8xl font-extrabold text-center lg:text-left">
                ABOUT <span className="text-[#DAC0A3]">ME</span>
              </h1>
              <h1 className="w-full font-Poppins text-[#4D4D4D] leading-[2rem] text font-medium text-left">
                I am a passionate Software Developer based in Bangalore, India,
                with expertise in React.js, Angular and Springboot. Currently
                working at Tata Consultancy Services (TCS) since August 2021, I
                have contributed to projects for Ernst & Young (EY), General
                Electric Company (GE), Colonial First Bank (CFS) and Auckland
                Savings Bank (ASB) as a Front-end Developer(React and Angular) ,
                focusing on building responsive, scalable, and high-performance
                web applications.
                <br /> <br />
                With a strong foundation in JavaScript, TypeScript, Zustand,
                Redux, and Tailwind CSS, I specialize in crafting dynamic user
                interfaces, optimizing performance, and ensuring seamless user
                experiences. My expertise extends to custom component
                development, API integration, and translating UI/UX designs into
                functional applications. 
              </h1>
            </div>
            
          </motion.div>
        </div>
      </div>

      {/* Right side (Bottom for Mobile & Tablet, Right for Desktop) */}
      <div className="w-full lg:w-2/5 bg-[#EADBC8] flex justify-center">
        <div className="w-full mt-10 lg:mt-20 flex items-center py-10 justify-center">
          <motion.div
            initial={{ x: "-10vw" }}
            animate={{ x: 0 }}
            transition={{ type: "tween", duration: 2, ease: "easeOut" }}
            className="relative flex w-10/12 md:w-8/12 lg:w-8/12 flex-col items-center p-6 md:p-8 lg:p-10 overflow-hidden rounded-lg 
          border md:shadow-xl gap-5 bg-[#F8F0E5] shadow-xl border-none"
          >
            <Meteors number={50} />
            <Image
              src={Assets.Image}
              alt=""
              className="border-none rounded-md transition-transform duration-300 hover:scale-105"
            />
            
            <h1 className="font-Poppins text-[#4C3D3D] text-left whitespace-pre-line leading-relaxed">
            When I’m not building web applications,
                I love traveling and exploring new places. Experiencing
                different cultures, trying local cuisines, and creating
                unforgettable memories excite me the most.
            </h1>
            
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
