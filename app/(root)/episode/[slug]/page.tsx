import React from 'react'
import getEpisodeData from '@/utils/episode-parser';
import Player from '@/components/Player';
import EpisodeCallToAction from '@/components/EpisodeCallToAction';
import Links from '@/components/Links';

export async function generateStaticParams() {
    const episodes = getEpisodeData();

    // Return an array of params for static generation
    return episodes.map((episode) => ({
        slug: episode.slug,
    }));
}

const Episode = async ({ params }:
    { params: Promise<{ slug: string }> }
) => {
    const slug = (await params).slug;
    const EPISODE = getEpisodeData(slug)[0];

    return (
        <>
            <div className="bg-[#F4F2F1]">
                <section className="section_container min-h-[65vh]">
                    <h1 className="px-2 pb-2 md:text-4xl font-bold">
                        {EPISODE?.title}
                    </h1>
                    <div className='p-2 text-sm text-slate-400'>
                        {EPISODE?.date}
                    </div>
                    <div>
                        <Player
                            episode={EPISODE}
                        ></Player>
                    </div>
                    <div>
                        <Links></Links>
                    </div>
                    <div className='px-2'>
                        <div className='py-2 text-lg'>
                            {EPISODE?.description.replace(/<\/?p>/g, "")}
                        </div>
                        {/* <div>
                            Episode Scroller
                        </div> */}
                        <div className='py-8'>
                            <EpisodeCallToAction></EpisodeCallToAction>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Episode