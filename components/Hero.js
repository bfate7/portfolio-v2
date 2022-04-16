import React from "react";
import contact from "../data/contact";

const Hero = () => {
  return (
    <div>
      <h1 className='text-4xl lg:text-7xl font-bold  text-gray-900 dark:text-gray-300'>
        Hi, I am Fateh.
      </h1>

      <h1 className='text-2xl lg:text-5xl font-bold text-gray-600 dark:text-gray-400 mt-5'>
        I build things for the web.
      </h1>
      <h2 className='text-xl text-gray-500 mt-5'>
        I &apos; m Full Stack Web Developer.
      </h2>

      <a href={`mailto:${contact.email}`}>
        <button className='mt-10 border border-green-400 rounded-sm px-4 py-2 hover:bg-green-400 hover:text-gray-100 text-green-400'>
          Get In Touch
        </button>
      </a>
    </div>
  );
};

export default Hero;
