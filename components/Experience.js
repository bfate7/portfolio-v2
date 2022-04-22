import React from "react";
import Timeline from "./Timeline";
import experience from "../data/experience";

const Experience = () => {
  return (
    <>
      <h1 className='text-secondary text-5xl  mt-14 pb-20'>Experience</h1>

      <Timeline experiences={experience} />
    </>
  );
};

export default Experience;
