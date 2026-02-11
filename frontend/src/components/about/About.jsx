import React, { useState, useRef, useLayoutEffect } from "react";
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
      once: true,
    }
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

  //image gallery select
  const [selectedImage, setSelectedImage] = useState("about/profile-picture.jpg");
  let image1 = "null";
  let image2 = "null";
  let image3 = "null";
  if (selectedImage === "about/profile-picture.jpg") {
    image1 = "about/profile-picture.jpg";
    image2 = "about/profile-picture-1.jpg";
    image3 = "about/profile-picture-2.jpg";
  } else if (selectedImage === "about/profile-picture-1.jpg") {
    image1 = "about/profile-picture-1.jpg";
    image2 = "about/profile-picture-2.jpg";
    image3 = "about/profile-picture.jpg";
  } else if (selectedImage === "about/profile-picture-2.jpg") {
    image1 = "about/profile-picture-2.jpg";
    image2 = "about/profile-picture.jpg";
    image3 = "about/profile-picture-1.jpg";
  }

  return (
    <section className='p-2 mx-auto text-sm font-normal mt-10 sm:max-w-150 sm:mt-20 lg:max-w-220 lg:mt-50' ref={aboutRef} id="about">
        <div className='w-fit flex flex-col justify-center mx-auto '>
          <p>This's</p>
          <h2 className='text-4xl font-bold mx-auto lg:text-5xl'>About</h2>
          <p className='ml-auto'>Me.</p>
        </div> 

        <div className='w-full flex flex-col items-center gap-4 mt-5'>
          <div className="flex relative items-end gap-2 p-2 bg-white rounded-3xl mt-5 z-10" ref={aboutProfileConRef}>
            <img className='w-50 h-50 object-cover rounded-2xl z-20 sm:w-70 sm:h-70 lg:w-110 lg:h-110' src={image1} alt="profile-picture" ref={aboutProfileRef}/>
            <div className="w-full h-50 flex flex-col items-start justify-between sm:h-70 lg:h-110" ref={aboutNameRef}>
              <div className="w-full flex gap-2">
              <img className="w-[calc(50%-4px)] h-25 object-cover rounded-xl z-10 cursor-pointer sm:h-50 sm:rounded-2xl lg:h-70" src={image2} alt="profile-picture-1" onClick={() => setSelectedImage(image2)}/>
              <img className="w-[calc(50%-4px)] h-25 object-cover rounded-xl cursor-pointer sm:h-50 sm:rounded-2xl lg:h-70" src={image3} alt="profile-picture-2" onClick={() => setSelectedImage(image3)} ref={aboutGalleryRef}/>
              </div>
               <h4 className=" text-lg" >Hi!, I'm <br /><span className='text-2xl font-bold xl:text-4xl'>Rusiru Jayanga</span></h4>
            </div>
          </div>
          
          <div className='w-full bg-white p-5 rounded-3xl z-0' ref={aboutContentRef}>
            <p className="article font-light columns-2 sm:hidden">I’m a passionate Software Engineer with a strong focus on the MERN stack.
            I enjoy building scalable,efficient and user-friendly web applications that deliver real value. <br />
            I’m always eager to collaborate, share ideas and grow as a developer.</p>
            <p className="hidden font-light sm:block article columns-2">I’m a passionate Software Engineer with a strong focus on the MERN stack. <br />I enjoy building scalable, efficient, and user-friendly web applications that deliver real value. <br />
            My journey in software development has taught me the importance of writing clean, maintainable code and continuously learning new technologies to stay ahead in a fast-evolving industry. I’m particularly interested in full-stack development — from designing intuitive front-end interfaces to building robust back-end systems.
            <br /><br />I’m always eager to collaborate, share ideas, and grow as a developer — whether through solving complex problems, exploring new tools, or contributing to meaningful projects.</p>
          </div>
        </div>
    </section>
  )
}

export default About