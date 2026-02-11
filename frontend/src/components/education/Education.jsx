import React from 'react'

const Education = () => {
  return (
    <section className='p-2 mx-auto text-sm font-normal mt-10 sm:max-w-150 sm:mt-20 lg:max-w-220 lg:mt-40' id="education">
        <div className='w-fit flex flex-col justify-center mx-auto '>
          <p>My</p>
          <h2 className='text-4xl font-bold mx-auto lg:text-5xl'>Education</h2>
          <p className='ml-auto'>Journey.</p>
        </div>

        <div className='w-full mt-10'>
            <div className='w-full h-50 rounded-3xl p-2 flex gap-2 bg-white'>
                <img className='w-1/3 h-full object-cover rounded-2xl lg:w-1/2' src="education/nsbm.jpeg" alt="precedent-college" />
                <div className='w-full h-full flex flex-col justify-between'>
                    <h5 className='text-xl font-bold'>NSBM Green University</h5>
                    <p className='font-light'>Bachelor of Science in Software Engineering </p>
                    <p className='font-bold'>2019 - 2023</p>
                </div>
            </div>
        </div>
        <div className='mt-100'></div>
    </section>
  )
}

export default Education