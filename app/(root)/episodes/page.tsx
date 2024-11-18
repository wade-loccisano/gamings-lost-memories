import RSSFeed from "@/public/rss.json";
import Link from "next/link";

export default async function Episodes({ searchParams }: {
    searchParams: Promise<{ query?: string }>
}) {
    console.log(searchParams)
    // const EPISODES = await fetch("/rss.json")
    //     .then(async (response) => {
    //         const res = await response.json();
    //         // const episodeList: any[] = [];
    //         const episodeList = res.rss.channel.item.forEach((item: any) => {
    //             return {
    //                 id: item.episode.__text,
    //                 name: item.title[0],
    //                 date: item.pudDate,
    //             }
    //         })
    //         return episodeList;
    //     });

    interface EPISODE {
        id: string
        title: string,
        date: string,
        description: string,
    }

    const EPISODES: EPISODE[] = [];
    RSSFeed.rss.channel.item.forEach((item) => {
        const newItem: EPISODE = {
            id: item?.episode[0].__text,
            title: item.title[0].toString(),
            date: item.pubDate,
            description: item.description.replace(/<\/?p>/g, ""),
        }
        EPISODES.push(newItem);
    });

    const PATH: string = "/episode";

    // const query = (await searchParams).query;
    // const currentPage = query ? parseInt(query) : 1;
    // const itemsPerPage = 25;
    // console.log('current page is: ', currentPage);
    // console.log('EPISODES FOUND: ', EPISODES);

    return (
        <>
            <div className="bg-[#F4F2F1]">
                <section className="section_container">
                    <h1 className="pb-2 md:text-4xl font-bold">
                        Episodes
                    </h1>
                    {/* <div className="py-2">
                        <input
                            className='my-2 p-2 w-full border rounded'
                            placeholder='Search'
                        >
                        </input>
                    </div> */}
                    <div>
                        {EPISODES.map((episode) => {
                            return (
                                <div className="py-2">
                                    <div className="bg-white p-4">
                                        <div className="text-sm text-slate-400">
                                            {episode.date}
                                        </div>
                                        <div className="font-bold text-lg">
                                            <button className=''>
                                                <Link href={`${PATH}/${episode.id}`}>
                                                    {episode.title}
                                                </Link>
                                            </button>
                                            {/* {episode.title} */}
                                        </div>
                                        {/* <div className="text-sm">
                                            {episode.description}
                                        </div> */}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {/* <Pagination currentPage={currentPage} totalPages={Math.ceil(EPISODES.length / itemsPerPage)} /> */}
                </section>
                {/* <div className="max-w-6xl mx-auto pt-8"> */}
            </div>
        </>
    );
}
