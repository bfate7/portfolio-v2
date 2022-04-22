import About from "../components/About";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <>
      <div className='pt-60' id='about'>
        <Hero />
      </div>
      <div className='mt-20'>
        <About />
      </div>

      <div className='py-40' id='experience'>
        <Experience />
      </div>

      <div className='py-40' id='skills'>
        <Skills />
      </div>

      <div className='pt-20' id='projects'>
        <Featured />
      </div>
      <div className='pt-20'>
        <Projects />
      </div>

      <div className='pt-20' id='contact'>
        <Contact />
      </div>
      <Footer />
    </>
  );
}
