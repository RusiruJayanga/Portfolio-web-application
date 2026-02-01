import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
//GSAP animation
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const NavigationBar = () => {
  //menu toggle
  const [isOpen, setIsOpen] = useState(false);

  //menu active
  const [isActive, setIsActive] = useState("home");

  //menu GSAP animation
  const navRef = useRef(null);

  useLayoutEffect(() => {
    if (!navRef.current) return;
    
    gsap.to(navRef.current, {
    top: "8px",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    scrollTrigger: {
      trigger: navRef.current,
      start: "bottom 60px",
      end: "bottom 0px",
      scrub: true,
    },
  });
  }, []);

  useEffect(() => {
    if (!navRef.current) return;
     if (isOpen === true) {
      gsap.to( "#nav-slider-container", {
        display: "block",
        x: "0%",
        duration: 0,
      });
      gsap.to( "#nav-slider", {
        display: "block",
        x: "0%",
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.to( "#nav-close", {
        duration: 0.5,
        rotate: 90,
        ease: "power3.out",
      });
    } else if (isOpen === false) {
      gsap.to( "#nav-slider-container", {
        display: "none",
        x: "100%",
        duration: 0,
      });
      gsap.to("#nav-slider", {
        display: "none",
        x: "100%",
        duration: 0.3,
        ease: "power3.in",
      });
      gsap.to("#nav-close", {
        duration: 0.3,
        rotate: 0,
        ease: "power3.in",
      });
    }
  }, [isOpen]);
    

  return (
    <nav className="relative w-screen h-15 flex items-center z-10000 text-base font-normal lg:w-fit lg:sticky lg:ml-auto lg:mr-auto lg:rounded-[30px]" ref={navRef}>

      {/*lg menu */}
      <div className="hidden lg:flex w-fit ml-auto mr-auto gap-5 text-black/60 lg:pr-10 lg:pl-10">
        <a className={`${isActive === "home" ? "text-black font-bold" : ""} hover:text-black transition-colors duration-200 ease-out`} href="#" onClick={()=> setIsActive("home")}>
          Home
        </a>
        <a className={`${isActive === "about" ? "text-black font-bold" : ""} hover:text-black transition-colors duration-200 ease-out`} href="#" onClick={()=> setIsActive("about")}>
          About
        </a>
        <a className={`${isActive === "education" ? "text-black font-bold" : ""} hover:text-black transition-colors duration-200 ease-out`} href="#" onClick={()=> setIsActive("education")}>
          Education
        </a>
        <a className={`${isActive === "skills" ? "text-black font-bold" : ""} hover:text-black transition-colors duration-200 ease-out`} href="#" onClick={()=> setIsActive("skills")}>
          Skills
        </a>
        <a className={`${isActive === "projects" ? "text-black font-bold" : ""} hover:text-black transition-colors duration-200 ease-out`} href="#" onClick={()=> setIsActive("projects")}>
          Projects
        </a>
      </div>

      {/*sm menu */}
      <i
        className="bi bi-list size-10 flex items-center justify-center text-2xl ml-auto mr-2 rounded-full focus:bg-[#f4f4f4] lg:hidden "
        onClick={() => setIsOpen(!isOpen)}
      ></i>
      <div
        className="hidden fixed w-screen h-screen rounded-lg top-0 left-0 bg-black/30 z-1000"
        onClick={() => setIsOpen(!isOpen)}
        id="nav-slider-container"
      ></div>
        <div className="hidden fixed w-3/5 h-screen top-0 right-0 ml-auto bg-white sm:w-1/3 z-11000"
        id="nav-slider">
          <i
            className="bi bi-x-lg size-10 flex items-center justify-center text-2xl p-7 rounded-full focus:bg-[#f4f4f4]"
            onClick={() => setIsOpen(!isOpen)}
            id="nav-close"
          ></i>
          <div className="w-2/3 ml-auto mr-auto mt-30 flex flex-col text-black/60 ">
            <a
              className={`${isActive === "home" ? "text-black font-bold" : ""} w-full p-2 rounded-sm flex justify-between focus:bg-[#f4f4f4] `}
              href="#"
              onClick={()=> setIsActive("home") || setIsOpen(!isOpen)}
            >
              Home<i className="bi bi-chevron-right"></i>
            </a>
            <a
              className={`${isActive === "about" ? "text-black font-bold" : ""} w-full mt-2 p-2 rounded-sm flex justify-between focus:bg-[#f4f4f4]`}
              href="#"
              onClick={()=> setIsActive("about") || setIsOpen(!isOpen)}
            >
              About<i className="bi bi-chevron-right"></i>
            </a>
            <a
              className={`${isActive === "education" ? "text-black font-bold" : ""} w-full mt-2 p-2 rounded-sm flex justify-between focus:bg-[#f4f4f4]`}
              href="#"
              onClick={()=> setIsActive("education") || setIsOpen(!isOpen)}
            >
              Education<i className="bi bi-chevron-right"></i>
            </a>
            <a
              className={`${isActive === "skills" ? "text-black font-bold" : ""} w-full mt-2 p-2 rounded-sm flex justify-between focus:bg-[#f4f4f4]`}
              href="#"
              onClick={()=> setIsActive("skills") || setIsOpen(!isOpen)}
            >
              Skills<i className="bi bi-chevron-right"></i>
            </a>
            <a
              className={`${isActive === "projects" ? "text-black font-bold" : ""} w-full mt-2 p-2 rounded-sm flex justify-between focus:bg-[#f4f4f4]`}
              href="#"
              onClick={()=> setIsActive("projects") || setIsOpen(!isOpen)}
            >
              Projects<i className="bi bi-chevron-right"></i>
            </a>
          </div>
          <div className="w-full absolute bottom-10 flex gap-5 text-2xl text-black/60">
            <i className="bi bi-github ml-auto"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-google mr-auto"></i>
          </div>
        </div>
    </nav>
  );
};

export default NavigationBar;
