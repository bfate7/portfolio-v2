import React from "react";

const Footer = () => {
  return (
    <div className='h-20 w-full mt-6  flex flex-col justify-center items-center '>
      <h2 className='text-center text-sm text-gray-500 darktext-gray-300 font-light'>
        Made with Next & tailwind.css
      </h2>

      <h2 className='text-center text-sm text-gray-500 darktext-gray-300 font-light'>
        Design Inspired from{" "}
        <a
          href='https://brittanychiang.com/'
          target='_blank'
          rel='noreferrer'
          className='text-green-400 hover:underline'
        >
          brittanychiang.com
        </a>
      </h2>
    </div>
  );
};

export default Footer;
