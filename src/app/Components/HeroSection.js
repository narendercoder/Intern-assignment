"use client";
import React from "react";
// animation
import { motion } from "framer-motion";
import { fadeIn } from "../Config/varients";

const HeroSection = () => {
  return (
    <div className="hero-banner relative flex justify-center items-center w-screen h-full overflow-x-hidden">
      <div className="custom-container !max-w-[1200px] flex justify-center items-center w-full h-full pt-20">
        <div className=" w-full h-full flex justify-between">
          <div className="banner-content relative text-center flex justify-center items-center w-full lg:text-left lg:w-1/2 z-[1]">
           <div className="custom-container">
           <motion.h1
              variants={fadeIn("up", 0.1, 1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="title capitalize text-6xl font-bold mb-4"
            >
              Make the Best financial decision
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.2, 1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="text-black text-lg mb-7"
            >
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </motion.p>
            <div className="flex justify-center lg:justify-start items-center">
              <motion.button
              variants={fadeIn("up", 0.3, 1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
               className="btn text-white bg-black px-3 py-3 h-[60px] w-[180px] text-lg flex justify-center items-center rounded-md mr-5">
                Get Started{" "}
                <span>
                  <img src="/arrow-right.png" loading="lazy" decoding="async" alt="" className="ml-3" />
                </span>
              </motion.button>
              <motion.button
              variants={fadeIn("up", 0.4, 1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
               className="btn text-black  px-3 py-3 h-[60px] w-[180px] text-lg flex justify-center items-center rounded-md">
                <span>
                  <img src="/video-icon.png" loading="lazy" decoding="async" alt="" className="mr-3" />
                </span>
                Watch Video
              </motion.button>
            </div>
            <motion.div
            variants={fadeIn("up", 0.5, 1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
             className="w-full">
              <img src="/hero-2.png" loading="lazy" decoding="async" alt="" />
            </motion.div>
            <motion.div
             variants={fadeIn("up", 0.5, 1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
             className="shape absolute left-0 top-[-100px] -z-[1]">
              <img src="shape-1.png" loading="lazy" decoding="async" alt="" />
            </motion.div>
           </div>
          </div>
          <div className="banner-thumbnail hidden lg:inline w-1/2 relative z-[1]">
            <motion.div
              variants={fadeIn("left", 0.5, 1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="relative h-full"
            >
              <img
                src="/iphone-13-Pro-Front-2.png"
                alt=""
                loading="lazy" decoding="async"
                className="absolute z-[100] left-0 top-[-100px]"
              />
              <img
                src="/iphone-13-Pro-Front-1.png"
                alt=""
                loading="lazy" decoding="async"
                className="absolute z-[99] left-[120px] top-[-15px]"
              />
              <img
                src="/iphone-13-Pro-Front.png"
                alt=""
                loading="lazy" decoding="async"
                className="absolute z-[98] left-[240px] top-[50px]"
              />
              <img
                src="/shape-3.png"
                alt=""
                loading="lazy" decoding="async"
                className="absolute z-[97] left-[80px] top-[-100px]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
