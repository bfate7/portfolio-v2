const Timeline = ({ experiences = [] }) => {
  return (
    <ol className='relative border-l border-gray-200 dark:border-gray-700'>
      {experiences.map((experience, i) => (
        <li key={i} className='mb-10 ml-4'>
          <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
          <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            {experience.duration}
          </time>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
            {experience.job}{" "}
            {experience.employee && (
              <span className='text-secondary'>
                {" "}
                {`@ ${experience.employee}`}{" "}
              </span>
            )}
          </h3>
          <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
            <ul className='list-disc ml-5'>
              {experience.missions?.map((mission, i) => (
                <li key={i}>{mission}</li>
              ))}
            </ul>
          </p>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
