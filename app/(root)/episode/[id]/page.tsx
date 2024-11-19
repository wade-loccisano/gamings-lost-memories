import React from 'react'
import RSSFeed from "@/public/rss.json";

export async function generateStaticParams() {
    // Fetch the data for all episodes
    const episodes = RSSFeed.rss.channel.item;

    // Return an array of params for static generation
    return episodes.map((episode) => ({
        id: episode.episode[0].__text.toString(),
    }));
}

const Episode = async ({ params }:
    { params: Promise<{ id: string }> }
) => {
    const ID = (await params).id;
    console.log('id: ', ID)

    // const EPISODE: any[] = [];
    const EPISODE = RSSFeed.rss.channel.item.find((item) => item.episode[0].__text === ID);
    // {
    //     const newItem = {
    //         id: item?.episode[0].__text,
    //         title: item.title[0],
    //         date: item.pubDate,
    //         description: item.description.replace(/<\/?p>/g, ""),
    //     }
    //     EPISODE.push(newItem);
    // }

    return (
        <>
            <div className="bg-[#F4F2F1]">
                <section className="section_container min-h-[65vh]">
                    <h1 className="pb-2 md:text-4xl font-bold">
                        {EPISODE?.title[0].toString()}
                    </h1>
                    <div className='py-2 text-sm text-slate-400'>
                        {EPISODE?.pubDate}
                    </div>
                    <div className='py-2'>
                        {EPISODE?.description.replace(/<\/?p>/g, "")}
                    </div>
                </section>
            </div>
        </>
    )
}

export default Episode