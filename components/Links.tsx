import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export const links = [
    {
        icon: "rss-icon.png",
        title: "RSS",
        href: "https://rss.com/podcasts/gamingslostmemories/"
    },
    {
        icon: "appleIcon.png",
        title: "Apple Podcasts",
        href: "https://podcasts.apple.com/us/podcast/gamings-lost-memories/id1651491957"
    },
    {
        icon: "spotify-icon.png",
        title: "Spotify",
        href: "https://open.spotify.com/show/1YJ3UnbNY9miy5eF3CoalM"
    },
    {
        icon: "amazonmusic-icon.png",
        title: "Amazon Music",
        href: "https://music.amazon.com/podcasts/cf5a0333-52d3-4b99-8d7b-3b9b61a230ec/gaming's-lost-memories"
    },
    // {
    //     icon: "pandora-icon.png",
    //     title: "Pandora",
    //     href: "https://open.spotify.com/show/1YJ3UnbNY9miy5eF3CoalM"
    // },
    {
        icon: "iheartradio-icon.png",
        title: "iHeartRadio",
        href: "https://www.iheart.com/podcast/269-gamings-lost-memories-103785026/"
    },
    // {
    //     icon: "podcast-index-icon.png",
    //     title: "Podcast Index",
    //     href: "https://open.spotify.com/show/1YJ3UnbNY9miy5eF3CoalM"
    // },
    {
        icon: "castro-icon.png",
        title: "Castro",
        href: "https://castro.fm/itunes/1651491957"
    },
    {
        icon: "castbox-icon.png",
        title: "Castbox",
        href: "https://castbox.fm/channel/Gaming's-Lost-Memories-id5196606"
    },
    // {
    //     icon: "fountain-icon.png",
    //     title: "Fountain",
    //     href: "https://open.spotify.com/show/1YJ3UnbNY9miy5eF3CoalM"
    // },
    {
        icon: "overcast-icon.png",
        title: "Overcast",
        href: "https://overcast.fm/itunes1651491957"
    },
    {
        icon: "pocketcasts-icon.png",
        title: "Pocket Casts",
        href: "https://pca.st/f00soo51"
    },
    {
        icon: "podcastaddict-icon.png",
        title: "Podcast Addict",
        href: "https://podcastaddict.com/podcast/gaming-s-lost-memories/4131589"
    },
    // {
    //     icon: "podcast-guru-icon.png",
    //     title: "Podcast Guru",
    //     href: "https://podcastaddict.com/podcast/gaming-s-lost-memories/4131589"
    // },
];

const Links = () => {
    return (
        <div className='text-black'>
            <div className="">
                <div className='w-full'>
                    <div className=''>
                        <div className=''>
                            {links.map((link) => {
                                return (
                                    <Link
                                        className=''
                                        href={link.href}
                                        target='_blank'
                                        key={link.href}
                                    >
                                        <button className="p-2 transform transition-transform duration-300 hover:translate-y-1 hover:scale-105">
                                            <Image
                                                className="h-[35px] w-[35px] md:h-[45px] md:w-[45px]"
                                                src={link.icon}
                                                alt="logo"
                                                width={45}
                                                height={45}
                                                priority
                                            />
                                        </button>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Links