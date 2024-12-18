import getEpisodeData from '@/utils/episode-parser';
import Link from 'next/link';
import React from 'react'

const RecentEpisodes = () => {
    const episodes = getEpisodeData();
    const recentEpisodes = episodes.slice(0, 9);
    const PATH: string = "/episode";

    return (
        <div className='my-4'>
            <div className='text-lg'>
                Recent Episodes
            </div>
            <div className='bg-white my-2 p-2 text-sm flex flex-col divide-y'>
                {recentEpisodes.map((episode) => {
                    return (
                        <Link
                            key={episode.slug}
                            href={`${PATH}/${episode.slug}`}
                            className='px-2 py-3 text-[#823229]'
                        >
                            {episode.title}
                        </Link>
                    )
                })}
                <Link
                    href={`${PATH}s`}
                    className='px-2 py-3 text-[#823229]'
                >
                    {`View All `}<span>&rarr;</span>
                </Link>
            </div>
        </div>
    )
}

export default RecentEpisodes