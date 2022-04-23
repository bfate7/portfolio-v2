import React from "react";

import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiPhp,
  SiNodedotjs,
  SiFlask,
  SiLaravel,
  SiReact,
  SiVuedotjs,
  SiElectron,
  SiGit,
  SiGithub,
  SiMysql,
  SiSqlite,
  SiMongodb,
} from "react-icons/si";

const Card = ({ title, children }) => (
  <div className='py-10 px-5 transition-colors rounded-md mt-10 shadow-md border dark:border-light border-primary-lighten-3'>
    <h1 className='text-primary-lighten-2 font-bold dark:text-primary-lighten-3 text-lg text-center mb-5'>
      {title}
    </h1>
    {children}
  </div>
);

const CardBody = ({ children }) => (
  <div className='flex justify-center gap-10 mt-10'>{children}</div>
);
const Skills = () => {
  return (
    <>
      <h1 className='text-secondary text-5xl mt-14'>Skills</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        <Card title={"Programing Languages"}>
          <CardBody>
            <SiJavascript className='text-5xl text-primary-lighten-2' />
            <SiTypescript className='text-5xl text-primary-lighten-2' />
            <SiPython className='text-5xl text-primary-lighten-2' />
            <SiPhp className='text-5xl text-primary-lighten-2' />
          </CardBody>
        </Card>

        <Card title={"Backend Framworks"}>
          <CardBody>
            <SiNodedotjs className='text-5xl text-primary-lighten-2' />
            <SiFlask className='text-5xl text-primary-lighten-2' />
            <SiLaravel className='text-5xl text-primary-lighten-2' />
          </CardBody>
        </Card>

        <Card title={"Frontend Framworks"}>
          <CardBody>
            <SiReact className='text-5xl text-primary-lighten-2' />
            <SiVuedotjs className='text-5xl text-primary-lighten-2' />
          </CardBody>
        </Card>

        <Card title={"Desktop Framworks"}>
          <CardBody>
            <SiElectron className='text-5xl text-primary-lighten-2' />
          </CardBody>
        </Card>

        <Card title={"Tools"}>
          <CardBody>
            <SiGit className='text-5xl text-primary-lighten-2' />
            <SiGithub className='text-5xl text-primary-lighten-2' />
          </CardBody>
        </Card>

        <Card title={"Databases"}>
          <CardBody>
            <SiMysql className='text-5xl text-primary-lighten-2' />
            <SiSqlite className='text-5xl text-primary-lighten-2' />
            <SiMongodb className='text-5xl text-primary-lighten-2' />
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Skills;
