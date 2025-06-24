import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <>
            <div className='fixed z-[999] top-0 right-0 bottom-0 left-0 bg-white text-center content-center'>
                <div className='text-4xl text-center py-4 my-5 font-bold w-full'>Access denied, please Login Now</div>
                <div className='my-5'>
                    <Link href='/login' className='bg-black border-black px-[30px] my-4 duration-300 py-[10px] border-2 text-white font-medium max-sm:scale-[0.80] hover:bg-white hover:text-black'>Login Now</Link>
                </div>
            </div>
        </>
    )
}

export default NotFound