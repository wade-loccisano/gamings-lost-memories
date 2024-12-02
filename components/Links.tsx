import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Links = () => {
    const links = [
        {
            icon: "/appleIcon.png",
            href: "https://podcasts.apple.com/us/podcast/gamings-lost-memories/id1651491957"
        },
        {
            icon: "/spotify-icon.png",
            href: "https://open.spotify.com/show/1YJ3UnbNY9miy5eF3CoalM"
        },
        {
            icon: "/amazonmusic-icon.png",
            href: "https://music.amazon.com/podcasts/cf5a0333-52d3-4b99-8d7b-3b9b61a230ec/gaming's-lost-memories"
        },
        {
            icon: "/iheartradio-icon.png",
            href: "https://www.iheart.com/podcast/269-gamings-lost-memories-103785026/"
        },
        {
            icon: "/castbox-icon.png",
            href: "https://castbox.fm/channel/Gaming's-Lost-Memories-id5196606"
        },
        {
            icon: "/podcastaddict-icon.png",
            href: "https://podcastaddict.com/podcast/gaming-s-lost-memories/4131589"
        },
    ]

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
                                    >
                                        <button className="p-2 transform transition-transform duration-300 hover:translate-y-1 hover:scale-105">
                                            <Image
                                                className=""
                                                src={link.icon}
                                                alt="logo"
                                                width={50}
                                                height={50}
                                                priority
                                                objectFit="cover"
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