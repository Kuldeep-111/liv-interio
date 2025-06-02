import React from 'react'
import Heading from './Heading'
import Link from 'next/link'

const latestBlog = [ 
    {link:"Why Hiring an Interior Designer in Noida Extension is Worth the Investment?",slug:"blog-1"},
    {link:"The Best Interior Designer in Noida for Modern Spaces",slug:"blog-2"},
    {link:"How to Choose the Best Interior Designer in Greater Noida for Your Dream Home?",slug:"blog-3"},
]

const LatestBlog = () => {
  return (
    <>
    <Heading className='!text-black !text-left'>Latest Blogs</Heading>
    <ul className='mt-[20px]'>
        {latestBlog.map((data, index)=>(
            <li key={index} className='pb-[10px] mb-[20px] border-b border-[var(--text-primary)]'><Link href={`/blog-details?slug=${data.slug}`} className='text-[var(--text-primary)] !text-[13px]'>Why Hiring an Interior Designer in Noida Extension is Worth the Investment?</Link></li>
        ))}
    </ul>
    </>
  )
}

export default LatestBlog
