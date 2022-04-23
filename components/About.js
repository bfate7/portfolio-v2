import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className='mt-8'
      animate={{ opacity: [0, 1] }}
      transition={{ delay: 1 }}
    >
      <h1 className='text-secondary text-5xl'>About Me</h1>
      <figure className='md:flex rounded-xl p-8 md:p-0  shadow-lg dark:bg-slate-800 mt-10  border-l-8 border-l-primary dark:border-l-secondary'>
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
            <div className='text-primary-lighten-3'>
              Junior Full Stack Developer, DevTeam
            </div>
          </figcaption>
        </div>
      </figure>
    </motion.div>
  );
};

export default About;
