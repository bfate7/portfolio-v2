// import Image from "next/image";

const About = () => {
  return (
    <div className='mt-8'>
      <h1 className='text-secondary text-5xl'>About Me</h1>
      <figure className='md:flex rounded-xl p-8 md:p-0  shadow-lg dark:bg-slate-800 mt-10  border-l-8 border-l-primary dark:border-l-secondary'>
        {/* <Image
          className='w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto'
          src='/sarah-dayan.jpg'
          alt=''
          height={"100%"}
          width={"150%"}
        /> */}
        <div className='pt-6 md:p-8 text-center md:text-left space-y-4'>
          <blockquote>
            <p className='text-lg font-medium text-gray-600 dark:text-gray-200'>
              Full Stack Web Developer based in Algiers, Algeria. I enjoy
              creating things for the web, whether that be websites, web
              applications, or anything in between. My goal is to always build
              products that provide performance, good looking and enjoyable
              experience.
            </p>
          </blockquote>
          <figcaption className='font-medium'>
            <div className='text-primary-lighten-2 dark:text-primary-lighten'>
              Junior Full Stack Developer, DevTeam
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default About;
