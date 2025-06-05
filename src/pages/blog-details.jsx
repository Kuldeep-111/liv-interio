import Hero from '@/components/Hero'
import BlogCard from '@/components/utilities/BlogCard'
import Container from '@/components/utilities/Container'
import LatestBlog from '@/components/utilities/LatestBlog'
import Pagination from '@/components/utilities/Pagination'
import SearchInput from '@/components/utilities/SearchInput'
import Section from '@/components/utilities/Section'
import Head from 'next/head'
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
    heading:"Why Hire the Services of an Interior Designer in Noida Extension?",
    subHeading:"Saves Time and Reduces Stress",
    desc:"Let me start by saying that it is not easy to either build or even redesign a house. Working with an interior designer in Noida means you won’t have to handle anything on your own since the professional handles all the work. They simplify activities so that the various steps in the design and completion of the projects are all coordinated properly."
  }


const BlogDetails = () => {
  const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);
    const totalPages = 5;
  
    const handlePageChange = (newPage) => {
      setPage(newPage);
      // Fetch data or update URL query here if needed
    };
  return (
    <>
      <Head>
        <title>Liv Interio - Interior Design Excellence</title>
      </Head>
      <Hero imageSrc="/assets/images/blogs/blog-banner.webp" title="Blog Details" parent={{link:"/blogs",title:"Blogs"}}/>
      <Section id='details' className='relative overflow-hidden before:absolute before:bottom-0 before:left-[7.5%] before:w-[85%] before:h-[0.5px] before:bg-[var(--text-primary)]'>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-12 gap-[50px]'>
            <div className='md:col-span-9'>
            <BlogCard data={data} detailsPage={true}/>
               <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />


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
