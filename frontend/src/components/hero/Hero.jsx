import React, { useEffect, useRef } from "react";
//GSAP animation
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

function Hero() {
 //GSAP animation
 const heroRef = useRef(null);

 useEffect(() => {
    if (!heroRef.current) return;

    gsap.to("#type-writer", {
     duration: 3,
     text: "I'm Web Developer",
     ease: "power1.in",
     });

    gsap.fromTo("#hero-main-sm", {
     scale: 0.8,
     }
     , {
     duration: 3,
     scale: 1,
     ease: "power3.out",
     });

    gsap.fromTo("#hero-main-left", {
     x: "-20%",
     }
     , {
     duration: 3,
     x: 0,
     ease: "power3.out",
     });

    gsap.fromTo("#hero-main-right", {
     x: "20%",
     }
     , {
     duration: 3,
     x: 0,
     ease: "power3.out",
     });


}, []);

  return (
    <section className='p-2 grid gap-4 mx-auto sm:flex sm:max-w-200 items-center lg:max-w-300 lg:h-150 lg:mt-10' ref={heroRef}>
        <div className='w-full h-50 relative flex justify-center items-center overflow-hidden bg-black bg-cover bg-center p-2 rounded-3xl sm:hidden'>
            <img className='w-70 rounded-2xl brightness-80' src="hero/hero-main-sm.jfif" alt="logo" id="hero-main-sm" />
            <img className="absolute w-45 left-0" src="hero/left.png" alt="left" id="hero-main-left"/>
            <img className="absolute w-45 right-0" src="hero/right.png" alt="right" id="hero-main-right" />
        </div>
        <div className="w-full relative bg-white p-5 rounded-3xl sm:flex-2 lg:h-full">
            <h1 className='text-7xl font-bold lg:text-9xl'>Hello<span>!</span></h1>
            <div className='mt-5 ml-5 text-sm font-medium lg:text-lg lg:ml-10'>
            <p><span className='text-blue-600'>function</span> <span className='text-yellow-400'>App</span> <span className='text-red-600'>&#40;&#41;</span> <span className='text-red-600'>&#123;</span></p>
            <p className='ml-5'><span className='text-purple-500'>return</span> <span className='text-green-500'>&#40;</span></p>
            <p className='ml-10'><span className='text-gray-500'>&#60;&#62;</span></p>
            <p className='ml-15'><span className='text-gray-500'>&#60;</span><span className='text-blue-700'>h4</span><span>&#62;</span></p>
            <p className='ml-17 p-2 h-15 flex items-center text-xl font-bold lg:text-3xl'><span id='type-writer'></span></p>
            <p className='ml-15'><span className='text-gray-500'> &#60;<span className='text-blue-700'>/h4</span>&#62;</span></p>
            <p className='ml-10'><span className='text-gray-500'>&#60;/&#62;</span></p>
            <p className='ml-5'><span className='text-green-500'>&#41;</span></p>
            <p><span className='text-red-600'>&#125;</span></p>
            <p className='text-purple-500'>export default <span className='text-yellow-400'>App</span></p>
            </div>
            <div className='flex gap-2 mt-10 lg:mt-12'><button className='flex w-37 border-2 border-[#ecf95a] rounded-md bg-[#ecf95a] text-[#191314] hover:bg-white hover:text-[#191314] focus:bg-white focus:text-[#191314] '>Download CV</button><button className='flex w-37 border-2 border-[#191314] rounded-md bg-white text-[#191314] hover:bg-[#ecf95a] hover:text-[#191314] hover:border-[#ecf95a] focus:bg-[#ecf95a] focus:text-[#191314] focus:border-[#ecf95a] '>Contact</button></div>
        </div>
        <div className='hidden sm:flex relative items-center overflow-hidden justify-center flex-1 h-110 bg-black p-2 rounded-3xl lg:h-full' id="hero-main">
            <img className='w-[70%] rounded-2xl brightness-80' src="hero/hero-main.jfif" alt="logo" id="hero-main-sm" />
            <img className="absolute w-[48%] left-0" src="hero/left.png" alt="left" id="hero-main-left"/>
            <img className="absolute w-[48%] right-0" src="hero/right.png" alt="right" id="hero-main-right" />
        </div>
        
    </section>
  )
}

export default Hero