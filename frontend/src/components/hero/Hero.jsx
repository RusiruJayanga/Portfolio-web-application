import React from 'react'

function Hero() {

  return (
    <section className='p-2 grid gap-4'>
        <div className='w-full h-50 flex justify-end items-center overflow-hidden bg-[linear-gradient(0deg,rgba(12,12,12,0.4)_0%,rgba(12,12,12,0.3)_100%),url(/hero-main-sm.jfif)] bg-cover bg-center p-2 rounded-3xl'>
            <img className='w-40' src="titleLogo.png" alt="logo" />
        </div>
        <div className="w-full bg-white p-5 rounded-3xl">
            <h1 className='text-7xl font-bold'>Hello<span>!</span></h1>
            <div className='mt-5 ml-5 text-sm font-medium'>
            <p><span className='text-blue-600'>function</span> <span className='text-yellow-400'>App</span> <span className='text-red-600'>&#40;&#41;</span> <span className='text-red-600'>&#123;</span></p>
            <p className='ml-5'><span className='text-purple-500'>return</span> <span className='text-green-500'>&#40;</span></p>
            <p className='ml-10'><span className='text-gray-500'>&#60;&#62;</span></p>
            <p className='ml-15'><span className='text-gray-500'>&#60;</span><span className='text-blue-700'>h4</span><span>&#62;</span></p>
            <p className='ml-17 p-2'><span className='text-xl'> I'm web developer</span></p>
            <p className='ml-15'><span className='text-gray-500'> &#60;<span className='text-blue-700'>/h4</span>&#62;</span></p>
            <p className='ml-10'><span className='text-gray-500'>&#60;/&#62;</span></p>
            <p className='ml-5'><span className='text-green-500'>&#41;</span></p>
            <p><span className='text-red-600'>&#125;</span></p>
            <p className='text-purple-500'>export default <span className='text-yellow-400'>App</span></p>
            </div>
            <div className='flex gap-2 mt-10'><button className='flex w-37 border-2 border-[#ecf95a] rounded-md bg-[#ecf95a] text-[#191314] hover:bg-white hover:text-[#191314] focus:bg-white focus:text-[#191314] '>Download CV</button><button className='flex w-37 border-2 border-[#191314] rounded-md bg-white text-[#191314] hover:bg-[#ecf95a] hover:text-[#191314] hover:border-[#ecf95a] focus:bg-[#ecf95a] focus:text-[#191314] focus:border-[#ecf95a] '>Contact</button></div>
        </div>
        
    </section>
  )
}

export default Hero