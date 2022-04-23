import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import classNames from "classnames";

const Featuredproject = ({
  discriptionRight,
  title,
  description,
  github_url,
  production_url,
  technologies,
  image,
}) => {
  const imgWrapperClasses = classNames({
    "row-start-1 row-span-1 z-10": true,
    "col-start-1 col-span-12  md:col-start-1 md:col-span-6": discriptionRight,
    "col-start-1 col-span-12  md:col-start-7 md:col-span-6": !discriptionRight,
  });

  const descriptionClasses = classNames({
    "row-start-1 row-span-1 bg-gray-100 bg-opacity-90  dark:bg-gray-900 md:dark:bg-none md:dark:bg-opacity-0 dark:bg-opacity-90  md:bg-none md:bg-opacity-0 p-3 z-20 ": true,
    "col-start-1 md:col-start-6  col-span-12 md:col-span-7 text-right":
      discriptionRight,
    "col-start-1 md:col-start-1  col-span-12 md:col-span-7": !discriptionRight,
  });

  const linksClasses = classNames({
    "dark:text-primary-lighten-3 flex gap-4 mt-3": true,
    "justify-end": discriptionRight,
  });

  const technologiesClasses = classNames({
    "flex text-primary-lighten-3 flex-wrap  gap-5 py-5 text-md": true,
    "justify-end": discriptionRight,
    "justify-start": !discriptionRight,
  });

  const renderImage = image => (
    <img
      src={`/images/${image}`}
      alt='project preview'
      height={"500"}
      width={"800"}
    />
  );

  return (
    <div className='grid grid-cols-12 grid-rows-1 mt-20'>
      <div className={descriptionClasses}>
        <h1 className='text-secondary'>Featured Project</h1>
        <h1 className=' dark:text-primary-lighten-2 text-primary-lighten-1 font-bold text-xl '>
          {title && title}
        </h1>

        <p className='py-5 md:p-5 w-full md:bg-light border border-primary-lighten-4 dark:bg-transparent text-gray-600   dark:text-gray-300 md:dark:text-gray-400  md:dark:bg-gray-800  md:shadow-lg rounded-md mt-5 md:hover:shadow-2xl transition-all text-justify p-5'>
          {description && description}
        </p>

        <div className={technologiesClasses}>
          {technologies &&
            technologies.map((technology, i) =>
              i !== technologies.length - 1 ? (
                <span key={technology}> {technology} </span>
              ) : (
                <span key={technology}> {technology} </span>
              )
            )}
        </div>

        <div className={linksClasses}>
          {github_url && (
            <a href={github_url} target='_blank' rel='noreferrer'>
              <FiGithub className='hover:text-green-400' />
            </a>
          )}

          {production_url && (
            <a href={production_url} target='_blank' rel='noreferrer'>
              <FiExternalLink className='hover:text-green-400' />
            </a>
          )}
        </div>
      </div>

      <div className={imgWrapperClasses}> {renderImage(image)}</div>
    </div>
  );
};

export default Featuredproject;
