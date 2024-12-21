import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { EPISODE } from '@/utils/episode-parser'

const EpisodeCard = ({ episode }: {
    episode: EPISODE
}) => {
    return (
        <div className='flex flex-col md:flex-row border rounded-lg w-full my-4 bg-[#fff] items-center'>
            <div className="min-w-[200px] px-2">
                <div className='relative overflow-hidden'>
                    <Link
                        href={`/episode/${episode.slug}`}
                        className=''
                    >
                        <Image
                            className="rounded-lg"
                            src={episode.imageHref} alt="poster image" width={200} height={200} priority />
                    </Link>
                </div>
            </div>
            <div className="flex flex-col px-2 py-4">
                <div className="text-sm lg:text-md">
                    {episode.date}
                </div>
                <div className="md:text-lg font-bold">
                    <Link href={`/episode/${episode.slug}`}>
                        <button className="">
                            {episode.title}
                        </button>
                    </Link>
                </div>
                <div className="pt-2">
                    {episode.description}
                </div>
            </div>
        </div>
    )
}

export default EpisodeCard