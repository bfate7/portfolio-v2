const About = () => {
  return (
    <div className='mt-8'>
      <h1 className='text-green-400 text-5xl'>About Me</h1>

      <div className='bg-gradient-to-br from-purple-400 to-green-400  dark:from-gray-800 dark:to-gray-800  dark:border-0 dark:bg-gray-800 shadow-lg rounded-lg px-3 py-5 md:flex mt-6'>
        <p className='p-3 text-gray-100 dark:text-gray-300 text-xl xl:text-2xl text-justify'>
          Hello I’m{" "}
          <span className=' text-gray-800 dark:text-green-400'>Fateh</span>, a
          full Stack Web Developer based in Algiers, Algeria. I enjoy creating
          things for the web, whether that be websites, web applications, or
          anything in between. My goal is to always build products that provide
          performance, good looking and enjoyable experience.
        </p>
      </div>
    </div>
  );
};

export default About;
