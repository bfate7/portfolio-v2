import React from "react";
import { FiGithub, FiLinkedin, FiFacebook, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import contact_links from "../data/contact";

const Contact = () => {
  return (
    <div className='py-44 md:py-80'>
      <div className='text-center text-gray-500'>
        <h1 className='text-3xl md:text-7xl font-bold'>Get In touch</h1>
        <p className='md:w-8/12 mx-auto mt-10 text-lg'>
          I &apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I &apos; ll
          try my best to get back to you!
        </p>
        <a href={`mailto:${contact_links.email}`}>
          <button className='mt-10 border border-green-400 rounded-sm px-8 py-4 hover:bg-green-400 hover:text-gray-100 text-green-400'>
            Say Hello
          </button>
        </a>
      </div>

      <div className='flex md:hidden justify-center gap-5 mt-20'>
        <motion.a
          href={`mailto:${contact_links.email}`}
          whileHover={{ scale: 1.2 }}
        >
          <FiMail
            fontSize='2em'
            className='text-green-400 hover:text-green-200 cursor-pointer'
          />
        </motion.a>

        <motion.a
          href={contact_links.facebook}
          target='_blank'
          rel='noreferrer'
          whileHover={{ scale: 1.2 }}
        >
          <FiFacebook
            fontSize='2em'
            className='text-green-400 hover:text-green-200 cursor-pointer'
          />
        </motion.a>

        <motion.a
          href={contact_links.github}
          target='_blank'
          rel='noreferrer'
          whileHover={{ scale: 1.2 }}
        >
          <FiGithub
            fontSize='2em'
            className='text-green-400 hover:text-green-200 cursor-pointer'
          />
        </motion.a>
        <motion.a
          href={contact_links.linkdin}
          target='_blank'
          rel='noreferrer'
          whileHover={{ scale: 1.2 }}
        >
          <FiLinkedin
            fontSize='2em'
            className='text-green-400 hover:text-green-200 cursor-pointer'
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
