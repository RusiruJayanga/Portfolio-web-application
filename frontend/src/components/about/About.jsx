import React, { useEffect, useRef, useLayoutEffect, use } from "react";
//GSAP animation
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
let mm = gsap.matchMedia();

const About = () => {
  //GSAP animation
  const aboutRef = useRef(null);
  const aboutProfileConRef = useRef(null);
  const aboutProfileRef = useRef(null);
  const aboutGalleryRef = useRef(null);
  const aboutNameRef = useRef(null);
  const aboutContentRef = useRef(null);

  useLayoutEffect(() => {
  if (!aboutRef.current) return;

    const tl = gsap.timeline({
    scrollTrigger: {
      trigger: aboutProfileConRef.current,
      start: "top 50%",
      end: "top 20%",
      scrub: 1,
    },
  });

  tl.fromTo(
    aboutProfileConRef.current,
    {
      width: "50%",
    },
    {
      width: "100%",
    }
  );

  tl.fromTo(
    aboutProfileRef.current, 
  { xPercent: 0,

  } , {
    xPercent: 0,
  }
 );

  tl.fromTo(
    aboutNameRef.current,
    { xPercent: -100,
      opacity: 0,
     },
    {
      xPercent: 0,
      opacity: 1,
    },
  );

  tl.fromTo(
    aboutGalleryRef.current,
    { xPercent: -100,
      opacity: 0,
     },
    {
      xPercent: 0,
      opacity: 1,
    },
  );

  tl.fromTo(
    aboutContentRef.current,
    { 
      yPercent: -100,
      opacity: 0,
     },
    {
      yPercent: 0,
      opacity: 1,
    },
  );

  return () => tl.kill();
  });

  return (
    <section className='p-2 mx-auto text-sm font-normal mt-10 sm:max-w-150 sm:mt-20 lg:max-w-220 lg:mt-50' ref={aboutRef}>
        <div className='w-40 flex flex-col justify-center mx-auto '>
          <p>This's</p>
          <h2 className='text-4xl font-bold mx-auto lg:text-5xl'>About</h2>
          <p className='ml-auto'>Me.</p>
        </div> 
        <div className='w-full flex flex-col items-center gap-4 mt-5'>
          <div className="flex relative items-end gap-2 p-2 bg-white rounded-3xl mt-5 z-10 " ref={aboutProfileConRef}>
            <img className='w-50 h-50 object-cover rounded-2xl z-20 sm:w-80 sm:h-80 lg:w-120 lg:h-100' src="profile-picture.jpg" alt="profile-picture" ref={aboutProfileRef}/>
            <div className="w-full h-50 flex flex-col items-start justify-between sm:h-80 lg:h-100" ref={aboutNameRef}>
              <div className="w-full flex gap-2">
              <img className="w-1/2 h-25 object-cover rounded-xl z-10 sm:h-50 sm:rounded-2xl lg:h-70" src="profile-picture-1.jpg" alt="profile-picture-1" />
              <img className="w-1/2 h-25 object-cover rounded-xl sm:h-50 sm:rounded-2xl lg:h-70" src="profile-picture-2.jpg" alt="profile-picture-2" ref={aboutGalleryRef}/>
              </div>
               <h4 className=" text-lg" >Hi!, I'm <br /><span className='text-2xl font-bold xl:text-4xl'>Rusiru Jayanga</span></h4>
            </div>
          </div>
          
          <div className='w-full bg-white p-5 rounded-3xl z-0' ref={aboutContentRef}>
            <p className="article columns-2 sm:hidden"> - I’m a passionate Software Engineer with a strong focus on the MERN stack.
            I enjoy building scalable, efficient, and user-friendly web applications that deliver real value. <br />
            I’m always eager to collaborate, share ideas, and grow as a developer.</p>
            <p className="hidden sm:block article columns-2">I’m a passionate Software Engineer with a strong focus on the MERN stack. <br />I enjoy building scalable, efficient, and user-friendly web applications that deliver real value. <br />
            My journey in software development has taught me the importance of writing clean, maintainable code and continuously learning new technologies to stay ahead in a fast-evolving industry. I’m particularly interested in full-stack development — from designing intuitive front-end interfaces to building robust back-end systems.
            <br /><br />I’m always eager to collaborate, share ideas, and grow as a developer — whether through solving complex problems, exploring new tools, or contributing to meaningful projects.</p>
          </div>
        </div>
        <div className="mb-1000">dddd</div>
    </section>
  )
}

export default About