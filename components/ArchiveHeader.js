import Link from "next/link";

const ArchiveHeader = () => {
  return (
    <>
      <h1 className='text-gray-700 dark:text-gray-200 text-7xl pt-32'>
        Archive
      </h1>
      <h2 className='text-primary-dark-theme mt-5'>
        a List of Projects I &apos; ve build
      </h2>
      <Link href='/' passHref>
        <button className='text-center text-green-400 underline mt-5'>
          Back to Home
        </button>
      </Link>
    </>
  );
};

export default ArchiveHeader;
