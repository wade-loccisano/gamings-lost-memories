"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {

    const buttons = [
        { name: 'Home', href: '/' },
        { name: 'Episodes', href: '/episodes' },
        { name: 'About', href: '/about' },
        // { name: 'Patreon', href: '/' },
    ];

    const handleClick = () => {
        console.log('click the button!')
    };

    return (
        <header className="section_container !py-0">
            <nav className='py-1 flex justify-between items-center'>
                <Link href="/">
                    <div className='flex items-center'>
                        <Image
                            src="logo.png"
                            alt="logo"
                            width={96}
                            height={96}
                            priority
                            className='h-12 w-12 md:h-24 md:w-24'
                        />
                        <span className="px-4 text-lg md:text-2xl">Gaming&apos;s Lost Memories</span>
                    </div>
                </Link>
                <div className='block lg:hidden'>
                    <button onClick={handleClick}>
                        <Image
                            className="h-[35px] w-[35px]"
                            src="menu_24dp_000000_FILL0_wght400_GRAD0_opsz24.png"
                            alt="logo"
                            width={50}
                            height={50}
                            priority
                        >
                        </Image>
                    </button>
                </div>
                <div className='hidden lg:block lg:flex'>
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
        </header >
    )
}

export default Navbar