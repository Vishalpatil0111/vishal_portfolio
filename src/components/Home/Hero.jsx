import React from "react";
import TiltedCard from "../TiltedCard";
import CircularText from "../CircularText";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";



function Hero() {

  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen p-4 flex flex-col justify-top items-center gap-5">
      <div className="text-center font-normal text-[45px] md:text-[50px] lg:text-[72px] leading-tight flex flex-col justify-center items-center h-full text-white px-4">
        {/* Line 1 */}
        <motion.h1
          className="flex gap-2 md:gap-4 lg:gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Crafting
          </motion.span>

          <motion.span
            className="px-5 py-2 bg-sky-400 text-black text-[30px] lg:text-[55px] rounded-full font-semibold inline-block"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Modern
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            &
          </motion.span>
        </motion.h1>

        {/* Line 2 */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.55,
                ease: "easeOut",
              },
            },
          }}
          className="flex gap-3"
        >
          <span>Digital</span>

          <motion.span
            className="px-5 py-2 text-yellow-300 rounded-full inline-block"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Web Experiences
          </motion.span>
        </motion.h1>
      </div>

      <div className="p-4 md:p-0 md:w-1/2 h-fit flex flex-col md:flex-row items-center md:items-start  justify-evenly text-white mt-5 gap-5 ">
        <TiltedCard
          imageSrc="/dp1.jpg"
          altText="Vishal Patil-Developer"
          captionText="Vishal Patil - developer"
          containerHeight="250px"
          containerWidth="250px"
          imageHeight="250px"
          imageWidth="250px"
          rotateAmplitude={14}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="px-1 py-2 bg-gray-900/30 backdrop-blur-2xl text-white rounded-full font-semibold text-sm ">
              Vishal Patil - Developer
            </p>
          }
        />

        <motion.div
          className="w-full h-1/2 md:w-[35vw] md:h-fit flex flex-col gap-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
        >
          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.55 }}
          >
            Hello, my name is{" "}
            <span className="font-semibold">Vishal Patil.</span> I’m a{" "}
            <span className="font-semibold">web</span> and{" "}
            <span className="font-semibold">full-stack developer</span>{" "}
            dedicated to creating sleek, high-performance websites and
            applications. I combine clean code with intuitive design to deliver
            seamless user experiences. I enjoy transforming concepts into real,
            polished digital products that truly work.
          </motion.p>

          {/* Button */}
          <motion.button
            onClick={() => navigate("/resume")}
            className="w-fit h-fit px-4 py-2 self-center md:self-start font-semibold bg-yellow-300 text-black rounded-full cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.8,
            }}
          >
            View Resume
          </motion.button>
        </motion.div>
      </div>
      <div className="w-1/3 self-center md:self-end h-full ">
        <CircularText
          text="VISHAL*DEV*FREELANCER*"
          onHover="speedUp"
          spinDuration={21}
          className="custom-class"
        />
      </div>
    </div>
  );
}

export default Hero;
