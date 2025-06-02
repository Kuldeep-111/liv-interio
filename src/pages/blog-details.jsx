import Hero from '@/components/Hero'
import BlogCard from '@/components/utilities/BlogCard'
import Container from '@/components/utilities/Container'
import LatestBlog from '@/components/utilities/LatestBlog'
import SearchInput from '@/components/utilities/SearchInput'
import Section from '@/components/utilities/Section'
import Image from 'next/image'
import React, { useState } from 'react'



const data = 
  {
    image: "/assets/images/blogs/blog-1.jpg",
    alt: "blog 1",
    type: "Interior Design",
    title:
      "Why Hiring an Interior Designer in Noida Extension is Worth the Investment?",
    date: "January 31, 2025",
    description:
      "Noida Extension is now identified as a suitable residential location for families, the working class, and all those who are keen on owning modern houses at a reasonable cost. The growth of more people settling in this soon-to-be busy estate has seen a heightened need for quality interiors.",
    slug: "blog-1",
  }


const BlogDetails = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <>
      <Hero imageSrc="/assets/images/about-us/banner.webp" title="Blog Details" />
      <Section id='details' className='relative overflow-hidden before:absolute before:bottom-0 before:left-[10%] before:w-[80%] before:h-[0.5px] before:bg-[var(--text-primary)]'>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-12 gap-[50px]'>
            <div className='md:col-span-9'>
            <BlogCard data={data} detailsPage={true}/>


            {/* <div className="w-full h-[400px] relative">
  <Image
    src={data.image}
    alt={data.alt}
    fill
    className="object-cover"
  />
</div> */}



            </div>
            <div className='md:col-span-3'>
            <SearchInput
            className="mb-[30px]"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search items..."
      />
              <LatestBlog/>
            </div>
          </div>
        </Container>
      </Section>
      
    </>
  )
}

export default BlogDetails
