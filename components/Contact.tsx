import React from 'react'
import Link from 'next/link'

const Contact = () => {
    return (
        <div className='flex flex-col border rounded-lg w-full p-4 mt-4 lg:mt-0 bg-[#fff]'>
            <div className='text-2xl font-bold'>
                Join the Email List
            </div>
            <div className="my-2">
                <input
                    className='my-2 p-2 w-full border'
                    placeholder='Enter your first name...'
                >
                </input>
                {/* <div className="my-2 pt-2 w-full border">
                    <input
                        className='p-2'
                        placeholder='Enter your email address...'
                    >
                    </input>
                </div> */}
                <input
                    className='my-2 p-2 w-full border'
                    placeholder='Enter your email address...'
                >
                </input>
            </div>
            <div className='py-4'>
                <p>
                    By signing up, you agree to receive email from this podcast.
                </p>
            </div>
            <div className='text-center'>
                <button className='rounded-full px-4 py-2 bg-[#006237] text-[#fff]'>
                    Subscribe
                </button>
            </div>
        </div>
    )
}

export default Contact