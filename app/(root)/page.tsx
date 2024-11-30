import Contact from "@/components/Contact";
import Splash from "@/components/Splash";
import TwitterTimeline from "@/components/TwitterTimeline";
import Link from "next/link";
import Image from "next/image";
import getEpisodeData from "@/utils/episode-parser";
import EpisodeCard from "@/components/EpisodeCard";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
  console.log(searchParams)
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
                {episodes.map((episode, i) => (
                  <EpisodeCard
                    key={episode.id}
                    episode={episode}
                  ></EpisodeCard>
                )
                )}
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
