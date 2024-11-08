import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const buttons: any[] = [
        { name: 'Episodes', href: '/episodes' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/' },
        { name: 'Patreon', href: '/' },
    ];

    const description: string = `
    Gaming's Lost Memories is a video game podcast covering everything from the most niche JRPG to some of gaming's largest video game franchises. BigReed shares his personal memories and stories that have been lost to the tides of time and provides important context to the history of these gaming events. BigReed is a former Video Game reviewer and author and has been gaming for over 30 years. Bring your nostalgia hats!
    `

    return (
        // <footer className="max-w-6xl mx-auto py-16">
        <footer className="mx-auto py-16 section_container">
            <div className='flex flex-col justify-between lg:flex-row'>
                <div className='max-w-lg'>
                    <div className='font-bold text-lg py-2'>
                        Gaming's Lost Memories
                    </div>
                    <div className='text-sm'>
                        {description}
                    </div>
                </div>
                <nav className='py-1 flex justify-between items-center'>
                    <div className='flex pt-4 lg:pt-0'>
                        {buttons.map((button, i) => {
                            return (
                                <div key={i} className='pr-4 lg:pr-0 lg:pl-4'>
                                    <button className=''>
                                        <Link href={`${button.href}`}>
                                            {button.name}
                                        </Link>
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </nav>
            </div>
            <div className='pt-4 lg:pt-12 text-sm text-slate-400'>
                © 2024 Gaming's Lost Memories
            </div>
        </footer>
    )
}

export default Footer