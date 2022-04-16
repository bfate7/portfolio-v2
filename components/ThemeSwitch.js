import React, { useContext } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { ThemeContext } from "../context/ThemeContext";

const TemeSwitch = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className='flex justify-center items-center gap-2'>
      <FiSun
        fontSize='1.5em'
        className={darkTheme ? "text-gray-400" : "text-gray-900"}
        fill={!darkTheme ? "#111827" : "none"}
      />
      <label htmlFor='toogleA' className='flex items-center cursor-pointer'>
        <div className='relative'>
          <input
            id='toogleA'
            type='checkbox'
            className='hidden'
            onChange={toggleTheme}
            checked={darkTheme}
          />

          <div className='toggle__line w-8 h-3 bg-gray-400 rounded-full shadow-inner'></div>

          <div className='toggle__dot absolute w-4 h-4 bg-white rounded-full shadow inset-y-0 left-0'></div>
        </div>
      </label>
      <FiMoon
        fontSize='1.5em'
        className={darkTheme ? "text-green-400" : "text-gray-400"}
        fill={darkTheme ? "#34D399" : "#F3F4F6"}
      />
    </div>
  );
};

export default TemeSwitch;
