import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MorphingText = ({ texts, className = "", interval = 2000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <div className={` ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={texts[index]}
          initial={{ opacity: 0, scale: 0.8, rotateX: 90 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          exit={{ opacity: 0, scale: 0.8, rotateX: -90 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute w-full text-blue-500"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default MorphingText;
