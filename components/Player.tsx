"use client";
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image';
import { EPISODE, formatSeconds } from '@/utils/episode-parser';

const Player = ({ episode }: {
    episode: EPISODE
}) => {
    const NAME: string = "Gaming's Lost Memories";
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

    const handleSeek = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = (e.target as HTMLDivElement).getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const newTime = (clickX / rect.width) * episode.length;

        if (audioRef.current) {
            audioRef.current.currentTime = newTime;
            if (!isPlaying) {
                togglePlay()
            }
        }
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
    }, [currentTime, getPlayerProgress]);


    return (
        <div className='bg-white text-black'>
            <audio
                ref={audioRef}
                src={episode.src}
                preload='metadata'
            />
            <div className="px-2 flex">
                <Image
                    className="min-w-[200px] rounded-lg hidden lg:block"
                    src="logo.png" alt="logo" width={200} height={200} priority
                />
                <div className='w-full p-4'>
                    <div className='flex flex-col md:flex-row md:justify-between'>
                        <div className='flex'>
                            <button className="hover:opacity-65" onClick={togglePlay}>
                                {isPlaying ? <Image
                                    className="min-h-[50px] min-w-[50px]"
                                    src="red_pause_button.png" alt="pause" width={50} height={50} priority
                                /> :
                                    <Image
                                        className="min-h-[50px] min-w-[50px]"
                                        src="playbutton.png" alt="play" width={50} height={50} priority
                                    />}
                            </button>
                            <div className='m-2'>
                                <div>
                                    <div className='text-sm'>
                                        {NAME}
                                    </div>
                                    <div className='text-base md:text-lg font-bold'>
                                        {episode.title}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='m-2 py-1 text-sm md:text-base flex justify-end md:flex-col-reverse'>
                            {formattedTime}
                        </div>
                    </div>
                    <div
                        className='mx-2 my-2 md:my-8 h-6 cursor-pointer'
                        onClick={handleSeek}
                        style={{
                            background: playerProgress > 0
                                ? `linear-gradient(to right, #2f855a ${playerProgress}%, #94a3b8 ${playerProgress}%)`
                                : '#2f855a',
                        }}
                    >
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player