import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = async () => {

    const buttons = [
        { name: 'Home', href: '/' },
        { name: 'Episodes', href: '/episodes' },
        { name: 'About', href: '/about' },
        // { name: 'Patreon', href: '/' },
    ];

    return (
        <header className="section_container !py-0">
            <nav className='py-1 flex justify-between items-center'>
                <Link href="/">
                    <div className='flex items-center'>
                        <Image src="/logo.png" alt="logo" width={100} height={100} priority />
                        <span className="px-4 sm:text-lg md:text-2xl">Gaming&apos;s Lost Memories</span>
                    </div>
                </Link>
                <div className='hidden sm:block sm:flex'>
                    {buttons.map((button, i) => {
                        return (
                            <Link
                                key={i}
                                href={`${button.href}`}
                                className=''
                            >
                                <div className='pl-4 '>
                                    <button className='text-sm md:text-lg hover:underline'>
                                        {button.name}
                                    </button>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </nav>
        </header>
    )
}

export default Navbar