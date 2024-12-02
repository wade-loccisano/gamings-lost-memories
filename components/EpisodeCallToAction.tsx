import React from 'react'
import Link from 'next/link';

const EpisodeCallToAction = () => {
    // const ctaText = "Follow us on social media:";
    const ctaText = "Follow us on RSS:";
    const socialMedia = [
        {
            name: "RSS",
            url: "https://rss.com/podcasts/gamingslostmemories/",
        },
        // {
        //     name: "RSS",
        //     url: "w",
        // },
    ]
    return (
        <div className='text-lg'>
            <div className='py-2'>
                {ctaText}
            </div>
            {socialMedia.map((item, i) => {
                return (
                    <div className="py-2" key={i}>
                        {item.name}: <Link
                            className='text-blue-400'
                            target="_blank"
                            href={item.url}
                        >{item.url}</Link>
                    </div>
                )
            })}
            <div className='py-4'>
                Thank You For Listening to Gaming's Lost Memories. Don’t forget to hit Subscribe or Follow us on your favorite podcast platform so you never miss an episode!
            </div>
            <div className='py-4'>
                Your Feedback matters to us. If you are a fan of the show, be sure to leave us 5-star Review on Apple Podcasts and share your favorite episodes.
            </div>
        </div>
    )
}

export default EpisodeCallToAction