import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = async () => {

    const buttons: any[] = [
        { name: 'Home', href: '/' },
        { name: 'Episodes', href: '/episodes' },
        { name: 'About', href: '/about' },
        { name: 'Patreon', href: '/' },
    ];

    return (
        <header className="section_container !py-0">
            {/* <header className="max-w-6xl mx-auto"> */}
            <nav className='py-1 flex justify-between items-center'>
                <div className='flex items-center'>
                    <Link href="/">
                        <Image src="/logo.png" alt="logo" width={125} height={125} priority />
                    </Link>
                    <span className="px-4 sm:text-lg md:text-2xl">Gaming's Lost Memories</span>
                </div>
                <div className='flex'>
                    {buttons.map((button, i) => {
                        return (
                            <div key={i} className='pl-4'>
                                <button className='text-sm md:text-lg'>
                                    <Link href={`${button.href}`}>
                                        {button.name}
                                    </Link>
                                </button>
                            </div>
                        )
                    })}
                </div>
            </nav>
        </header>
    )
}

export default Navbar