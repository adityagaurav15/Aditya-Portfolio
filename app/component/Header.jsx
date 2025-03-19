import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { Assets, SocialMedia } from "../../assets/asset.js";
import { Meteors } from "@/components-ui/meteors.jsx";
import { InteractiveHoverButton } from "@/components-ui/interactive-hover-button.jsx";

const Header = () => {

  const socialLinks = [
    { href: "https://github.com/adityagaurav15", src: Assets.github, alt: "GitHub" },
    { href: "mailto:your-adityagaurav1598@gmail.com", src: SocialMedia.gmail, alt: "Gmail" },
    { href: "https://www.linkedin.com/in/adityagaurav-/", src: SocialMedia.linkedIn, alt: "LinkedIn" },
    { href: "https://instagram.com/adityagaurav__", src: SocialMedia.instagram, alt: "Instagram" },
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row items-stretch">
      {/* Left side (Top for Mobile & Tablet, Left for Desktop) */}
      <div className="w-full lg:w-2/5 bg-[#EADBC8] flex justify-center">
        <div className="w-full mt-10 lg:mt-20 flex items-center py-10 justify-center">
          <motion.div
            initial={{ x: "-10vw", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 2, ease: "easeOut" }}
            className="relative flex w-10/12 md:w-8/12 lg:w-8/12 flex-col items-center p-6 md:p-8 lg:p-10 overflow-hidden rounded-lg 
            border md:shadow-xl gap-5 bg-[#F8F0E5] shadow-xl border-none"
          >
            <Meteors number={150} />
            <Image
              src={Assets.Image}
              alt=""
              className="border-none rounded-md transition-transform duration-300 hover:scale-105 z-10"
            />
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="font-Poppins text-[#4C3D3D] text-2xl md:text-3xl font-extrabold text-center"
            >
              Aditya Gaurav
            </motion.h1>
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
                className="flex w-full items-center justify-center text-[#efdbc4] transition-transform duration-300 hover:scale-105"
              >
                More About Me...
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Right side (Bottom for Mobile & Tablet, Right for Desktop) */}
      <div className="w-full lg:w-3/5 bg-[#F8F0E5] flex justify-center">
        <div className="w-full mt-10 lg:mt-20 flex py-10 px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ x: "10vw" }}
            animate={{ x: 0 }}
            transition={{ type: "tween", duration: 2, ease: "easeOut" }}
            className="w-full relative flex flex-col overflow-hidden gap-5 md:gap-7 lg:gap-10"
          >
            <div className="flex flex-col gap-5 md:gap-8">
              <h1 className="font-Poppins text-[#4C3D3D] text-4xl md:text-6xl lg:text-8xl font-extrabold text-center lg:text-left">
                SOFTWARE <span className="text-[#DAC0A3]">DEVELOPER</span>
              </h1>
              <h1 className="w-full lg:w-2/3 font-Poppins text-[#4D4D4D] text-center lg:text-left">
                Passionate about creating intuitive and engaging user
                experiences. Specialize in transforming ideas into beautifully
                crafted products.
              </h1>
            </div>
            <div className="flex justify-center gap-5 lg:justify-start">
              <InteractiveHoverButton
                href="#contact"
                className="text-[#4C3D3D] shadow-lg rounded-sm border-[#4C3D3D]"
              >
                Let's Talk
              </InteractiveHoverButton>
              <InteractiveHoverButton
                href="https://github.com/adityagaurav15/Aditya-Portfolio/blob/main/assets/AdityaGauravResume.pdf"
                download="Aditya.pdf"
                className="text-[#4C3D3D] shadow-lg rounded-sm border-[#4C3D3D]"
              >
                Resume
              </InteractiveHoverButton>
            </div>
            <div className="flex gap-10 lg:justify-start items-center justify-center">
              {socialLinks.map((link, index) => (
                <a
                  href={link.href}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={link.src}
                    alt={link.alt}
                    width={30}
                    height={30}
                    className="border-none rounded-md transition-transform duration-300 hover:scale-105 z-10"
                  />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
