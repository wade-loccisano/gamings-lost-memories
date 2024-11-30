"use client";
import React, { useState, useRef } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { EPISODE } from '@/utils/episode-parser';

const Player = ({ episode }: {
    episode: EPISODE
}) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className='bg-white text-black'>
            <audio
                ref={audioRef}
                src={episode.src}
                preload='metadata'
            />
            <div className="px-2 flex">
                <Image
                    className="min-w-[200px] rounded-lg hidden md:block"
                    src="/logo.png" alt="logo" width={200} height={200} priority objectFit="cover"
                />
                <div>
                    <div className='flex p-4'>
                        <button className="flex justify-center m-2 p-4 h-[50px] w-[50px] rounded-full bg-red-600 hover:bg-red-800" onClick={togglePlay}>
                            {/* <svg className="w-4" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 7.26795C16.3333 8.03775 16.3333 9.96225 15 10.7321L3 17.6603C1.66667 18.4301 1.01267e-06 17.4678 1.07997e-06 15.9282L1.68565e-06 2.0718C1.75295e-06 0.532196 1.66667 -0.430054 3 0.339746L15 7.26795Z" fill="white" />
                            </svg> */}
                            {isPlaying ? <Image
                                className=""
                                src="/pause.png" alt="pause" width={50} height={50} priority
                            /> :
                                <Image
                                    className="ml-1"
                                    src="/play.png" alt="play" width={50} height={50} priority
                                />}
                        </button>
                        <div className='m-2 flex'>
                            <div>
                                <div className='text-sm'>
                                    Gaming's Lost Memories
                                </div>
                                <div className='text-lg font-bold'>
                                    {episode.title}
                                </div>
                            </div>
                            <div className=''>
                                {episode.length}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player