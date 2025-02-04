import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { Assets } from "../../assets/asset.js";
import { Meteors } from "@/components/ui/meteors.jsx";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button.jsx";

const Header = () => {
  return (
    <div className="w-full flex items-stretch">
      {/* Left side */}
      <div className="w-2/5 bg-[#EADBC8]">
        <div className="w-full mt-20 flex items-center py-10 justify-center">
          <motion.div
            initial={{ x: "-10vw" }} // Start from the left (out of view)
            animate={{ x: 0 }} // Move to its original position
            transition={{ type: "tween", duration: 2, ease: "easeOut" }}
            className="relative flex w-7/12 flex-col items-center p-10 overflow-hidden rounded-lg 
            border bg-background md:shadow-xl gap-5 bg-[#f4e9da] shadow-xl"
          >
            <Meteors number={50} />
            <Image src={Assets.Image} alt="" className="border rounded-md" />
            <h1 className="font-Poppins text-[#4C3D3D] text-3xl font-extrabold">
              Aditya Gaurav
            </h1>
            <h1 className="font-Poppins text-[#4C3D3D] text-sm text-center whitespace-pre-line leading-relaxed">
              A developer passionate about building scalable, user-centric, and
              high-performance applications
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 2 }}
              className="bg-[#4C3D3D] font-poppins text-white w-full rounded-sm"
            >
              <a
                href="#about"
                className="flex w-full items-center justify-center transition-transform duration-300 hover:scale-105"
              >
                More About Me...
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Right side */}
      <div className="w-3/5 bg-[#F8F0E5]">
        {/* <Meteors number={50} /> */}
        <div className="w-full mt-20 flex py-10 px-20">
          <motion.div
            initial={{ x: "10vw" }}
            animate={{ x: 0 }}
            transition={{ type: "tween", duration: 2, ease: "easeOut" }}
            className="w-full relative flex flex-col overflow-hidden gap-20"
          >
            <div className="flex flex-col gap-8">
              <h1 className="font-Poppins text-[#4C3D3D] text-8xl font-extrabold">
                SOFTWARE <span className="text-[#DAC0A3]">DEVELOPER</span>
              </h1>
              <h1 className="w-2/3 font-Poppins text-[#4D4D4D]">
                Passionate about creating intuitive and engaging user
                experiences. Specialize in transforming ideas into beautifully
                crafted products.
              </h1>
            </div>
            <div className="flex">
              <InteractiveHoverButton href="#about" className="shadow-lg">Let's Talk</InteractiveHoverButton>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
