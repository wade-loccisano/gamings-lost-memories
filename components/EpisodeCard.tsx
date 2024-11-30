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
                <Link href={`/episode/${episode.slug}`}>
                    <Image
                        className="rounded-lg"
                        src="/logo.png" alt="logo" width={200} height={200} priority objectFit="cover" />
                </Link>
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