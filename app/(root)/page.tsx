import Contact from "@/components/Contact";
import Splash from "@/components/Splash";
import TwitterTimeline from "@/components/TwitterTimeline";
import { SearchParams } from "next/dist/server/request/search-params";
import Link from "next/link";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
  const episodes: any[] = [
    {
      name: 'Episode 20: The Nintendo Switch and Nintendo Switch 2',
      href: '/',
      description: 'Join BigReed as he discusses the 7 years of Nintendo Switch and the exciting Nintendo Switch 2 news!',
      date: 'Nov 5, 2024'
    },
    {
      name: 'Episode 19: The Nintendo Wii U`s Unique Failure',
      href: '/',
      description: "BigReed discusses Nintendo's journey into High Definition, unique social features lost to the tides of time, and the ultimate Gimmick that led to Nintendo's Most successful Console of all time with the Nintendo Switch! Buckle Up!",
      date: 'Jul 16, 2024'
    },
    {
      name: "Episode 18: Let's Play Enter The Gungeon Live Stream",
      href: '/',
      description: "BigReed discusses Nintendo's journey into High Definition, unique social features lost to the tides of time, and the ultimate Gimmick that led to Nintendo's Most successful Console of all time with the Nintendo Switch! Buckle Up!",
      date: 'Jun 18, 2024'
    },
    {
      name: "Episode 17: Microsoft's Journey to 3rd Party Publisher | Finale",
      href: '/',
      description: "Join BigReed as he discusses the latter years of the Xbox 360 and the disastrous announcement of the Xbox One and how the Xbox Brand lost its soul. Is it worth owning an Xbox console anymore?",
      date: 'Jun 1, 2024'
    },
  ];

  return (
    <>
      <Splash></Splash>
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
                    <div key={i} className='flex flex-col border rounded-lg w-full p-4 my-4 bg-[#fff] '>
                      <div className="text-sm lg:text-md">
                        {episode.date}
                      </div>
                      <div className="md:text-xl font-bold">
                        <button className="">
                          <Link href="/">
                            {episode.name}
                          </Link>
                        </button>
                      </div>
                      <div className="pt-2">
                        {episode.description}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="py-4 text-center">
                <button className='rounded-full p-3 bg-[#006237] text-[#fff]'>
                  <Link href={`/episodes`}>
                    {`View All Episodes`}
                  </Link>
                </button>
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
