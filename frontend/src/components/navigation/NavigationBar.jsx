import React, { useState, useEffect } from "react";
//GSAP animation
import gsap from "gsap";

const NavigationBar = () => {
  //menu toggle
  const [isOpen, setIsOpen] = useState(false);

  //menu active
  const [isActive, setIsActive] = useState("home");

  //menu GSAP animation
    if (isOpen === true) {
      gsap.to( "#nav-slider-container", {
        display: "absolute",
        x: "0%",
        duration: 0,
      });
      gsap.to( "#nav-slider", {
        delay: "absolute",
        x: "0%",
        duration: 0.5,
        ease: "power3.out",
      });
    } else if (isOpen === false) {
      gsap.to( "#nav-slider-container", {
        x: "100%",
        duration: 0,
      });
      gsap.to("#nav-slider", {
        x: "100%",
        duration: 0.3,
        ease: "power3.in",
      });
    }

  return (
    <nav className="relative w-full h-15 flex items-center z-10000 text-base font-normal">
      <img className="h-10 ml-2 absolute" src="logo.png" alt="logo" />

      {/*lg menu */}
      <div className="hidden lg:flex w-fit ml-auto mr-auto gap-5 text-black/60">
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
        className="bi bi-list size-10 flex items-center justify-center text-3xl ml-auto mr-2 rounded-full focus:bg-[#f4f4f4] lg:hidden "
        onClick={() => setIsOpen(!isOpen)}
      ></i>
      <div
        className="hidden fixed w-screen h-screen rounded-lg top-0 left-0 bg-black/30 z-1000"
        id="nav-slider-container"
      ></div>
        <div className="fixed w-2/3 h-screen top-0 right-0 ml-auto bg-white sm:w-1/3 z-11000"
        id="nav-slider">
          <i
            className="bi bi-x-lg size-10 flex items-center justify-center text-3xl p-7 rounded-full focus:bg-[#f4f4f4]"
            onClick={() => setIsOpen(!isOpen)}
          ></i>
          <div className="w-2/3 ml-auto mr-2 mt-30 flex flex-col text-black/60 ">
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
        </div>
    </nav>
  );
};

export default NavigationBar;
