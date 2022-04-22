import { FiGithub, FiExternalLink, FiStar } from "react-icons/fi";
const ArchiveTable = ({ projects }) => {
  return (
    <table className='w-full mt-12' cellPadding='3'>
      <thead>
        <tr className='text-left text-primary-lighten-3 '>
          <th></th>
          <th className='w-16 py-5 text-center px-5'>Year</th>
          <th>Title</th>
          <th className='hidden md:table-cell'>Type</th>
          <th className='hidden md:table-cell'>Technologies</th>
          <th className=''>Link</th>
        </tr>
      </thead>

      <tbody className='mt-28'>
        {projects &&
          projects.map(project => (
            <tr
              className='h-10 hover:bg-gray-200 dark:hover:bg-primary-lighten-1 cursor-pointer'
              key={project.title}
            >
              <td>
                {project.featured && (
                  <FiStar className='dark:text-secondary ' fill='true' />
                )}
              </td>

              <td className='text-primary-lighten-3 py-5 text-center px-5'>
                {project.year}
              </td>

              <td className='dark:text-primary-lighten-3 pr-5'>
                {project.title}
              </td>
              <td className='text-primary-lighten-2 pr-5 hidden md:table-cell'>
                {project.type}
              </td>
              <td className='text-primary-lighten-2 pr-5 hidden md:table-cell'>
                {project.technologies && project.technologies.join(" - ")}
              </td>
              <td className='text-primary-lighten-2'>
                <div className='flex gap-4'>
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      className='text-gray-400 hover:text-secondary'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <FiGithub fontSize='1.2em' />
                    </a>
                  )}
                  {project.production_url && (
                    <a
                      href={project.production_url}
                      className='text-gray-400 hover:text-secondary'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <FiExternalLink fontSize='1.2em' />
                    </a>
                  )}
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default ArchiveTable;
