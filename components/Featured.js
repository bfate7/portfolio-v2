import React from "react";
import Featuredproject from "./FeaturedProject";
import { featured_projects } from "../data/projects";

const Featured = () => {
  return (
    <div className='py-14 md:py-'>
      <h1 className='text-secondary text-5xl mt-14'>Featured Projects</h1>

      {featured_projects &&
        featured_projects.map((project, i) => (
          <Featuredproject
            title={project.title}
            discriptionRight={i % 2 === 0}
            description={project.description}
            technologies={project.technologies}
            image={project.image}
            github_url={project.github_url}
            production_url={project.production_url}
            key={project.title}
          />
        ))}
    </div>
  );
};

export default Featured;
