import React from 'react'
import { links } from './Links'
import Link from 'next/link'
import Image from 'next/image'

const ListenOn = () => {
    return (
        <div className='my-4'>
            <div className='text-lg'>
                Listen On
            </div>
            <div className='bg-white my-2 p-2'>
                {links.map((link) => {
                    return (
                        <>
                            <Link
                                className='flex'
                                href={link.href}
                                target='_blank'
                                key={link.title}
                            >
                                <button className="p-2 transform transition-transform duration-300 hover:translate-y-1 hover:scale-105">
                                    <Image
                                        className="h-[35px] w-[35px]"
                                        src={link.icon}
                                        alt="logo"
                                        width={35}
                                        height={35}
                                        priority
                                    />
                                </button>
                                <div className='flex items-center'>
                                    {link.title}
                                </div>
                            </Link>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default ListenOn