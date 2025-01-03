import React from 'react'
import getEpisodeData from '@/utils/episode-parser';
import Player from '@/components/Player';
import EpisodeCallToAction from '@/components/EpisodeCallToAction';
import Links from '@/components/Links';
import Contact from '@/components/Contact';
import RecentEpisodes from '@/components/RecentEpisodes';

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
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-16">
                        <div className="col-span-2">
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
                                <div
                                    className='py-8'
                                >
                                    {/* playlist widget */}
                                </div>
                                <div className='py-8'>
                                    <EpisodeCallToAction></EpisodeCallToAction>
                                </div>
                            </div>
                        </div>
                        <div className="pt-2 lg:pt-0 col-span-1">
                            <Contact></Contact>
                            <RecentEpisodes></RecentEpisodes>
                            {/* <ListenOn></ListenOn> */}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Episode