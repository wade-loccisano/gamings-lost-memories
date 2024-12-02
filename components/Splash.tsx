import React from 'react'
import { Poppins } from 'next/font/google';
import Player from './Player';
import { EPISODE } from '@/utils/episode-parser';
import Links from './Links';
import Image from 'next/image';

const poppins = Poppins({
    weight: '400',
    subsets: ['latin']
});

const Splash = ({ latestEpisode }: {
    latestEpisode: EPISODE,
}) => {

    return (
        <section className='relative h-[100vh] sm:h-[75vh] bg-[#823229]'>
            {/* <div className="max-w-7xl mx-auto"> */}
            <Image
                className='py-2 shadow-lg'
                src="/wallpaper.jpg"
                alt="Background Image"
                fill
                objectFit="cover"
                priority={true}
            />
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <div className="section_container">
                    <div className='text-white'>
                        <div className='sm:text-lg pt-2'>
                            Latest
                        </div>
                        <div className='text-2xl md:text-3xl lg:text-5xl pt-2 pb-4'>
                            <span className={poppins.className}>
                                {latestEpisode.title}
                            </span>
                        </div>
                        <div className='text-sm sm:text-base pb-2'>
                            {latestEpisode.description}
                        </div>
                        <div className="py-6">
                            <Player
                                episode={latestEpisode}
                            ></Player>
                        </div>
                        <div className=''>
                            <Links></Links>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Splash