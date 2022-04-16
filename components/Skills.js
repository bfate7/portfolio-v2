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
  SiVuetify,
  SiBootstrap,
  SiMaterialui,
  SiElectron,
  SiGit,
  SiGithub,
  SiMysql,
  SiSqlite,
  SiMongodb,
} from "react-icons/si";

const Card = ({ title, children }) => (
  <div className='p-5  transition-colors rounded-md mt-10'>
    <h1 className='text-gray-500 text-xl mb-5 text-center'>{title}</h1>
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
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <Card title={"Programing Languages"}>
          <CardBody>
            <SiJavascript className='text-5xl text-gray-400' />
            <SiTypescript className='text-5xl text-gray-400' />
            <SiPython className='text-5xl text-gray-400' />
            <SiPhp className='text-5xl text-gray-400' />
          </CardBody>
        </Card>

        <Card title={"Backend Framworks"}>
          <CardBody>
            <SiNodedotjs className='text-5xl text-gray-400' />
            <SiFlask className='text-5xl text-gray-400' />
            <SiLaravel className='text-5xl text-gray-400' />
          </CardBody>
        </Card>

        <Card title={"Frontend Framworks"}>
          <CardBody>
            <SiReact className='text-5xl text-gray-400' />
            <SiVuedotjs className='text-5xl text-gray-400' />
          </CardBody>
        </Card>

        <Card title={"Desktop Framworks"}>
          <CardBody>
            <SiElectron className='text-5xl text-gray-400' />
          </CardBody>
        </Card>

        <Card title={"Tools"}>
          <CardBody>
            <SiGit className='text-5xl text-gray-400' />
            <SiGithub className='text-5xl text-gray-400' />
          </CardBody>
        </Card>

        <Card title={"Databases"}>
          <CardBody>
            <SiMysql className='text-5xl text-gray-400' />
            <SiSqlite className='text-5xl text-gray-400' />
            <SiMongodb className='text-5xl text-gray-400' />
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Skills;
