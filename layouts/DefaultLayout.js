import React, { useContext } from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import SideLinks from "../components/SideLinks";
import { ThemeContext } from "../context/ThemeContext";

const DefaultLayout = ({ children }) => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <>
      <Head>
        <title>B.Fate7</title>
      </Head>
      <div
        className={`min-h-screen  ${
          darkTheme ? "dark bg-primary" : "bg-light"
        }`}
      >
        {" "}
        <NavBar />
        <SideLinks />
        <div className='w-10/12 lg:w-8/12 xl:w-6/10 mx-auto container'>
          {children}
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
