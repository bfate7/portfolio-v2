import React, { useState, useEffect, useCallback } from "react";
import ThemeSwitch from "./ThemeSwitch";
import BaseNavLink from "./BaseNavLink";
import { scroller } from "react-scroll";
import HamburgerMenu from "./HamburgerMenu";

const NavBar = () => {
  const [pos, setPos] = useState(0);
  const [windowWidth, setWindowWidth] = useState();
  const [side, setSide] = useState(false);

  useEffect(() => {
    if (windowWidth > 768) {
      setSide(false);
    }
  }, [windowWidth]);

  const handleScroll = useCallback(e => {
    const newPos = window.pageYOffset;
    setPos(newPos);
  }, []);

  const handleResize = useCallback(e => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize, handleScroll]);

  useEffect(() => {
    if (location.hash) {
      const to = location.hash.split("#")[1];

      scroller.scrollTo(to, {
        duration: 1000,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, []);

  //scrollSpy
  const NavLinks = useCallback(
    () => (
      <>
        <BaseNavLink to='about'>About</BaseNavLink>
        <BaseNavLink to='experience'>Experience</BaseNavLink>
        <BaseNavLink to='skills'>Skills</BaseNavLink>
        <BaseNavLink to='projects'>Projects</BaseNavLink>
        <BaseNavLink to='contact'>Contact</BaseNavLink>
      </>
    ),
    []
  );

  return (
    <div
      className={`w-full h-16 bg-light dark:bg-primary z-50 nav-slide-in fixed shadow-lg 
   
      ${pos === 0 ? "shadow-none" : ""}`}
    >
      <div
        className={`h-screen w-full  absolute right-0 ${
          side ? "block" : "hidden"
        }`}
      >
        <div
          className='h-full w-8/12 absolute right-0 bg-gradient-to-b from-light to-primary-lighten-3 dark:from-primary-lighten dark:to-primary'
          style={{ filter: "blur(0)" }}
        >
          <div className='flex flex-col items-center  gap-10 mt-16'>
            <NavLinks />
            <ThemeSwitch />
          </div>
        </div>
      </div>

      <div className='flex justify-end items-center md:hidden h-full mr-5'>
        <HamburgerMenu opened={side} toggle={() => setSide(!side)} />
      </div>
      <div className='hidden md:flex justify-between items-center h-full mr-14 gap-10 transition delay-1000 font-mono  text-sm'>
        <div className='flex items-center h-full ml-5'>
          <ThemeSwitch />
        </div>

        <div className='md:w-8/12 flex justify-end gap-6'>
          <NavLinks />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
