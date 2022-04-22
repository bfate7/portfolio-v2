import React from "react";
import { FiMail, FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";
import contact from "../data/contact";

const SideLinks = () => {
  return (
    <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 1 }}>
      <div className='fixed left-4 top-0  w-12 h-full py-4 items-end hidden md:flex'>
        <div className='h-full w-full flex gap-4 flex-col justify-center items-center overflow-hidden line-before line-after'>
          <h1
            className='text-secondary'
            style={{
              writingMode: "sideways-rl",
              WebkitWritingMode: "vertical-lr",
            }}
          >
            fateh.developer@gmail.com
          </h1>
        </div>
      </div>
      <div className='fixed right-4 top-0  w-12 h-full py-4 items-end hidden md:flex'>
        <div className='h-full w-full flex gap-4 flex-col justify-center items-center overflow-hidden line-before line-after'>
          <motion.a
            href={`mailto:${contact.email}`}
            whileHover={{ scale: 1.2 }}
          >
            <FiMail
              fontSize='2em'
              className='text-secondary hover:text-secondary-lighten-1 cursor-pointer'
            />
          </motion.a>

          <motion.a
            href={contact.facebook}
            target='_blank'
            rel='noreferrer'
            whileHover={{ scale: 1.2 }}
          >
            <FiFacebook
              fontSize='2em'
              className='text-secondary hover:text-secondary-lighten-1 cursor-pointer'
            />
          </motion.a>

          <motion.a
            href={contact.github}
            target='_blank'
            rel='noreferrer'
            whileHover={{ scale: 1.2 }}
          >
            <FiGithub
              fontSize='2em'
              className='text-secondary hover:text-secondary-lighten-1 cursor-pointer'
            />
          </motion.a>
          <motion.a
            href={contact.linkdin}
            target='_blank'
            rel='noreferrer'
            whileHover={{ scale: 1.2 }}
          >
            <FiLinkedin
              fontSize='2em'
              className='text-secondary hover:text-secondary-lighten-1 cursor-pointer'
            />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default SideLinks;
