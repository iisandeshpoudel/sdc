import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import ReactCountryFlag from "react-country-flag";
import heroImage from "../assets/hero.svg";

const Hero = () => {
  const countries = [
    // Main big ones (center-ish)
    {
      code: "US",
      name: "USA",
      size: 3.2,
      delay: 0.1,
      position: { x: 35, y: 60 },
    },
    {
      code: "AU",
      name: "Australia",
      size: 3.2,
      delay: 0.3,
      position: { x: 55, y: 50 },
    },
    {
      code: "CA",
      name: "Canada",
      size: 3.2,
      delay: 0.5,
      position: { x: 45, y: 25 },
    },
    {
      code: "GB",
      name: "UK",
      size: 2.5,
      delay: 0.2,
      position: { x: 50, y: 20 },
    },

    // Medium ones (spread around edges)
    {
      code: "FR",
      name: "France",
      size: 2.5,
      delay: 0.4,
      position: { x: 20, y: 65 },
    },
    {
      code: "NZ",
      name: "New Zealand",
      size: 2.3,
      delay: 0.6,
      position: { x: 75, y: 20 },
    },
    {
      code: "MT",
      name: "Malta",
      size: 2.4,
      delay: 1.2,
      position: { x: 25, y: 40 },
    },

    // Duplicates for filling space
    {
      code: "GB",
      name: "UK",
      size: 2.2,
      delay: 1.4,
      position: { x: 10, y: 80 },
    },
    {
      code: "FR",
      name: "France",
      size: 2.2,
      delay: 1.6,
      position: { x: 85, y: 75 },
    },
    {
      code: "CA",
      name: "Canada",
      size: 3.2,
      delay: 0.5,
      position: { x: 50, y: 70 },
    },
    {
      code: "MT",
      name: "Malta",
      size: 2.4,
      delay: 1.2,
      position: { x: 5, y: 90 },
    },
    {
      code: "GB",
      name: "UK",
      size: 2.5,
      delay: 0.2,
      position: { x: 30, y: 100 },
    },
    {
      code: "FR",
      name: "France",
      size: 2.5,
      delay: 0.4,
      position: { x: 10, y: 20 },
    },
  ];

  return (
    <section className="relative flex min-h-screen items-center justify-between overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 px-4 md:px-8 lg:px-24">
      {/* Floating country flags - blue with subtle yellow accent */}
      {countries.map((country, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50, x: 0 }}
          animate={{
            opacity: [0, 1, 0.8, 0],
            y: [50, -100, -200],
            x: [0, Math.random() * 30 - 15, Math.random() * 30 - 15],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            delay: country.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className={`absolute z-0 text-${country.size}`}
          style={{
            left: `${country.position.x}%`,
            top: `${country.position.y}%`,
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
          }}
        >
          <ReactCountryFlag
            countryCode={country.code}
            svg
            className="rounded-full border-2 border-blue-200 bg-white"
            style={{
              width: "2.3em",
              height: "2.3em",
            }}
            title={country.name}
          />
        </motion.div>
      ))}

      {/* Left-aligned content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full md:w-1/2 py-12 md:py-24"
      >
        {/* Tagline - blue with subtle yellow accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-4 flex items-center gap-3"
        >
          <div className="h-1 w-8 bg-blue-400"></div>
          <span className="font-text text-sm font-medium tracking-wider text-blue-600">
            STUDY DESTINATION CENTER
          </span>
        </motion.div>

        {/* Main headline - blue dominant with slight yellow accent */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6 text-3xl font-heading font-bold leading-tight text-blue-900 sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl"
        >
          Study Abroad with <br />
          <span className="text-blue-600 relative">
            Confidence
            <span className="absolute bottom-0 left-0 h-1 w-full bg-yellow-400"></span>
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="font-text mb-8 max-w-md text-base md:text-lg text-blue-700"
        >
          Premier consulting for international students seeking admission to
          top-tier universities worldwide.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/+9779849209558?text=Hello%2C%20I%27m%20interested%20in%20a%20consultation."
            className="font-text group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3 text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:gap-3 hover:from-blue-600 hover:to-blue-400 w-auto"
          >
            <span className="whitespace-nowrap">Begin your journey</span>
            <FiArrowRight className="transition-all duration-300 group-hover:rotate-45 group-hover:text-yellow-200" />
          </a>
        </motion.div>

        {/* Stats bar - blue with yellow accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 md:mt-16 flex gap-6 md:gap-8"
        >
          <div className="border-l-2 border-blue-400 pl-3 md:pl-4">
            <p className="text-xl md:text-2xl font-bold text-blue-800">50+</p>
            <p className="font-text text-xs md:text-sm text-blue-600">
              Universities
            </p>
          </div>
          <div className="border-l-2 border-blue-400 pl-3 md:pl-4">
            <p className="text-xl md:text-2xl font-bold text-blue-800">1K+</p>
            <p className="font-text text-xs md:text-sm text-blue-600">
              Students
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Right side image container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="hidden md:block relative w-1/2 h-full"
      >
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <div className="relative h-[400px] w-[400px] lg:h-[500px] lg:w-[500px] xl:h-[600px] xl:w-[600px] rounded-full p-8 lg:p-12 xl:p-16 shadow-2xl bg-blue-50">
            <img
              src={heroImage}
              alt="Students studying abroad"
              className=""
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Rotating circle with subtle yellow accent */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[500px] w-[500px] lg:h-[600px] lg:w-[600px] xl:h-[750px] xl:w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[15px] lg:border-[20px] xl:border-[25px] border-blue-200/20"
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-0 top-0 h-24 w-24 lg:h-32 lg:w-32 xl:h-40 xl:w-40 rounded-full bg-blue-100/30 shadow-lg"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute right-0 bottom-0 h-20 w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 rounded-full bg-yellow-100/30 shadow-lg"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
