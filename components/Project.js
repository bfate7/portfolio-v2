import React from "react";
import { FiExternalLink, FiFolder, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

const Project = ({
  title,
  description,
  github_url,
  production_url,
  technologies,
}) => {
  return (
    <motion.div
      className='border dark:border-0 dark:bg-primary-lighten-1 p-5  md:p-8 mt-3 shadow-lg flex flex-col  rounded-sm min-w-[250px]'
      whileHover={{ y: -10 }}
    >
      <div className='flex justify-between items-center'>
        <FiFolder
          className='inline mb-1 pr-2 text-green-400'
          fontSize='3em'
          fontWeight='100'
          fontVariant='300'
        />

        <div className='flex  gap-4'>
          {github_url && (
            <a
              href={github_url}
              className='text-gray-400 hover:text-green-300'
              target='_blank'
              rel='noreferrer'
            >
              <FiGithub fontSize='1.2em' />
            </a>
          )}

          {production_url && (
            <a
              href={production_url}
              className='text-gray-400 hover:text-green-300'
              target='_blank'
              rel='noreferrer'
            >
              <FiExternalLink fontSize='1.2em' />
            </a>
          )}
        </div>
      </div>

      <h1 className='text-lg mt-3  md:mt-5 dark:text-secondary text-primary-lighten-2 font-bold'>
        {title && title}
      </h1>
      <div className='flex flex-col justify-between h-full mt-5 text-primary-lighten-2 text-justify'>
        <p className='self-start'>{description && description}</p>

        <div className='flex text-gray-500 flex-wrap  gap-5  py-5 text-sm'>
          {technologies &&
            technologies.map((technology, i) =>
              i !== technologies.length - 1 ? (
                <span key={technology}> {technology} </span>
              ) : (
                <span key={technology}> {technology} </span>
              )
            )}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
