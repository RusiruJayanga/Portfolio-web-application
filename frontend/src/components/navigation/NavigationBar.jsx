import React, { useState } from "react";

const NavigationBar = () => {
  //menu toggle
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-15 flex items-center z-10000 text-base font-normal">
      <img className="h-10 ml-2 absolute" src="logo.png" alt="logo" />

      {/* menu */}
      <div className="hidden lg:flex w-fit ml-auto mr-auto gap-5 ">
        <a className="" href="/">
          Home
        </a>
        <a className="" href="/">
          About
        </a>
        <a className="" href="/">
          Education
        </a>
        <a className="" href="/">
          Skills
        </a>
        <a className="" href="/">
          Projects
        </a>
      </div>

      {/* menu */}
      <i
        className="bi bi-list w-10 h-10 flex items-center justify-center text-3xl ml-auto mr-2 rounded-full focus:bg-[#f4f4f4] lg:hidden "
        onClick={() => setIsOpen(!isOpen)}
      ></i>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute w-screen h-screen top-0 left-0 bg-black/20 z-11000 `}
      >
        <div className="w-2/3 h-full ml-auto bg-white sm:w-1/3">
          <i
            className="bi bi-x-lg w-10 h-10 flex items-center justify-center text-3xl p-7 rounded-full focus:bg-[#f4f4f4]"
            onClick={() => setIsOpen(!isOpen)}
          ></i>
          <div className="w-2/3 ml-auto mt-30 flex flex-col ">
            <a
              className="w-full p-2 rounded-md flex justify-between focus:bg-[#f4f4f4] "
              href="/"
            >
              Home<i className="bi bi-chevron-right"></i>
            </a>
            <a
              className="w-full mt-2 p-2 rounded-md flex justify-between focus:bg-[#f4f4f4]"
              href="/"
            >
              About<i className="bi bi-chevron-right"></i>
            </a>
            <a
              className="w-full mt-2 p-2 rounded-md flex justify-between focus:bg-[#f4f4f4]"
              href="/"
            >
              Education<i className="bi bi-chevron-right"></i>
            </a>
            <a
              className="w-full mt-2 p-2 rounded-md flex justify-between focus:bg-[#f4f4f4]"
              href="/"
            >
              Skills<i className="bi bi-chevron-right"></i>
            </a>
            <a
              className="w-full mt-2 p-2 rounded-md flex justify-between focus:bg-[#f4f4f4]"
              href="/"
            >
              Projects<i className="bi bi-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
