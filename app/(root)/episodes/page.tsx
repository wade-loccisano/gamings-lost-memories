import getEpisodeData from "@/utils/episode-parser";
import Link from "next/link";

export default async function Episodes({ searchParams }: {
    searchParams: Promise<{ query?: string }>
}) {
    console.log(searchParams)
    const episodes = getEpisodeData();
    const PATH: string = "/episode";

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
                        {episodes.map((episode) => {
                            return (
                                <div key={episode.title} className="py-2">
                                    <div className="bg-white p-4">
                                        <div className="text-sm text-slate-400">
                                            {episode.date}
                                        </div>
                                        <div className="font-bold text-lg">
                                            <button className=''>
                                                <Link href={`${PATH}/${episode.slug}`}>
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
