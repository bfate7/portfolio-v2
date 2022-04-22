import Link from "next/link";

const ArchiveHeader = () => {
  return (
    <>
      <h1 className='text-primary-lighten-1 dark:text-primary-lighten-3 text-7xl pt-32'>
        Archive
      </h1>
      <h2 className='text-primary-lighten-2 mt-5'>
        a List of Projects I &apos; ve build
      </h2>
      <Link href='/' passHref>
        <button className='text-center text-secondary underline mt-5'>
          Back to Home
        </button>
      </Link>
    </>
  );
};

export default ArchiveHeader;
