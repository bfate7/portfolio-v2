import React from "react";
import { useRouter } from "next/router";
import { Link } from "react-scroll";

const BaseNavLink = ({ to, active, children }) => {
  const router = useRouter();
  return (
    <Link
      to={to}
      className={` cursor-pointer text-gray-500`}
      smooth
      onClick={() => router.push("/#" + to)}
      spy
      activeClass='dark:text-gray-200 text-red-500" underline'
    >
      {children}
    </Link>
  );
};

export default BaseNavLink;
