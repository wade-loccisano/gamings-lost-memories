import React from 'react'
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: '400',
    subsets: ['latin']
});

const Splash = () => {

    return (
        <section className='relative h-[65vh] bg-[#823229]'>
            {/* <div className="max-w-7xl mx-auto"> */}
            {/* <Image
                src="/landing.jpg"
                alt="Background Image"
                fill
                objectFit="cover"
                priority={true}
            /> */}
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <div className="section_container">
                    <div className='text-white'>
                        {/* <div className='max-w-6xl text-white'> */}
                        <div className='sm:text-lg pt-2'>
                            Latest
                        </div>
                        <div className='text-2xl md:text-3xl lg:text-5xl pt-2 pb-4'>
                            <span className={poppins.className}>
                                Episode 21: Final Fantasy 7, Crisis Core, and the Confusing Remake
                            </span>
                        </div>
                        <div className='text-xs sm:text-base pb-2'>
                            Join BigReed as he discusses his recent playthrough of Final Fantasy: Crisis Core Reunion and his thoughts on the Final Fantasy 7 universe. What is the legacy of this fan favorite title?
                        </div>
                        <div className="py-6">
                            <div className='bg-white text-black text-center'>
                                Embedded Listen Widget Goes Here
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Splash