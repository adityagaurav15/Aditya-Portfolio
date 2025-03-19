import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { Assets } from "../../assets/asset.js";
import { Meteors } from "@/components-ui/meteors.jsx";
import { InteractiveHoverButton } from "@/components-ui/interactive-hover-button.jsx";
import { IconCloud } from "@/components-ui/icon-cloud.jsx";
import Tilt from 'react-parallax-tilt';

const Skills = () => {
  const images = [
    Assets.angular,
    Assets.react,
    Assets.css,
    Assets.javaScript,
    Assets.nextjs,
    Assets.typeScript,
    Assets.redux,
    Assets.materialUi,
    Assets.tailwind,
    Assets.spring,
    Assets.git,
    Assets.html,
    Assets.python,
    Assets.vsCode,
    Assets.github,
    Assets.intellij,
    Assets.java,
    Assets.aws,
  ];

  return (
    <div id="skill" className="w-full flex flex-col lg:flex-row items-stretch">
      {/* Left side (Top for Mobile & Tablet, Left for Desktop) */}
      <div className="w-full lg:w-2/5 bg-[#EADBC8] flex justify-center">
        <div className="w-full mt-10 lg:mt-20 flex items-center py-10 justify-center">
          <motion.div
            initial={{ x: "-10vw", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 2, ease: "easeOut" }}
            className="relative flex items-center justify-center w-10/12 md:w-8/12 lg:w-8/12 
  p-6 md:p-8 lg:p-10 overflow-hidden rounded-lg border md:shadow-xl bg-[#F8F0E5] shadow-xl border-none"
          >
            {/* H1 in the center */}
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute font-Poppins text-[#4C3D3D] text-2xl md:text-3xl font-extrabold text-center opacity-25"
            >
              SKILLS
            </motion.h1>

            {/* IconCloud directly on top of H1 */}
            <div className="relative inset-0 flex items-center justify-center">
              <IconCloud images={images} />
            </div>
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
            className="w-full relative flex flex-col overflow-hidden gap-10 md:gap-14 lg:gap-20"
          >
            <div className="flex flex-col gap-5 md:gap-8">
              <h1 className="font-Poppins text-[#4C3D3D] text-4xl md:text-6xl lg:text-8xl font-extrabold text-center lg:text-left">
                Skills 
                {/* <span className="text-[#DAC0A3]">DEVELOPER</span> */}
              </h1>
              <Tilt className="shadow-2xl rounded-lg p-6 bg-red-500">
      <div style={{ height: '300px', backgroundColor: 'darkgreen' }} >
        <h1>React Parallax Tilt 👀</h1>
      </div>
    </Tilt>
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
