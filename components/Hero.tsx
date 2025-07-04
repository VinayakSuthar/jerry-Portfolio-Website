import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
// import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FlipWords } from "./ui/flip-words";
import { motion } from "framer-motion";


const Hero = () => {
  const flippingWords = [
    "beautiful",
    "modern",
    "creative",
    "responsive",
    "interactive",
    "fast",
    "engaging",
    "sleek",
    "dynamic",
    "user-friendly",
    "intuitive",
    "pixel-perfect",
    "innovative",
    "cutting-edge",
    "seamless",
    "high-performance",
    "aesthetic",
    "accessible",
    "scalable",
  ];

  return (
    <div className="pb-20 pt-36" id="home">
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-dot-white/[0.5] bg-dot-black-100/[0.5]
       absolute top-0 left-0 flex items-center justify-center"
      >
        
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80"
          >
            Dynamic Web Magic with latest tech
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center text-[40px] md:text-5xl  dark:text-neutral-300 text-black leading-snug tracking-wide lg:text-6xl my-10"
          >
            <span className="font-bold">I craft</span>
            <FlipWords
              className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300"
              words={flippingWords}
              duration={3000}
            />
            <br />
            <span className="font-bold ">
              web experiences with modern frameworks
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl"
          >
            Hi! I&apos;m Jayesh Puri Goswami, a MERN Stack Developer
          </motion.p>
          <motion.a
            href="#about"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 100 }}
          >
            <MagicButton
              title="Show my projects"
              icon={<FaLocationArrow />}
              position="right"
            />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
