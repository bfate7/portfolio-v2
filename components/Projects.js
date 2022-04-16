import React from "react";
import Link from "next/link";
import Project from "./Project";

//data
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <div className='mt-40'>
      <h1 className='dark:text-gray-300 font-bold text-2xl text-center'>
        Other Projects
      </h1>

      <div className='flex justify-center mt-5'>
        <Link href={"/archive"} passHref>
          <button className='text-center text-green-400 py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md'>
            View Archive
          </button>
        </Link>
      </div>

      <div className='gap-3 mt-5 grid  md:grid-cols-2 xl:grid-cols-3'>
        {projects.length === 0 && (
          <h1 className='text-gray-200'>No projects to show.</h1>
        )}

        {projects.length > 0 &&
          projects.map(project => (
            <Project
              title={project.title}
              description={project.description}
              github_url={project.github_url}
              production_url={project.production_url}
              technologies={project.technologies}
              tags={project.tags}
              key={project.title}
            />
          ))}
      </div>
    </div>
  );
};

export default Projects;
