import React from "react";
import contact from "../data/contact";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      <motion.h1
        className='text-4xl lg:text-7xl font-bold  text-primary-lighten-1 dark:text-primary-lighten-3'
        animate={{ y: [100, 0] }}
      >
        Hi, I am Fateh.
      </motion.h1>

      <motion.h1
        className='text-2xl lg:text-5xl font-bold text-primary-lighten-2 dark:text-primary-lighten-2 mt-5'
        animate={{ y: [100, 0] }}
        transition={{ delay: 0.05 }}
      >
        I build things for the web.
      </motion.h1>
      <motion.h2
        className='text-xl text-gray-500 mt-5'
        animate={{ opacity: [0, 1], y: [50, 0] }}
        transition={{ delay: 0.3 }}
      >
        I &apos; m Full Stack Web Developer.
      </motion.h2>

      <motion.a
        href={`mailto:${contact.email}`}
        animate={{ opacity: [0, 1] }}
        transition={{ delay: 1.5 }}
      >
        <button className='mt-10 border border-secondary rounded-sm px-4 py-2 hover:bg-secondary hover:text-white text-secondary'>
          Get In Touch
        </button>
      </motion.a>
    </div>
  );
};

export default Hero;
