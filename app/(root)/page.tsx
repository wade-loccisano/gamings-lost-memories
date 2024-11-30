import Contact from "@/components/Contact";
import Splash from "@/components/Splash";
import TwitterTimeline from "@/components/TwitterTimeline";
import Link from "next/link";
import Image from "next/image";
import getEpisodeData from "@/utils/episode-parser";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
  const episodeData = getEpisodeData();
  const episodes = episodeData.slice(0, 5);

  return (
    <>
      <Splash
        latestEpisode={episodes[0]}
      ></Splash>
      <div className="bg-[#F4F2F1]">

        <section className="section_container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-8">
            <div className="col-span-2">
              <div className="flex justify-between">
                <h1 className="text-xl md:text-3xl font-bold">Recent Episodes</h1>
                <button className='md:text-lg flex flex-col-reverse'>
                  <Link href={`/episodes`}>
                    {`View All `}<span>&rarr;</span>
                  </Link>
                </button>
              </div>
              <div className='flex flex-col'>
                {episodes.map((episode, i) => {
                  return (
                    <div key={i} className='flex flex-col md:flex-row border rounded-lg w-full my-4 bg-[#fff] items-center'>
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
                  );
                })}
              </div>
              <div className="text-center">
                <Link href={`/episodes`}>
                  <button className='rounded-full my-4 p-3 bg-[#006237] text-[#fff]'>
                    {`View All Episodes`}
                  </button>
                </Link>
              </div>
            </div>
            <div className="pt-2 lg:pt-0 col-span-1">
              <Contact></Contact>
              <TwitterTimeline></TwitterTimeline>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
