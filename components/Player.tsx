"use client";
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image';
import { EPISODE, formatSeconds } from '@/utils/episode-parser';

const Player = ({ episode }: {
    episode: EPISODE
}) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(episode.length);
    const [formattedTime, setFormattedTime] = useState("");
    const [playerProgress, setPlayerProgress] = useState(0);

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

    const handleSeek = (e: any) => {
        // const rect = e.target.getBoundingClientRect();
        // const clickX = e.clientX - rect.left;
        // const newTime = (clickX / rect.width) * episode.length;

        // if (audioRef.current) {
        //     audioRef.current.currentTime = newTime;
        //     if (!isPlaying) {
        //         togglePlay()
        //     }
        // }
        console.log(e)
    }

    const getPlayerProgress = () => {
        if (currentTime === episode.length) {
            return 0;
        }
        return (currentTime / episode.length) * 100;
    }

    useEffect(() => {
        const audio = audioRef.current;
        const updateTime = () => setCurrentTime(audio!.currentTime);

        if (audio) {
            audio.addEventListener('timeupdate', updateTime);
        }

        // Cleanup event listener
        return () => {
            if (audio) {
                audio.removeEventListener('timeupdate', updateTime);
            }
        };
    }, []);

    useEffect(() => {
        setFormattedTime(formatSeconds(Math.floor(currentTime)));
        setPlayerProgress(getPlayerProgress())
    }, [currentTime]);


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
                    src="logo.png" alt="logo" width={200} height={200} priority objectFit="cover"
                />
                <div className='w-full p-4'>
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <button className="flex ml-1 justify-center my-2 p-4 h-[50px] w-[50px] rounded-full bg-red-600 hover:bg-red-800" onClick={togglePlay}>
                                {isPlaying ? <Image
                                    className=""
                                    src="pause.png" alt="pause" width={50} height={50} priority
                                /> :
                                    <Image
                                        className="ml-1"
                                        src="play.png" alt="play" width={50} height={50} priority
                                    />}
                            </button>
                            <div className='m-2'>
                                <div>
                                    <div className='text-sm'>
                                        Gaming&apos;s Lost Memories
                                    </div>
                                    <div className='text-lg font-bold'>
                                        {episode.title}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='m-2 py-1 flex flex-col-reverse'>
                            {formattedTime}
                        </div>
                    </div>
                    <div
                        className='mx-2 my-8 bg-slate-400 h-6 cursor-pointer'
                        onClick={handleSeek}
                    >
                        <div
                            className={`bg-green-800 h-6`}
                            style={{ width: `${playerProgress}%` }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player