import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Assets } from "../../assets/asset.js";
import { IconCloud } from "@/components-ui/icon-cloud.jsx";
import DecryptedText from "@/components-ui/decrypted-text.jsx"



const ContactMe = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 360);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    // <div className="relative w-48 h-64 flex items-center justify-center overflow-hidden rounded-2xl bg-[#07182E]">
    //   <motion.div
    //     className="absolute w-24 h-[130%] bg-gradient-to-b from-cyan-500 to-pink-500"
    //     animate={{ rotate: rotation }}
    //     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    //   />
    //   <div className="absolute inset-1 bg-[#07182E] rounded-xl" />
    //   <h2 className="z-10 text-white text-2xl">CARD</h2>
    // </div>
    /* From Uiverse.io by Awais142 */ 
<div className="flex flex-wrap gap-6 justify-center items-center">
  <label className="text-gray-400 cursor-pointer">
    <input type="checkbox" className="hidden peer" />
    <div
      className="group flex flex-col gap-4 w-32 h-40 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-4 shadow-xl border-2 border-transparent transition-all duration-300 ease-in-out hover:border-indigo-500 hover:shadow-indigo-500/20 peer-checked:border-indigo-500 peer-checked:from-indigo-900/50 peer-checked:to-gray-900 peer-checked:translate-y-[-0.5rem]"
    >
      <div className="relative">
        <div
          className="w-12 h-12 mx-auto bg-indigo-500/20 rounded-lg border-2 border-indigo-500/40 group-hover:border-indigo-400 group-hover:bg-indigo-500/30 peer-checked:border-indigo-400 peer-checked:bg-indigo-500/30 transition-all duration-300"
        >
          <div className="flex flex-col gap-1 p-2">
            <div className="h-1 w-8 bg-indigo-400/40 rounded-full"></div>
            <div className="h-1 w-6 bg-indigo-400/40 rounded-full"></div>
            <div className="h-1 w-7 bg-indigo-400/40 rounded-full"></div>
          </div>
        </div>

        <div
          className="absolute top-0 right-6 w-3 h-3 rounded-full bg-gray-600 group-hover:bg-indigo-400 group-hover:animate-pulse peer-checked:bg-indigo-400 peer-checked:animate-pulse transition-all duration-300"
        ></div>
      </div>

      <div className="text-center">
        <p
          className="font-medium text-sm group-hover:text-indigo-400 peer-checked:text-indigo-400 transition-colors duration-300"
        >
          VS Code
        </p>
        <p
          className="text-xs mt-1 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        >
          Editor
        </p>
      </div>

      <div
        className="h-1 w-0 bg-indigo-500 rounded-full mx-auto group-hover:w-full peer-checked:w-full transition-all duration-300"
      ></div>
    </div>
  </label>
</div>

  );
};

export default ContactMe;
